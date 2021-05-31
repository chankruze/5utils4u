/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri May 28 2021 09:38:13 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import { Link } from 'react-router-dom';

import { randColRGB } from '../utils';

import { MdHome } from 'react-icons/md';

import styles from './Layout.module.sass';

const Layout = ({ children, className }) => {
	const { r, g, b } = randColRGB();

	return (
		<section className={className}>
			<Link
				className={styles.home}
				to="/"
				style={{ background: `rgba(${r}, ${g}, ${b}, 0.1)` }}
			>
				<MdHome size={48} color={`rgba(${r}, ${g}, ${b}, 1)`}/>
			</Link>
			{children}
		</section>
	);
};

export default Layout;
