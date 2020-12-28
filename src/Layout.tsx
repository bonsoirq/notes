import React from 'react';

type Props = {
  children: React.ReactNode,
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav>
        <h1>Notes App</h1>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
}
