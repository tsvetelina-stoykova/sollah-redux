import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Segmented3 = ({
  navigation,
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
  selectionColor
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updatedSwitchData = (val) => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return(
    <View>
      <View style={[styles.container, {borderColor: selectionColor}]}>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {updatedSwitchData(1)}}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode === 1 ? selectionColor : 'white',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{
              color: getSelectionMode === 1 ? 'white' : selectionColor,
            }}>{option1}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {updatedSwitchData(2)}}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode === 2 ? selectionColor : 'white',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: getSelectionMode === 2 ? 'white' : selectionColor,
            }}
          >{option2}</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Segmented3;

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: 215,
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
  },

  // touchable2: {
  //   flex: 1,
  //   backgroundColor: getSelectionMode == 2 ? 'red' : 'white',
  //   borderRadius: 25,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // text1: {
  //   color: getSelectionMode == 1 ? 'white' : 'red',
  // },
  // text2: {
  //   color: getSelectionMode == 2 ? 'white' : 'red',
  // }
})