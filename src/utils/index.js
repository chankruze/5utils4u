/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri May 28 2021 09:30:04 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

export { getBMIStatus } from './bmiUtils';

// random color hex generator
export const randColHex = () =>
	'#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');

const pickInRange = (min, max) =>
	min + Math.floor(Math.random() * (max - min + 1));

// random color rgb generator
export const randColRGB = () => {
	const r = pickInRange(0, 255);
	const g = pickInRange(0, 255);
	const b = pickInRange(0, 255);

	return { r, g, b };
};
