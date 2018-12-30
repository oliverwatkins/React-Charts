import React from "react";


const size = 20; //half size (ie radius)

export default function PieIcon(props) {

	let viewBox=` -${size} -${size} ${size*2} ${size*2}`

	return (
		<div>
			<div>
				<svg width={size} height={size} viewBox={viewBox} transform = "rotate(0 100 100)">
					{getPaths()}
				</svg>
			</div>
		</div>
	);
}
const slices = [
	{percent: 0.1, color: '#c1d138'},
	{percent: 0.7, color: '#7e97db'},
	{percent: 0.2, color: '#00ab6b'},
];
let cumulativePercent = 0;

function getCoordinatesForPercent(percent) {
	const x = Math.cos(2 * Math.PI * percent);
	const y = Math.sin(2 * Math.PI * percent);
	return [x, y];
}

const getPaths = () => {
	let paths = [];

	slices.forEach(slice => {

		let [startX, startY] = getCoordinatesForPercent(cumulativePercent);

		cumulativePercent += slice.percent;

		const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

		// if the slice is more than 50%, take the large arc (the long way around)
		const largeArcFlag = slice.percent > .5 ? 1 : 0;

		let radius = 1 * size;
		// create an array and join it just for code readability
		const pathData = [
			`M ${startX * size} ${startY * size}`, // Move
			`A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX * size} ${endY * size}`, // Arc
			`L 0 0`, // Line
		].join(' ');

		paths.push(<path d={pathData} fill={slice.color}/>)
	});
	return paths;
}



