import { Pressable, View, Animated, SafeAreaView, StyleSheet } from "react-native"; 
import { useEffect, useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient';

const defaultStyles = {
	bgGradientColors: ['#0100ff', '#ff00fb'],
	headGradientColors: ['#ffffff', '#E1E4E8'],
};

const activeStyles = {
	bgGradientColors: ['#00c4ff', '#fff600'],
	headGradientColors: ['#444D56', '#0E1723'],
};


const SwitchButton = (props) => {
  const { value, onValueChange } = props;
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start()
  }, [value]);

  const translateX = animatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [28, 50], // Adjust the distance of the switch head
	});

  const toggleSwitch = () => {
		const newValue = !value;
		onValueChange(newValue);
	};

  const currentStyles = value ? activeStyles : defaultStyles;


  return(
    <Pressable onPress={toggleSwitch} style={styles.pressable}>
      <LinearGradient
        colors={currentStyles.bgGradientColors}
        style={styles.backgroundGradient}
        start={{
          x: 0,
          y: 1
        }}
      >
        <View style={styles.innerContainer}>
          <Animated.View
            style={{
              transform: [{ translateX }],
            }}
          >
              <LinearGradient
                colors={currentStyles.headGradientColors}
                style={styles.headGradient}
              />
          </Animated.View>
        </View>
      </LinearGradient>
    </Pressable> 
    
  )
}

export default SwitchButton;

const styles = StyleSheet.create({
  pressable: {
    width: 100,
    height: 30,
    borderRadius: 4,
    borderColor: "red"
  },
  backgroundGradient: {
    borderRadius: 4,
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  headGradient: {
    width: 45,
    height: 30,
    borderRadius: 4,
  },
 });
 