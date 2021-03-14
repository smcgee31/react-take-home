import { gql } from '@apollo/client';

const getGithubProfileBySearch = gql`
  query getGithubProfileBySearch($searchTerm: String!) {
    __typename
    search(query: $searchTerm, type: USER, first: 10) {
      edges {
        node {
          ... on User {
            id
            avatarUrl(size: 80)
            name
            url
            bio
            createdAt
            location
            websiteUrl
            login
          }
        }
      }
    }
  }
`;

export default getGithubProfileBySearch;
