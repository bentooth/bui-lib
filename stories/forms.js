import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';

import { ThemeProvider } from 'styled-components'
import Theme from '../src/theme';

import TextField from '../src/TextField';
import MegaTextField from '../src/MegaTextField';
import MegaSelect from '../src/MegaSelect';

storiesOf('Form Inputs', module)
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
	.add('Text Field', () => (
		<TextField />
	))
	.add('Text Field with label', () => (
		<TextField
			label='Label'
			name='name'
			required
		/>
	))
	.add('Mega Text Field', () => (
		<MegaTextField />
	))
	.add('Mega Select Field', () => (
		<MegaSelect options={[{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }]} />
	));