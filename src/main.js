import 'babel-polyfill';
window.Promise = Promise;
import './static/style/index.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Switch } from 'react-router';

ReactDom.render(
	<h1>hello world2234234</h1>,
	document.getElementById('root')
);