import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppRoutes from './components/App/AppRoutes';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

ReactDOM.render(<AppRoutes />, document.getElementById('root'));
