import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChartToday from './ChartToday';

const dateFormatOptions = {
  year: 'numeric',
  month: '2-diget',
  day: '2-diget',
}

const todayStr = new Date().toLocaleDateString(dateFormatOptions);

const charts = [
  {
    name: 'Empty Chart',
  },
  {
    name: 'Today Happy',
    emots: [{
      date: todayStr,
      emote: 'happy',
    }]
  },
  {
    name: 'Today Sad',
    emots: [{
      date: todayStr,
      emote: 'sad',
    }]
  }
];

const renderChart = (chart) =>  <ChartToday 
chart={chart} 
onHappyClick={action('Happy Click')}
onSadClick={action('Sad click')}
/>

const chartStories = storiesOf('Chart Today', module);
charts.forEach((chart) => {
  chartStories.add(chart.name, () => renderChart(chart));
});

  // .add('Empty Chart', () =>renderChart(charts.empty))
  // .add('Today happy', () => renderChart(charts.todayHappy))
;