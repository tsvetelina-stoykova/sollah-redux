import { StyleSheet, Platform } from 'react-native';

function epsilonline() {
	if(StyleSheet.hairlineWidth === 1.0) return 0;
	if(StyleSheet.hairlineWidth < 0.5) return 1 - StyleSheet.hairlineWidth * 2;
	return 1 - StyleSheet.hairlineWidth;
}

export default {
	radius: 5,
	buttonRadius: 4,
	thumbRadius: 3,
	
	pale: '#f4f4f4',
	hair: '#ddd',
	hairline: StyleSheet.hairlineWidth,
	zeroline: Platform.OS === 'ios' ? 0 : 1 - StyleSheet.hairlineWidth,
	epsilonline: Platform.OS === 'ios' ? 0 : epsilonline(),
	
	active: '#07f',
	activeText: '#fff',
	activeHint: '#fff9',
	activeLight: '#07f8',
	activeFocus: '#49f',

	activeOpacity: '#07f8',
	activeUnderlay: '#07f2',

	inactive: '#aaa',
	inactiveLight: '#ccc',
	inactiveDark: '#666',

	bullet: '#999',
	placeholder: '#bbb',

	new: '#F07700',
	popular: '#0282B7',
	licensed: '#98BD00',

	activeGreen: '#98BD00',
	activeRed: '#e20',

	switchActive: 'rgb(52,199,89)',

	white: '#fff',
	red: '#f00',
	redUnderlay: '#f003',
	black: '#000',

	weight: {
		thin: 100,
		ultralight: 200,
		light: 300,
		regular: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		heavy: 800,
		black: 900
	},

	zebraEven: '#f0f0f0',
	zebraOdd: '#fff',
}
