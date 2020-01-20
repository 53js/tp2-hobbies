/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './HobbiesList.css';

const HobbiesList = ({ hobbies, removeHobby }) => {
	return (
		<ul className="HobbiesList">
			{(hobbies || []).map((hobby) => {
				return <li onClick={() => removeHobby(hobby)}>{hobby}</li>;
			})}
		</ul>
	);
};

HobbiesList.propTypes = {
	hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
	removeHobby: PropTypes.func.isRequired,
};

export default HobbiesList;
