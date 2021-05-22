import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import PeoplesPage from './pages/PeoplesPage';
import MoviesPage from './pages/MoviesPage';
import VehiclesPage from './pages/VehiclesPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/peoples" component={PeoplesPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/vehicles" component={VehiclesPage} />
      </Switch>
    </div>
  );
}

export default App;
