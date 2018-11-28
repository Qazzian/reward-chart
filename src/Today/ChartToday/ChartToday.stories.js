import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChartToday from './ChartToday';

const fakeChart1 = {
  name: 'Chart1',
};

storiesOf('Chart Today', module)
  .add('Empty Chart', () => <ChartToday 
    chart={fakeChart1} 
    onHappyClick={action('Happy Click')}
    onSadClick={action('Sad click')}
  />)
  .add('With Today happy', () => {});