import React from 'react';

interface Props {
  className?: string;
}

const DefaultLayout: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`h-full grid grid-rows-layout auto-rows-max gap-4 default-layout ${className}`}
    >
      <header className=''>hi</header>
      <main className='h-full'>
        <div className='container mx-auto h-full'>{children}</div>
      </main>
      <footer className=''>footer</footer>
    </div>
  );
};

export default DefaultLayout;
