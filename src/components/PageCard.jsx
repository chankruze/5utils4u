/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu May 27 2021 22:40:18 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PageCard.module.sass';

// eslint-disable-next-line
const PageCard = ({ name }) => {
	let link = `/${name.toLowerCase().replaceAll(' ', '-')}`;

	return (
		<Link className={styles.pageCard} to={link}>
			<h1>{name}</h1>
		</Link>
	);
};

export default PageCard;
