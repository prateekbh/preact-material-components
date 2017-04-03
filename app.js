import {h, render} from 'preact';
import Home from './Components/Home/Home.jsx';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';
import './app.css';
render(
	<Home/>
	,document.querySelector('.app'));
