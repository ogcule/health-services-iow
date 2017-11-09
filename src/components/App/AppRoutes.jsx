// routes component
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServicesContainer from './../Services/containers/ServicesContainer';
import Home from './../Home/Home';
import FaqContainer from './../faq/containers/FaqContainer';
import Title from './Title';
import styles from './App.scss';
import NotFoundPage from './../shared/NotFoundPage';

const AppRoutes = () => (
  <Router>
    <div className={styles.container}>
      <Title />
      <div className={styles.innerContainer}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Services" component={ServicesContainer} />
          <Route path="/faq" component={FaqContainer} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </Router>
);


export default AppRoutes;
