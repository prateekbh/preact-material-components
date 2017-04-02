import {h, render} from 'preact';
import Home from './Components/Home/Home.jsx';
import './node_modules/preact-material-components/Typography/Typography.css';
import './node_modules/preact-material-components/Theme/Theme.css';
import './app.css';
render(
	<Home/>
	,document.querySelector('.app'));
