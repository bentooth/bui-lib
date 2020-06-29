import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';

import { ThemeProvider } from 'styled-components'
import Theme from '../src/theme';

import Avatar from '../src/Avatar';

storiesOf('Avatars', module)
	.addDecorator(story => (
		<ThemeProvider theme={Theme}>
			<div style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '20px',
				height: 'auto'
			}}>
				<div style={{maxWidth: '50%'}}>
					{story()}
				</div>
			</div>
		</ThemeProvider>
		))
	.add('Small', () => (
		<Avatar />
	));
