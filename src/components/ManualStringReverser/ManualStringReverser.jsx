/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu May 27 2021 22:36:47 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import Layout from '../Layout';
import { useInputText } from 'geekofia-hooks';

// styles
import styles from './ManualStringReverser.module.sass';

const ManualStringReverser = () => {
	const [text, bindText, resetText] = useInputText('');

	return (
		<Layout className={styles.root}>
			<div className={styles.upper}>
				<h2>Original</h2>
				<input
					type="text"
					id="inputText"
					{...bindText}
					placeholder="Type something..."
					autoComplete="off"
				/>
			</div>
			{text && (
				<div className={styles.lower}>
					<h2>Reversed</h2>
					<p>{Array.from(text).reverse().join('')}</p>
				</div>
			)}
		</Layout>
	);
};

export default ManualStringReverser;
