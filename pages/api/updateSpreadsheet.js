import { google } from 'googleapis';
import path from 'path';
import fs from 'fs/promises';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    console.error("Error loading saved credentials:", err);
    return null;
  }
}

async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  const { name, groupName, email, date, signature, title, division, noticeAddress, supervisorSignature } = req.body;

  try {
    console.log("Authorizing...");
    const auth = await authorize();
    console.log("Authorization successful");

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    if (!spreadsheetId) {
      throw new Error("Missing spreadsheetId environment variable");
    }

    console.log("Getting existing IDs...");
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Waiver Info!A2:A',
    });

    console.log("Existing IDs response:", response.data);
    const rows = response.data.values || [];
    const nextId = rows.length + 1;

    const newRow = [
      nextId.toString(),
      name,
      groupName,
      email,
      date,
      signature,
      title,
      division,
      noticeAddress,
      supervisorSignature,
    ];

    console.log("Appending new row:", newRow);
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Waiver Info!A:I', // Appends to the bottom
      valueInputOption: 'RAW',
      resource: {
        values: [newRow],
      },
    });

    console.log("Row added successfully");
    res.status(200).json({ message: 'Row added successfully' });
  } catch (error) {
    console.error('Error adding row:', error);
    res.status(500).json({ message: 'Failed to add row', error: error.message });
  }
}
