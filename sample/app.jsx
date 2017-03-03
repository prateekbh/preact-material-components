import {h, render} from 'preact';
import Button from '../src/Button/Button';
import Checkbox from '../src/Checkbox/Checkbox';

render(
	<div>
		<Button raised={true} Ripple={true} >hi</Button>
		<Checkbox>hello</Checkbox>
	</div>
	,document.querySelector('.app'));
