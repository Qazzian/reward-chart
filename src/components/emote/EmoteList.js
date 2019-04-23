import React, {Component} from 'react';
import {connect} from 'react-redux';

import bem from '../../util/bem';

import * as fromAppState from '../../data/AppState';
import EmoteDay from './EmoteDay/EmoteDay';


const mapStateToProps = (state, ownProps) => ({
	emotes: fromAppState.getEmoteList(state, ownProps.emoteIds),
});

class EmoteList extends Component {

	blockName = 'EmoteDay';

	render() {
		const {
			blockName,
			props: {emotes}} = this;

		return emotes && emotes.map((emoteObj) => {

			return (
				<EmoteDay
					key={emoteObj.emoteId}
					date={emoteObj.date}
					emote={emoteObj.emoteType}
					className={bem(blockName, 'emoteDay')}
				/>
			)
		});
	}
}

export default connect(mapStateToProps)(EmoteList);
