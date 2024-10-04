import React from 'react'
import { link} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
      <header className="header">
        <h1 className="header-title">QuizUp</h1>
        <nav className="header-nav">
            <ul>
                <li>
                    <link to="/">Home</link>
                </li>
                <li>
                    <link to="/quiz">Quiz</link>
                </li>
                <li>
                    <link to="/results">Results</link>
                </li>
                <li>
                    <link to="/about">About</link>
                </li>
            </ul>
        </nav>
      </header>
  );
};

export default Header