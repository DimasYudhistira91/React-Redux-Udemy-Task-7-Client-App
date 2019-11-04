import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const pageOne = () => {
  return (
    <div>
      <h3>Page One</h3>
      <p>
        <Link to="/pageTwo">Navigate to Page Two</Link>
      </p>
    </div>
  );
};

const pageTwo = () => {
  return (
    <div>
      <h3>Page Two</h3>
      <p>
        <Link to="/">Navigate to Page One</Link>
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={pageOne} />
          <Route path="/pageTwo" component={pageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
