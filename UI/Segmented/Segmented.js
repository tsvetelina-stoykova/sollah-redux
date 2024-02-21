import React from 'react';
import {View, StyleSheet, Animated, Easing, Text} from 'react-native';
import Touchable from './Touchable';
import colors from './colors';

export default class Segmented extends React.PureComponent {

	static defaultProps = {
		options: [],
		selectedIndex: 0,
		animated: true,
		animationDuration: 200,
		hitSlop: {top:5, bottom:5},
		textStyle: null, 
		segmentStyle: null,
	}

	constructor(props) {
		super(props);
		this.state = {
			i: props.selectedIndex,
			iPrev: null,
			animating: false
		};
		this.animated = new Animated.Value(0);
		this.layouts = {};
	}

	componentDidUpdate(prev) {
		if(prev.selectedIndex !== this.props.selectedIndex && this.state.i !== this.props.selectedIndex) {
			this.setState({i: this.props.selectedIndex, iPrev: this.state.i});
			if(this.props.animated) {
				this.animate();
			}
		}
	}

	render() {
		const {i, iPrev, animating} = this.state;
		const {options, textStyle, segmentStyle, hitSlop} = this.props;
		const layouts = this.layouts;

		const selectedLayout = layouts[i];
		let translateX;
		let scaleX;
		let reverseOpacity;

		if(animating) {
			const prevLayout = layouts[iPrev];
			if(selectedLayout && prevLayout) {
				translateX = this.animated.interpolate({
					inputRange: [0, 1],
					outputRange: [prevLayout.x, selectedLayout.x]
				});
				scaleX = this.animated.interpolate({
					inputRange: [0, 1],
					outputRange: [prevLayout.width/selectedLayout.width, 1] // current width is selectedLayout.width
				});
				reverseOpacity = this.animated.interpolate({
					inputRange: [0, 1],
					outputRange: [1, 0]
				});
			}
		}

		const segments = options.map( (option, index) => {
			const segmentStyles = [styles.segment, segmentStyle];
			const textStyles = [styles.text, textStyle];

			if (index === 0) {
				segmentStyles.push(styles.first_segment);
			}

			if(i === index) {
				if(animating) {
					textStyles.push({opacity: i === index && animating ? reverseOpacity : 1});
				} else {
					segmentStyles.push(styles.selected_segment);
					textStyles.push(styles.selected_text);
				}
				if(option.backgroundColor) segmentStyles.push({backgroundColor: option.backgroundColor});
			}

			return <Touchable
				key={index}
				hitSlop={hitSlop}
				style={segmentStyles}
				onPress={this.onPress.bind(this, index, option)}
				onLayout={this.onSegmentLayout.bind(this, index)}>

				{ animating && i === index ? 
					<Animated.Text style={textStyles}>{option.label}</Animated.Text> :
					<Text style={textStyles}>{option.label}</Text>
				}

			</Touchable>;
		});

		return (
			<View style={[styles.wrapper, this.props.style]}>

				{animating && selectedLayout ? <React.Fragment>
					<Animated.View style={[
						styles.segment,
						segmentStyle,
						styles.selected_segment,
						options[i].backgroundColor ? {backgroundColor: options[i].backgroundColor} : null,
						{ 
							position: 'absolute',
							width: selectedLayout.width,
							height: selectedLayout.height,
							transform: [{translateX}, {scaleX}]
						}	
					]}/>
					<View style={[styles.segment, segmentStyle, styles.selected_segment, styles.overlay_segment, {
						left: selectedLayout.x,
						width: selectedLayout.width,
					}]}>
						<Animated.Text style={[styles.text, textStyle, styles.selected_text, {opacity: this.animated}]}>
							{options[i].label}
						</Animated.Text>
					</View>
				</React.Fragment> 
				: null }

				{segments}
				
			</View>
		);
	}

	onSegmentLayout = (i, data) => {
		this.layouts[i] = data.nativeEvent.layout;
	}

	onPress = (i, option) => {
		this.setState({i, iPrev: this.state.i});
		this.props.onBeforeChange && this.props.onBeforeChange(i, option);
		if(this.props.animated) {
			this.animate(() => this.props.onChange && this.props.onChange(i, option));
		} else {
			this.props.onChange && this.props.onChange(i, option);
		}
	}

	animate = (callback) => {
		const {options, animationDuration} = this.props;
		if(this.state.i < 0 || this.state.i > options.length) return; //animate only if in range
		this.setState({animating: true});
		this.animated.setValue(0);
		Animated.timing(this.animated, {
			toValue: 1,
			duration: animationDuration,
			easing: Easing.out(Easing.circle),
			useNativeDriver: true
		}).start(() => {
			callback && callback();
			this.setState({animating: false})
		});
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		borderRadius: 5,
	},
	segment: {
		paddingHorizontal: 5,
		borderRadius: 4,
	},
	selected_segment: {
		backgroundColor: colors.active
	},
	overlay_segment: {
		position: 'absolute',
		alignSelf: 'center',
		paddingHorizontal: 0,
		justifyContent: 'center',
		backgroundColor: 'transparent',
		zIndex: 1,
	},
	first_segment: {
		borderLeftWidth: 0,
	},
	text: {
		paddingHorizontal: 8,
		paddingVertical: 5,
		textAlign: 'center',
		color: colors.active,
	},
	selected_text: {
		color: colors.white,
	},
});
