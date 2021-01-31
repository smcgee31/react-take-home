import React from 'react';
import { gql, useQuery } from '@apollo/client';

const QUERY = gql`
  query MyRepos() {
    viewer {
      avatarUrl
      email
    }
  }
`;

const MyRepos: React.FC = () => {
  return <div className='my-repos'></div>;
};

export default MyRepos;
