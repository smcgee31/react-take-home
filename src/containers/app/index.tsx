import { gql, useQuery } from '@apollo/client';

import './app.scss';
import DefaultLayout from '../../layouts/default';
import Profile, { UserFragment } from '../../components/profile';
import UserRepos, { RepoFragment } from '../../components/user-repos';

const CURRENT_USER = gql`
  query CurrentUser {
    viewer {
      id
      ...Profile_UserFragment
      repositories(first: 50, orderBy: { field: STARGAZERS, direction: DESC }) {
        nodes {
          id
          ...UserRepos_RepoFragment
        }
      }
    }
  }

  ${UserFragment}
  ${RepoFragment}
`;

function App() {
  const { data } = useQuery(CURRENT_USER);

  return (
    <DefaultLayout className='app-container'>
      <div className='h-full flex flex-row'>
        <div className='pt-3 w-1/4'>
          <Profile user={data?.viewer} />
        </div>
        <UserRepos repos={data?.viewer?.repositories?.nodes || []} />
      </div>
    </DefaultLayout>
  );
}

export default App;
