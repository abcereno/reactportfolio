import React from 'react';

const Footer = () => {
  return (
    <div className='bg-dark text-light p-2'>
      <ul className='list-unstyled d-flex justify-content-evenly m-auto'>
        <li>
          <a 
            href='https://www.facebook.com/abcereno' 
            target='_blank' 
            rel='noopener noreferrer' 
            aria-label='Facebook'
            className='text-light text-decoration-none'
          >
            Facebook
          </a>
        </li>
        <li>Copyright 2024</li>
      </ul>
    </div>
  );
}

export default Footer;
