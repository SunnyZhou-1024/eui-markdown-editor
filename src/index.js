import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "@elastic/eui/dist/eui_theme_light.css";

import {
	EuiFlexGroup,
	EuiFlexItem,
	EuiImage
} from '@elastic/eui';

import Editor from './page';

function HelloWorld(props) {
	const [word, setWord] = useState('hello');

	return (<Editor />);
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('content')
);
