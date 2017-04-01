import {h, render} from 'preact';
import Home from './Components/Home/Home.jsx';
import './node_modules/preact-material-components/Components/Typography/Typography.css';
import './app.css';
render(
	<Home/>
	,document.querySelector('.app'));
