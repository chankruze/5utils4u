/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu May 27 2021 23:04:49 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import React from 'react';
import { useInputFloat } from 'geekofia-hooks';
import Layout from '../Layout';

import styles from './PrimeNumberChecker.module.sass';

const PrimeNumberChecker = () => {
	const [number, bindNumber, resetNumber] = useInputFloat();
	// const [status, setStatus] = useState('');

	const checkPrime = () => {
		if (number <= 7) {
			if (number == 1) {
				return 'not prime';
			}

			for (let i = 2; i < number; i++) {
				if (number % i == 0) {
					return 'not prime';
				}
				return 'prime';
			}

			return 'prime';
		} else {
			if (number % 2 !== 0) {
				if (number % 3 !== 0) {
					if (number % 5 !== 0) {
						if (number % 7 !== 0) {
							return 'prime';
						}
					}
				}
			}
			return 'not prime';
		}
	};

	return (
		<Layout className={styles.root}>
			<div className={styles.card}>
				<div className={styles.left}>
					<label htmlFor="num">Num</label>
					<input
						type="number"
						id="num"
						placeholder="Enter a no..."
						{...bindNumber}
					/>
					{/* <button onClick={checkPrime}>Check</button> */}
				</div>

				{number > 0 && (
					<div className={styles.right}>
						<h3>{checkPrime()}</h3>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default PrimeNumberChecker;
