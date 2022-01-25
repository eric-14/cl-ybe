import React from 'react'; 
import Header from './Header';
import Sidebar from './Sidebar';
import Recommended_videos from './Recommended_videos'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './SearchPage';

function App() {
  return ( 
    <div className="app">
      

      <Router>
      <Header />

        <Switch>
          <Route path="/search/:searchTerm">
          
            <div className="app__page">
              <Sidebar />
              <SearchPage />

            </div>

          </Route>
    
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <Recommended_videos />
            </div>
          </Route>
        </Switch>
      </Router>
      {/*
      
      */ }
      {/*video component*/}
      
    </div>        
     
  );
}

export default App;
