import React from 'react';

export default function BeforeLoginLayout({ children }) {
  return (
    <div>
      <p>before login</p>
      {children}
    </div>
  );
}
