import { View, Pressable, Image, Text, StyleSheet } from 'react-native';

const Card = ({dict, item, onPress}) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable style={({pressed}) => [
        styles.container, pressed ? styles.pressedButton : null]}
        onPress={onPress}
      >
        <Image
          style={styles.image}
          source={{uri: dict[item].thumb_url}}
        />
        
        <View style={styles.innerContainer} > 
          <Text style={styles.title} key={item.index} >{dict[item].title}</Text>
          <Text style={styles.desc} key={item.index} numberOfLines={4}>{dict[item].description}</Text>
        </View>   
      </Pressable>          
    </View> 
  )
}

export default Card

const styles = StyleSheet.create({
  outerContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 8,  
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: 'cover',
    borderRadius: 8,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    maxHeight: 80,
    paddingVertical: 8,
    paddingLeft: 6
  },
  title: {
   paddingBottom: 8,
   fontWeight: 'bold',
   fontSize: 16
  },
  pressedButton: {
    opacity: 0.75
  }
})