import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

const DefaultLayout: React.FC<Props> = ({ children, className }) => {
  if (!process.env.REACT_APP_GITHUB_ACCESS_KEY) {
    throw new Error(
      'Missing environment variable: REACT_APP_GITHUB_ACCESS_KEY'
    );
  }

  return (
    <div className={`min-h-full flex flex-col default-layout ${className}`}>
      <header className='p-4 text-2xl bg-white dark:bg-gray-700 shadow-md'>
        <div className='container mx-auto space-x-10'>
          <Link to='/'>Profile</Link>
          <Link to='/magic'>Magic</Link>
        </div>
      </header>
      <main className='min-h-full flex flex-grow'>
        <div className='container mx-auto pt-8'>{children}</div>
      </main>
      <footer className='p-8 bg-gray-300 dark:bg-gray-900'>
        <div className='container mx-auto flex flex-column items-center h-full'>
          GuideCX Frontend Assessment
        </div>
      </footer>
    </div>
  );
};

export default DefaultLayout;
