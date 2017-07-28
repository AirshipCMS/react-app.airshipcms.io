import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Setup from './Setup';
import Styling from './Styling';
import AirshipSchema from './AirshipSchema';
import ReactTutorial from './ReactTutorial';
import Elements from './Elements';
import Element from './Element';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  	<App>
  		<Route path="/" component={Setup}/>
  		<Route path="/styling" component={Styling}/>
  		<Route path="/airship-schema" component={AirshipSchema}/>
  		<Route path="/react-tutorial" component={ReactTutorial}/>
  		<Route path="/elements" component={Elements}/>
  		<Route path="/element/:id" component={Element}/>
  	</App>
  </BrowserRouter>,
  document.getElementById('root')
);
