import React from 'react';
import {
	Route,
	Link,
} from 'react-router-dom';


const Charts = ({match}) => {
	return (
		<div className="Charts">
			<h1 className="display-3">Charts</h1>

			<Route path={`${match.path}/:id`} component={Chart}/>
		</div>
	);
};

class Chart extends React.Component {
	render(match) {
		return (
			<div>
				<h3>URL ID parameter: {match.params.id}</h3>
			</div>
		);
	}
}

export default Charts;
