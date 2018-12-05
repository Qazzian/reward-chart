import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChartToday from './ChartToday';

import * as helpers from './ChartToday.helper';

const charts = [
  {
    name: 'Empty Chart',
  },
  {
    name: 'Today Happy',
    emots: [{
      date: helpers.todayStr,
      emote: 'happy',
    }]
  },
  {
    name: 'Today Sad',
    emots: [{
      date: helpers.todayStr,
      emote: 'sad',
    }]
	},
	{
		name: 'past emotes',
		emotes: [1,2,3,4,5].map(index => {
			return {
				date: helpers.dateFromNow(index),
				emote: index % 2 ? 'sad' : 'happy'
			}
		}).reverse()
	}
];

const renderChart = (chart) =>  <ChartToday 
chart={chart} 
onHappyClick={action('Happy Click')}
onSadClick={action('Sad click')}
/>

const renderDecorator = (story) => <div style={{
	maxWidth: '600px',
	padding: '20px',
	border: '1px solid #ccc'
}}>
	{story()}
</div>

const chartStories = storiesOf('Chart Today', module);
chartStories.addDecorator(renderDecorator)
charts.forEach((chart) => {
  chartStories.add(chart.name, () => renderChart(chart));
});

  // .add('Empty Chart', () =>renderChart(charts.empty))
  // .add('Today happy', () => renderChart(charts.todayHappy))
;