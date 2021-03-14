import { gql } from '@apollo/client';

const getGithubProfileAndRepos = gql`
  query getGithubProfileAndRepos($login: String!) {
    __typename
    user(login: $login) {
      id
      avatarUrl(size: 200)
      bio
      createdAt
      name
      twitterUsername
      websiteUrl
      repositories(first: 8) {
        totalCount
        edges {
          node {
            name
            description
            stargazerCount
            url
          }
        }
      }
      isHireable
      url
      status {
        message
      }
    }
  }
`;

export default getGithubProfileAndRepos;
