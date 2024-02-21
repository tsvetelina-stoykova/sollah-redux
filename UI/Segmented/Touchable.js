import React from 'react';
import {
	View,
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
	TouchableHighlight
} from 'react-native';

import colors from './colors';

export default class Touchable extends React.PureComponent {
	render() {
		const {disabled, highlight, onPress, containerStyle, underlayColor, style, children, ...rest} = this.props;
		const opacity = (disabled ? 1 : 0.75);
		const press = (disabled ? null : onPress);
		return (highlight ?
			(Platform.OS === 'ios' ?
				<TouchableHighlight
					activeOpacity={opacity}
					underlayColor={underlayColor || colors.activeOpacity}
					style={containerStyle}
					{...rest}
					onPress={press}>
						<View style={style}>{children}</View>
				</TouchableHighlight> 
				:
				<TouchableNativeFeedback
					delayPressIn={0}
					useForeground={highlight}
					background={underlayColor ? 
						TouchableNativeFeedback.Ripple(underlayColor, false) :
						TouchableNativeFeedback.SelectableBackground()
					}
					style={containerStyle}
					{...rest}
					onPress={press}>
						<View style={style}>{children}</View>
				</TouchableNativeFeedback>
			)
			:
			<TouchableOpacity
				activeOpacity={opacity}
				style={style}
				{...rest}
				onPress={press}>
					{children}
			</TouchableOpacity> 
		);
	};
};
