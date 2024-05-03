import './css/index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Button from './components/Button';
import Products from './components/Gallery';
import Footer from './components/Footer';
import React, { useState } from 'react';


import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


function App() {
  const title = 'Blooms Market';
  const heading = 'The best plant shop';
  const h1 = 'Grow & Flourish: Where Plants Meet Passion';
  const h3 = 'Browse through some of the largest collection of plants to brighten your day';
  const dark = true;
  const productsTitle = 'Our latest products';
  const secOne = 'Indoor plants';
  const secTwo = 'Daisy';
  const secThree = 'Marigold';
  const secFour = 'Flowering plants';
  const copyRight = '@2024 Blooms market';

  const links = [
    {
      index: 0,
      name: 'About us',
      url: 'https://www.coponents.com/about/'
    },
    {
      index: 1,
      name: 'Projects',
      url: 'https://www.coponents.com/projects/'
    },
    {
      index: 2,
      name: 'Contacts',
      url: 'https://www.coponents.com/contact/'
    },
    {
      index: 3,
      name: 'Help',
      url: 'https://www.coponents.com/blogs/'
    }
  ];

  const footerContents = [
    {
      index: 1001,
      name: 'Index',
      url: '#'
    },
    {
      index: 1002,
      name: 'About us',
      url: '#'
    },
    {
      index: 1003,
      name: 'Discounts',
      url: '#'
    },
    {
      index: 1004,
      name: 'Contact us',
      url: '#'
    }
  ]

  return (
    <>
    <Header title={title} list={links} />
    <main>
      <div className='container'>
        <Banner heading={heading} h1={h1} h3={h3} dark={dark} />
        <Products productsTitle={productsTitle} secOne={secOne} secTwo={secTwo} secThree={secThree} secFour={secFour} />
      </div>
    </main>
    <Footer Instagram={faInstagram} Facebook={faFacebook} Twitter={faTwitter} Youtube={faYoutube} contents={footerContents} companyName={copyRight} />
    </>
  );
}

export default App;