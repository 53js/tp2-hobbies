/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';

import HobbiesList from './HobbiesList';

import './Hobbies.css';

// with function component (this is the way)
const Hobbies = () => {
	const [inputValue, setInputValue] = useState(''); // le state pour la valeur de l'input text
	const [myhobbies, setMyHobbies] = useState([]); // le state pour la liste de hobby

	// event handler pour l'input
	const handleChangeInput = (e) => {
		// lors de l'evenement onChange on change le state inputValue (controlled component)
		setInputValue(e.target.value);
	};

	// event handler pour le click sur le bouton
	const handleClickNew = () => {
		// on modifie la liste de hobbie qui est dans le state avec setHobbies
		setMyHobbies((previousHobbies) => {
			// la nouvelle valeur de a liste = ancienne valeur + la valeur saisie
			return [...previousHobbies, inputValue];
		});
		// on change la valeur du state inputValue => string vide (reset)
		setInputValue('');
	};

	const handleClickRemoveHobby = (hobbyToRemove) => {
		const newHobbiesList = myhobbies.filter(
			(hobby) => hobby !== hobbyToRemove && hobby,
		);
		setMyHobbies(newHobbiesList);
	};

	return (
		<div className="Hobbies">
			<h1>Mes Hobbies (functional)</h1>
			<p>Nombre de Hobbies: {myhobbies.length}</p>
			<HobbiesList
				hobbies={myhobbies}
				removeHobby={handleClickRemoveHobby}
			/>
			{/*
				notre input qui permet de saisir un nouveau hobby,
				sa valeur correspond au state de nos composants
			*/}
			<input
				type="text"
				onChange={handleChangeInput}
				placeholder="Ecrivez une hobby .."
				value={inputValue}
			/>
			<button type="button" onClick={handleClickNew}>
				Nouveau Hobby
			</button>
		</div>
	);
};

export default Hobbies;
