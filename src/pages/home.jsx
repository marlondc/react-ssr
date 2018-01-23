import React from 'react';
import HeaderTag from '../components/atoms/header';

const Home = () => (
  <div id="content">
    <header>
      <div className="container">
        <HeaderTag>Marlon</HeaderTag>
        <ul>
          <li>
            <a href="https://github.com/marlondc">github</a>
          </li>
        </ul>
      </div>
    </header>
  </div>
);

export default Home;
