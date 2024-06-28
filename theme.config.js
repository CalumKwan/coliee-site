export default {
    logo: (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/icon.png" alt="COLIEE Logo" style={{ height: '50px', marginRight: '10px' }} />
        <span>COLIEE</span>
      </span>
    ),
    project: {
      // link: 'https://github.com/CalumKwan/coliee-site', // Comment out or remove this line to hide the GitHub link
    },
    docsRepositoryBase: 'https://github.com/CalumKwan/coliee-site/blob/main',
    footer: {
      text: 'COLIEE © 2024',
    },

    feedback: {
      // Hide the feedback buttons
      content: () => null,
    },
    editLink: {
      // Hide the edit link
      component: () => null,
    },
    search: {
      // Disable the search bar
      // component: () => null,
    },
    useNextSeoProps() {
      return {
        titleTemplate: '%s – COLIEE'
      }
    }
  };
  