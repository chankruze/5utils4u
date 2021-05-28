/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 24 2020 07:04:05 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BMICalculator from './BMICalculator/BMICalculator';
import ManualStringReverser from './ManualStringReverser/ManualStringReverser';
import PrimeNumberChecker from './PrimeNumberChecker/PrimeNumberChecker';
import DecimalToBinary from './DecimalToBinary/DecimalToBinary';
import CrossSumOfANumber from './CrossSumOfANumber/CrossSumOfANumber';
import ArraySorter from './ArraySorter/ArraySorter';
import PageCard from './PageCard';
// import PageNotFound from './PageNotFound';

import { ImCalculator } from 'react-icons/im';
import { FaRev, FaSortAmountDown } from 'react-icons/fa';
import { AiOutlineNumber } from 'react-icons/ai';
import { GoFileBinary, GoPlus } from 'react-icons/go';

import { randColHex } from '../utils';

import styles from './App.module.sass';

const App = () => {
	return (
		<Router>
			<div className={styles.app}>
				<Switch>
					<Route exact path="/">
						<h1 className={styles.heading}>6utils4u</h1>
						<div className={styles.container}>
							<PageCard
								name="BMI Calculator"
								icon={<ImCalculator size={32} color={randColHex()} />}
							/>
							<PageCard
								name="Manual String Reverser"
								icon={<FaRev size={32} color={randColHex()} />}
							/>
							<PageCard
								name="Prime Number Checker"
								icon={
									<AiOutlineNumber size={32} color={randColHex()} />
								}
							/>
							<PageCard
								name="Decimal To Binary"
								icon={<GoFileBinary size={32} color={randColHex()} />}
							/>
							<PageCard
								name="Cross Sum of a Number"
								icon={<GoPlus size={32} color={randColHex()} />}
							/>
							<PageCard
								name="Array Sorter"
								icon={
									<FaSortAmountDown size={32} color={randColHex()} />
								}
							/>
						</div>
					</Route>
					<Route exact path="/bmi-calculator" component={BMICalculator} />
					<Route
						exact
						path="/manual-string-reverser"
						component={ManualStringReverser}
					/>

					<Route
						exact
						path="/prime-number-checker"
						component={PrimeNumberChecker}
					/>

					<Route exact path="/decimal-to-binary" component={DecimalToBinary} />

					<Route
						exact
						path="/cross-sum-of-a-number"
						component={CrossSumOfANumber}
					/>

					<Route exact path="/array-sorter" component={ArraySorter} />
					{/* <Route path="*" component={PageNotFound} /> */}
				</Switch>
			</div>
		</Router>
	);
};

export default App;
