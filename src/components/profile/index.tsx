import React from 'react';
import { gql } from '@apollo/client';

interface ProfileProps {
  user: {
    name: string;
    username: string;
    avatarUrl: string;
    followers: {
      totalCount: number;
    };
    following: {
      totalCount: number;
    };
  };
}

export const UserFragment = gql`
  fragment Profile_UserFragment on User {
    id
    name
    avatarUrl
    username: login
    followers {
      totalCount
    }
    following {
      totalCount
    }
  }
`;

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className='profile w-full h-full'>
      <div className='avatar ring-4 ring-gray-500 ring-offset-2 rounded-3xl'>
        <img className='rounded-3xl w-full' src={user?.avatarUrl} />
      </div>
      <h1 className='pt-2 text-2xl'>{user?.name}</h1>
      <h2 className='font-thin text-xl leading-loose'>{user?.username}</h2>
      <div className='flex flex-row font-thin italic'>
        <div className='pr-4'>
          Followers: {user?.followers?.totalCount || 0}
        </div>
        <div>Following: {user?.following?.totalCount || 0}</div>
      </div>
    </div>
  );
};

export default Profile;
