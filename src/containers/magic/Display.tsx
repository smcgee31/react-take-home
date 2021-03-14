import { useQuery } from '@apollo/client';
import React from 'react';
import getGithubProfileAndRepos from './getGithubProfileAndRepos';

interface DisplayProps {
  person: string;
}
interface ReportDataProps {
  name: string;
  desc: string;
  stars: number;
  url: string;
}
interface Edge {
  node: Node;
}
interface Node {
  name: string;
  description: string;
  stargazerCount: number;
  url: string;
}

const RepoData: React.FC<ReportDataProps> = ({ name, desc, stars, url }) => {
  return (
    <div
      className="p-2 bg-gray-100 dark:bg-gray-900 rounded shadow-md h-full mb-4 ml-4"
      onClick={() => window.open(url, '_blank')}
    >
      <div className="repoName text-2xl">{name}</div>
      <div className="repoDesc">{desc}</div>
      <div className="repoStars ">{stars} ⭐️</div>
    </div>
  );
};

const Display: React.FC<DisplayProps> = ({ person }) => {
  const variables = { login: person };
  const { loading, error, data } = useQuery(getGithubProfileAndRepos, { variables });

  if (person === '') return <div></div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  const { user } = data;

  return (
    <div className="favoritesSection p-2">
      <div className="text-xl">Meet...</div>
      <div className="flex">
        <div className="w-1/3">
          <div className="avatar" onClick={() => window.open(user.url, '_blank')}>
            <img
              className="ring-2 ring-gray-500 ring-offset-2 rounded-xl my-2"
              src={user?.avatarUrl}
              alt="user profile"
            />
          </div>
          <div className="nameArea text-2xl">{user?.name}</div>
          <div className="bio">{user?.bio}</div>
          {user?.name === 'Steve McGee' && (
            <div className="rounded border border-gray-300 p-1">
              GuideCX should totally hire me!
            </div>
          )}
          <div className="hireable">
            {user?.isHireable
              ? "I'm currently looking for work."
              : "I'm not currently looking for work."}
          </div>
          <div className="repoCount">
            I've got {user?.repositories.totalCount} repos you can check out!
          </div>
        </div>
        <div className="flex flex-col mx-auto w-2/3">
          {user?.repositories.edges.map((edge: Edge) => (
            <RepoData
              name={edge.node.name}
              desc={edge.node.description}
              stars={edge.node.stargazerCount}
              url={edge.node.url}
            />
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Display;
