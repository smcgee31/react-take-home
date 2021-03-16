import { useQuery } from '@apollo/client';
import React from 'react';
import getGithubProfileBySearch from './getGithubProfileBySearch';

interface FavoriteGitProps {
  name: string;
  handleClick: Function;
}
interface FavoritesProps {
  handleClick: Function;
}

const favoriteNames = [
  'Wes Bos',
  'Sarah Drasner',
  'Dan Abramov',
  'Kent C Dodds',
  'Ryan Florence',
  'Scott Tolinski',
  'Jason Lengstorf',
  'Emma Bostian',
  'David Walsh',
];

const FavoriteGit: React.FC<FavoriteGitProps> = ({ name, handleClick }) => {
  const variables = { searchTerm: name };
  const { loading, error, data } = useQuery(getGithubProfileBySearch, { variables });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  const bio = data?.search?.edges[0].node;

  return (
    <div className="favoriteGit flex-wrap">
      <div className=" m-1 p-1">
        <div className="avatar" onClick={() => handleClick(bio.login)}>
          <img
            className="ring-2 ring-gray-500 ring-offset-2 rounded-xl "
            src={bio?.avatarUrl}
            alt="user profile"
          />
        </div>
      </div>
    </div>
  );
};

const Favorites: React.FC<FavoritesProps> = ({ handleClick }) => {
  return (
    <div className="p-2">
      <div className="favoritesSection">
        <div className="">
          <div className="my-2">Check out these awesome developers!</div>
          <div className="favoriteGitContainer flex justify-around">
            {favoriteNames.map((name) => (
              <FavoriteGit name={name} handleClick={handleClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
