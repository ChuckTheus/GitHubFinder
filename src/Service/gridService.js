import axios from 'axios';

export const fetchRepositoriesFromAPI = async () => {
  try {
    const response = await axios.post(
      'https://api.github.com/graphql',
      {
        query: `
          query {
            viewer {
              repositories(first: 10) {
                nodes {
                  name
                  owner {
                    login
                  }
                  description
                }
              }
            }
          }
        `,
      },
      {
        headers: {
          Authorization: `Bearer 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`,
        },
      }
    );
    return response.data.data.viewer.repositories.nodes;
  } catch (error) {
    throw new Error('Failed to fetch repositories');
  }
};
