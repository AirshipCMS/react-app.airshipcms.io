import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Setup from './Setup';
import Styling from './Styling';
import AirshipSchema from './AirshipSchema';
import ReactTutorial from './ReactTutorial';
import Elements from './Elements';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  	<App path="/">
  		<Route path="/setup" component={Setup}/>
  		<Route path="/styling" component={Styling}/>
  		<Route path="/airship-schema" component={AirshipSchema}/>
  		<Route path="/react-tutorial" component={ReactTutorial}/>
  		<Route path="/elements" component={Elements}/>
  	</App>
  </BrowserRouter>,
  document.getElementById('root')
);
