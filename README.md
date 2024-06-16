# COLIEE React Site

Welcome to the COLIEE (Competition on Legal Information Extraction/Entailment) website repository. This site is developed using React and is designed to provide an interactive platform for COLIEE participants and administrators.

## Getting Started

### Running the Site Locally

To run the site locally, follow these steps:

1. **Clone the Repository**
   ```sh
   git clone https://github.com/CalumKwan/coliee-site.git
   cd coliee-site
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Start the Development Server**
   ```sh
   npm run dev
   ```

   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes, and you may also see any lint errors in the console.

4. **Build for Production**
   ```sh
   npm run build
   ```

   This builds the app for production to the `.next` folder. It optimizes the build for the best performance.

## Project Structure

Here’s a brief overview of the project's structure:

```
coliee-site/
├── components/          # Reusable React components
│   ├── CaseMemorandumWaiverModal.js
│   ├── NavBar.js
│   ├── StatuteENMemorandumWaiverModal.js
│   ├── StatuteJAMemorandumWaiverModal.js
│   └── ApplicationFormModal.js
├── pages/               # Next.js pages
│   ├── _app.js
│   ├── application.js
│   ├── corpus.js
│   ├── evaluation.js
│   ├── index.js
│   ├── overview.js
│   ├── results.js
│   ├── schedule.js
│   ├── submission.js
│   └── tasks.js
│   └── waiver.js
├── public/              # Static files (e.g., images, icons)
│   ├── favicon.ico
│   └── coliee-icon.png
├── styles/              # Styling files
│   ├── globals.css
│   └── variables.scss
├── .gitignore           # Git ignore file
├── package.json         # NPM package configuration
├── README.md            # Project documentation
└── next.config.js       # Next.js configuration
```

## Development Guidelines

- **Component-Based Architecture**: Reuse React components to maintain a modular and maintainable codebase.
- **Styling**: Use `globals.css` for global styles and `variables.scss` for SCSS variables.
- **Routing**: Next.js handles routing based on the file structure in the `pages` directory. Ensure new pages follow the existing structure.

## Contact Information

For questions, concerns, or contributions, please contact:

**Calum Kwan**
- Email: jcwan@ualberta.ca
- Phone: 604-401-3973

Please reach out if you encounter any issues or have suggestions for improvements.
