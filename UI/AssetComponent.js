import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';


const AssetComponent = ({title, type, runtime}) => {
  return(
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.innerContainer}>
        <Text>{type}</Text>
        <Text>{runtime}</Text>
      </View>
    </View>
  )
}

export default AssetComponent;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
})