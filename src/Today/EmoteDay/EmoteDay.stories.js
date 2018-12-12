import React from 'react';
import { storiesOf } from '@storybook/react';

import EmoteDay from './EmoteDay';

const renderDecorator = (story) => <div style={{
	maxWidth: '100px',
	border: '1px solid #ccc'
}}>
	{story()}
</div>

const stories = storiesOf('EmoteDay', module);
stories.addDecorator(renderDecorator);
stories.add('Happy day', () => <EmoteDay date="14-12-80" emote="happy"/>);

