import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components'

import Theme from '../src/theme';
import Snackbar from '../src/Snackbar';

storiesOf('Snackbar', module)
	.addDecorator(story =>
		<ThemeProvider theme={Theme}>{ story() }</ThemeProvider>
	)
	.add('Default', () =>
		<Snackbar>I like turtles</Snackbar>
	)
	.add('With close', () =>
		<Snackbar onClose={console.log}>I like turtles</Snackbar>
	)
	.add('Positioned', () =>
		<Fragment>
			<Snackbar vertical="top" horizontal="left" onClose={console.log}>Top Left</Snackbar>
			<Snackbar vertical="top" horizontal="center" onClose={console.log}>Top Center</Snackbar>
			<Snackbar vertical="top" horizontal="right" onClose={console.log}>Top Right</Snackbar>
			<Snackbar vertical="center" horizontal="left" onClose={console.log}>Center Left</Snackbar>
			<Snackbar vertical="center" horizontal="center" onClose={console.log}>Center Center</Snackbar>
			<Snackbar vertical="center" horizontal="right" onClose={console.log}>Center Right</Snackbar>
			<Snackbar vertical="bottom" horizontal="left" onClose={console.log}>Bottom Left</Snackbar>
			<Snackbar vertical="bottom" horizontal="center" onClose={console.log}>Bottom Center</Snackbar>
			<Snackbar vertical="bottom" horizontal="right" onClose={console.log}>Bottom Right</Snackbar>
		</Fragment>
	);
