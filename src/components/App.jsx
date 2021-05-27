/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 24 2020 07:04:05 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ManualStringReverser from './ManualStringReverser/ManualStringReverser';
import PrimeNumberChecker from './PrimeNumberChecker/PrimeNumberChecker';
import DecimalToBinary from './DecimalToBinary/DecimalToBinary';
import CrossSumOfANumber from './CrossSumOfANumber/CrossSumOfANumber';
import ArraySorter from './ArraySorter/ArraySorter';
// import PageNotFound from './PageNotFound';

import styles from './App.module.sass';

import PageCard from './PageCard';

const App = () => {
	return (
		<Router>
			<div className={styles.app}>
				<Switch>
					<Route exact path="/">
						<h1 className={styles.heading}>5utils4u</h1>
						<div className={styles.container}>
							<PageCard name="Manual String Reverser" />
							<PageCard name="Prime Number Checker" />
							<PageCard name="Decimal To Binary" />
							<PageCard name="Cross Sum of a Number" />
							<PageCard name="Array Sorter" />
						</div>
					</Route>
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
					{/* <Route path="/" component={PageNotFound} /> */}
				</Switch>
			</div>
		</Router>
	);
};

export default App;
