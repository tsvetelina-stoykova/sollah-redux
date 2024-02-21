import { StyleSheet} from 'react-native';
import colors from '../UI/Segmented/colors'

const thumb_label = {
	height: 22,
	marginTop: -colors.hairline,
	justifyContent: 'center',
};

export default StyleSheet.create({
	thumb: {
		width: 120,
		alignSelf: 'flex-start',
		borderRadius: colors.thumbRadius,
		overflow: 'hidden',
		backgroundColor: colors.pale,
		
	},
	image: {
		width: 120,
		height: 90,
	},
	thumb_popular: {
		...thumb_label,
		backgroundColor: colors.popular
	},
	thumb_new: {
		...thumb_label,
		backgroundColor: colors.new
	},
	thumb_licensed: {
		...thumb_label,
		backgroundColor: colors.licensed
	},
	thumb_text: {
		color: '#fff',
		fontSize: 13,
		lineHeight: 15,
		textAlign: 'center',
		textShadowColor: '#0006',
		textShadowRadius: 2,
		textShadowOffset: {width: 0, height: 1},
	},

	overlay: {
		position: 'absolute',
		top: 4,
		right: 6,
	},
	overlay_icon: {
		color: colors.white,
		padding: 3,
		fontSize: 18,
		fontFamily: 'ui-icons',
		textShadowColor: '#0008',
		textShadowRadius: 4,
		textShadowOffset: {width: 0, height: 0.5},
	},

	title: {
		fontSize: 15,
		fontWeight: 'bold',
		lineHeight: 17,
	},
	description_separator: {
		fontSize: 2,
	},
	description: {
		fontSize: 14,
		color: '#444',
	},
	title_placeholder: {
		backgroundColor: '#eee',
		height: 17,
		width: '40%',
		borderRadius: 2,
		marginVertical: 2,
		paddingLeft: 4,
	},
	description_placeholder: {
		backgroundColor: colors.pale,
		marginTop: 6,
		borderRadius: 2,
		height: 14,
		width: '75%'
	},
	id: {
		fontSize: 13,
		color: colors.white,
	},

	type: {
		marginTop: 2,
		fontSize: 13,
		color: '#999',
	},
	highlighted: {
		backgroundColor: '#fd38'
	},
	row: {
		flexDirection: 'row',
		backgroundColor: colors.white,

		borderTopColor: 'transparent',
		borderTopWidth: colors.zeroline,
		borderBottomColor: colors.hair,
		borderBottomWidth: colors.hairline,

		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 10,
		paddingRight: 12,
		//height: ITEM_HEIGHT,
		overflow: 'hidden'
	},
	content: {
		paddingLeft: 10,
		flex: 1
	},
	// filters
	filters_header: {
		marginBottom: colors.zeroline,
	},
	filters_header_borderless: {
		marginBottom: -colors.zeroline,
		borderBottomColor: 'transparent'
	},
	filters: {
		backgroundColor: '#e8e8e8',
		borderColor: '#ccc',
		borderWidth: colors.hairline,
	},
	filter: {
		paddingVertical: 1,
		minWidth: 136,
		paddingHorizontal: 8,
	},
	filter_text: {
		fontWeight: 'bold',
		fontSize: 16,
	},
});
