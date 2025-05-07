import React from 'react';

/**
 * Footer
 * @returns
 */
export default function FooterTemplate() {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
      <p className="text-sm text-gray-600">
        ⓒ {new Date().getFullYear()} My News Vault. All rights reserved.
      </p>
      <div className="mt-2 flex justify-center gap-4 text-sm text-gray-600">
        <a
          href="mailto:bobin6972@gmail.com"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          📧 bobin6972@gmail.com
        </a>
        <span>|</span>
        <a
          href="https://github.com/imnotpizza"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub
        </a>
      </div>
    </div>
  );
}
