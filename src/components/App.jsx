import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const pageOne = () => {
  return <div>Page One</div>;
};

const pageTwo = () => {
  return <div>Page Two</div>;
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
