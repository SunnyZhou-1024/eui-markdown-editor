import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "@elastic/eui/dist/eui_theme_light.css";

import Editor from './page';

ReactDOM.render(
  <Editor />,
  document.getElementById('content')
);
