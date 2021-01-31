import { gql, useQuery } from '@apollo/client';

import './app.scss';
import DefaultLayout from '../../layouts/default';
import Profile, { UserFragment } from '../../components/profile';

const CURRENT_USER = gql`
  query CurrentUser {
    viewer {
      id
      ...Profile_UserFragment
    }
  }

  ${UserFragment}
`;

function App() {
  const { loading, data } = useQuery(CURRENT_USER);

  return (
    <DefaultLayout className='app-container'>
      <div className='h-full flex flex-row'>
        <Profile user={data?.viewer} />
      </div>
    </DefaultLayout>
  );
}

export default App;
