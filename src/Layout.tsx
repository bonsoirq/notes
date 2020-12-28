import React from 'react';

type Props = {
  children: React.ReactNode,
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="Layout">
      <nav>
        <h3>Notes App</h3>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
}
