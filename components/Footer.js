import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='text-center py-4  bg-cyan-200'>
      <p className='text-sm text-gray-800 '>
        © 2023 Starwars —
        <Link
          href='https://github.com/ehsaanChanga'
          className='text-gray-600 ml-1'
          rel='noopener noreferrer'
          target='_blank'
        >
          @ Ehsaan Changa
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
