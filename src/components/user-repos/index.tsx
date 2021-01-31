import React from 'react';
import { gql } from '@apollo/client';

export const RepoFragment = gql`
  fragment UserRepos_RepoFragment on Repository {
    id
    description
    name: nameWithOwner
    stargazerCount
    updatedAt
    url
  }
`;

interface Repo {
  id: string;
  description?: string;
  name: string;
  stargazerCount: number;
  updatedAt: Date;
  url: string;
}

interface Props {
  repos: Repo[];
}

const UserRepos: React.FC<Props> = ({ repos = [] }) => {
  return (
    <ul className='user-repos w-full p-4 space-y-4 bg-gray-100 dark:bg-gray-900 mx-8 rounded shadow-md divide-y divide-gray-500 divide-opacity-60	h-4/5 overflow-scroll'>
      {repos.map((repo) => (
        <li key={repo.id} className='p-2'>
          <a className='text-2xl leading-loose' href={repo.url}>
            {repo.name}
          </a>
          <div className='space-x-2 text-thin'>
            <span>Stars: {repo.stargazerCount}</span>
            <span>Updated: {new Date(repo.updatedAt).toDateString()}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserRepos;
