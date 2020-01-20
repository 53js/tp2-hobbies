/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './HobbiesList.css';

// eslint-disable-next-line react/prefer-stateless-function
class HobbiesList extends Component {
	render() {
		const {
			hobbies,
			removeHobby,
		} = this.props;

		return (
			<ul className="HobbiesList">
				{(hobbies || []).map((hobby, idx) => {
					return (
						<li key={idx} onClick={() => removeHobby(hobby)}>
							{hobby}
						</li>
					);
				})}
			</ul>
		);
	}
}

HobbiesList.propTypes = {
	hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
	removeHobby: PropTypes.func.isRequired,
};

export default HobbiesList;
