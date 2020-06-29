import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components'
import Theme from '../src/theme';

import "./master.css";

setOptions({
  name: "Modular UI",
  url: "https://modular-network.github.io/",
});

function loadStories() {
	require('../stories/index');
	require('../stories/forms');
	require('../stories/avatars');
	require('../stories/snackbar');
}


configure(loadStories, module);