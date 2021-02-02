import { gql } from '@apollo/client';

import './user-repos.scss';

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
    <div className='user-repos flex flex-col mx-8 w-full h-full min-h-full'>
      <h3 className='text-3xl mb-6 font-semibold'>Repositories</h3>
      <div className='p-4 grid xlg:grid-cols-3 grid-cols-2 gap-4 bg-gray-100 dark:bg-gray-900 rounded shadow-md h-full mb-16'>
        {repos.map(repo => (
          <div
            key={repo.id}
            className='flex flex-col justify-center p-4 px-8 border rounded border-gray-700'
          >
            <a className='text-2xl' href={repo.url}>
              {repo.name}
            </a>
            <div className='space-x-2 text-thin italic'>
              <span>Stars: {repo.stargazerCount}</span>
              <span>Updated: {new Date(repo.updatedAt).toDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRepos;
