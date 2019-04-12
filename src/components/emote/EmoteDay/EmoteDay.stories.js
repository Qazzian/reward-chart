import React from 'react';
import { storiesOf } from '@storybook/react';

import EmoteDay from './EmoteDay';

const renderDecorator = (story) => <div style={{
	maxWidth: '100px',
}}>
	{story()}
</div>

const stories = storiesOf('EmoteDay', module);
stories.addDecorator(renderDecorator);
stories.add('Happy day', () => <EmoteDay date="14-12-80" emote="HAPPY"/>);
stories.add('Sad day', () => <EmoteDay date="14-12-80" emote="SAD"/>);

