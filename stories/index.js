import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';

import { ThemeProvider } from 'styled-components'
import Theme from '../src/theme';

import Colours from './Colours.jsx';
import Icons from './Icons.jsx';

storiesOf('Brand', module)
	.addDecorator(story => (
		<ThemeProvider theme={Theme}>
			<div style={{
				padding: '20px',
				height: 'auto'
			}}>
				{story()}
			</div>
		</ThemeProvider>
		))
	.add('Icons', () => (
		<Icons />
	))
	.add('Colours', () => (
		<Colours />
	));