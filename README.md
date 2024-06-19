# COLIEE React/Next.js Site

Welcome to the COLIEE (Competition on Legal Information Extraction/Entailment) website repository. This site is developed using React and Next.js, providing an interactive platform for COLIEE participants and administrators.

## Getting Started

### Running the Site Locally

To run the site locally, follow these steps:

1. **Clone the Repository**
   ```
   git clone https://github.com/CalumKwan/coliee-site.git
   cd coliee-site
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Start the Development Server**
   ```
   npm run dev
   ```

   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes, and you may also see any lint errors in the console.

4. **Build for Production**
   ```
   npm run build
   ```

   This builds the app for production to the `.next` folder. It optimizes the build for the best performance.

## Project Structure

Here’s a brief overview of the project's structure:

```
coliee-site/
├── components/          # Reusable React components
│   ├── ApplicationFormModal.tsx
│   ├── CaseMemorandumWaiverModal.tsx
│   ├── NavBar.tsx
│   ├── StatuteENMemorandumWaiverModal.tsx
│   ├── StatuteJAMemorandumWaiverModal.tsx
├── pages/               # Next.js pages
│   ├── _app.mdx
│   ├── _document.tsx
│   ├── application.mdx
│   ├── contact.mdx
│   ├── corpus.mdx
│   ├── evaluation.mdx
│   ├── index.mdx
│   ├── overview.mdx
│   ├── resources.mdx
│   ├── results.mdx
│   ├── schedule.mdx
│   ├── submission.mdx
│   ├── tasks.mdx
│   └── waiver.js
├── public/              # Static files (e.g., images, icons)
│   ├── favicon.ico
│   └── icon.png
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
- **TypeScript**: The project is now using TypeScript for improved type safety and development experience. Ensure new files are created with the `.tsx` extension.
- **Styling**: Use `globals.css` for global styles and `variables.scss` for SCSS variables.
- **Routing**: Next.js handles routing based on the file structure in the `pages` directory. Ensure new pages follow the existing structure.
- **Modals and Forms**: Utilize modals for forms and user interactions where appropriate, maintaining a consistent user experience.
- **Markdown & MDX**: Use `.mdx` files for content pages to take advantage of Markdown with JSX components.

## Contact Information

For questions, concerns, or contributions, please contact:

**Calum Kwan**
- Email: jcwan@ualberta.ca
- Phone: 604-401-3973

Please reach out if you encounter any issues or have suggestions for improvements.
