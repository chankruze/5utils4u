/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu May 27 2021 22:40:18 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PageCard.module.sass';

// eslint-disable-next-line
const PageCard = ({ name, icon }) => {
	let link = `/${name.toLowerCase().replaceAll(' ', '-')}`;

	return (
		<Link className={styles.pageCard} to={link}>
			<div className={styles.icon}>{icon}</div>
			<div className={styles.name}>
				<h1>{name}</h1>
			</div>
		</Link>
	);
};

export default PageCard;
