/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu May 27 2021 23:05:05 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import Layout from '../Layout';
import { useInputFloat } from 'geekofia-hooks';

import styles from './DecimalToBinary.module.sass';

const DecimalToBinary = () => {
	const [number, bindNumber, resetNumber] = useInputFloat();

	const dec2bin = () => {
		if (typeof number === 'number') {
			return (Number(number) >>> 0).toString(2);
		}
	};

	return (
		<Layout className={styles.root}>
			<div className={styles.card}>
				<div className={styles.top}>
					<input
						type="number"
						id="num"
						placeholder="Enter a no..."
						{...bindNumber}
					/>
				</div>

				{!isNaN(number) && (
					<div className={styles.bottom}>
						<p>{dec2bin()}</p>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default DecimalToBinary;
