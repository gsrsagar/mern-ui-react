import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import { Head1, Head2, image, audioC, svgIcon } from './consts';
import Navigation from './Navigation';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Posts from './Posts';
import { NotFound } from './NotFound';
import { Home } from './Home';
import { Protected } from './Protected';

export class App extends React.Component {
  user = {
    email: "sikindhargmail.com",
    token: "wdiqfifniqfinqwqfniqnidfqindfqindf"
  }
  render() {
    return (
      <div className="App">

        <>{Head1}</>
        <Head2 user={this.user}></Head2>
        {image}
        {audioC}
        {svgIcon}
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>

        <button type="button" class="btn btn-link">Link</button>
        {/* <Head1></Head1> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }

}
export function App1() {

  return (
    <Router>
      <Navigation />
      <div className='body-rendering'>
        <Routes>
          {/* <Route element={<Protected />}> */}
          <Route path='/home' element={<Home />}></Route>
          <Route path='/posts' element={<Posts name={'Sikindhar'} graduation={'CSE 4th year'} />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

// studentName
// onClick
//className
// class
export default App;
