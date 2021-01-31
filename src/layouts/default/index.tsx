import React from 'react';

interface Props {
  className?: string;
}

const DefaultLayout: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`h-full grid grid-rows-layout auto-rows-max gap-4 default-layout ${className}`}
    >
      <header className='p-4 text-2xl bg-white dark:bg-gray-700 shadow-md'>
        <div className='container mx-auto'>Hello!</div>
      </header>
      <main>
        <div className='container mx-auto h-full mt-8'>{children}</div>
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
