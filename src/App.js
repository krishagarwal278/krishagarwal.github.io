import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Krish, a Developer, Investor, Entrepreneur</p>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>I'm passionate about [your passions or skills]. I have experience in [mention skills or tools] and love working on [mention project type].</p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <ul>
          <li>Project 1: <a href="https://github.com/krishagarwal278/" target="_blank" rel="noopener noreferrer">Project 1 Details</a></li>
          <li>Project 2: <a href="https://github.com/krishagarwal278/repositories" target="_blank" rel="noopener noreferrer">Project 2 Details</a></li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email me at: <a href="mailto: krishagarwal278@gmail.com">krishagarwal278@gmail.com</a></p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} [Krish Agarwal]</p>
      </footer>
    </div>
  );
}

export default App;
