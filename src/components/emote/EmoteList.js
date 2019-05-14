import React, {Component} from 'react';
import {connect} from 'react-redux';

import bem from '../../util/bem';

import * as fromAppState from '../../data/AppState';
import EmoteDay from './EmoteDay/EmoteDay';


export default class EmoteList extends Component {

	blockName = 'EmoteDay';

	render() {
		const {
			blockName,
			props: {emoteIds}
		} = this;

		return emoteIds && emoteIds.map((emoteObj) => {
			return (
				<EmoteDay
					key={emoteObj.emoteId || emoteObj.date}
					date={emoteObj.date}
					emote={emoteObj.emoteType || 'SAD'}
					className={bem(blockName, 'emoteDay')}
				/>
			)
		});
	}
}
