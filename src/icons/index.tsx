import React from 'react';

export const ArrowDown = ({ size = 24, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={`text-neutral dark:text-neutral ${className}`}
    fill='none'
    stroke='currentColor'
    {...props}
  >
    <path d="M14.9408 7.99988L10.2741 11.9999L5.60742 7.99988" strokeLinecap="round" strokeLinejoin="round" className='' />
  </svg>
);

export const OctagonAlert = ({ size = 24, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={`text-neutral dark:text-neutral ${className}`}
    fill='none'
    stroke='currentColor'
    {...props}
  >

    <path d="M12 16H12.01" stroke="#1A1313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    <path d="M12 8V12" stroke="#1A1313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    <path d="M15.312 2C15.8424 2.00011 16.351 2.2109 16.726 2.586L21.414 7.274C21.7891 7.64899 21.9999 8.15761 22 8.688V15.312C21.9999 15.8424 21.7891 16.351 21.414 16.726L16.726 21.414C16.351 21.7891 15.8424 21.9999 15.312 22H8.688C8.15761 21.9999 7.64899 21.7891 7.274 21.414L2.586 16.726C2.2109 16.351 2.00011 15.8424 2 15.312V8.688C2.00011 8.15761 2.2109 7.64899 2.586 7.274L7.274 2.586C7.64899 2.2109 8.15761 2.00011 8.688 2H15.312Z" stroke="#1A1313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

  </svg>
);

export const UserRound = ({ size = 24, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={`text-neutral dark:text-neutral ${className}`}
    fill='none'
    stroke='currentColor'
    {...props}
  >

    <path d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z" stroke="#1A1313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    <path d="M20 21C20 18.8783 19.1571 16.8434 17.6569 15.3431C16.1566 13.8429 14.1217 13 12 13C9.87827 13 7.84344 13.8429 6.34315 15.3431C4.84285 16.8434 4 18.8783 4 21" stroke="#1A1313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

  </svg>
);
