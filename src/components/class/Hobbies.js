/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React, { Component } from 'react';

import HobbiesList from './HobbiesList';

import './Hobbies.css';

// with Class
// eslint-disable-next-line
class Hobbies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myhobbies: [],
			inputValue: '',
		};
	}

	handleChangeInput = (e) => {
		this.setState({ inputValue: e.target.value });
	};

	handleClickNew = () => {
		this.setState((previousState) => {
			return {
				myhobbies: [...previousState.myhobbies, previousState.inputValue],
				inputValue: '',
			};
		});
	};

	handleClickRemoveHobby = (hobbyToRemove) => {
		this.setState((prevState) => {
			const newHobbiesList = prevState.myhobbies.filter(
				(hobby) => (hobby !== hobbyToRemove && hobby),
			);
			return { myhobbies: newHobbiesList };
		});
	};

	render() {
		return (
			<div className="Hobbies">
				<h1>Mes Hobbies (class)</h1>
				<p>Nombre de Hobbies: {this.state.myhobbies.length}</p>
				<HobbiesList hobbies={this.state.myhobbies} removeHobby={this.handleClickRemoveHobby} />
				<input
					type="text"
					onChange={this.handleChangeInput}
					placeholder="Ecrivez une hobby .."
					value={this.state.inputValue}
				/>
				<button type="button" onClick={this.handleClickNew}>
					Nouveau Hobby
				</button>
			</div>
		);
	}
}

export default Hobbies;
