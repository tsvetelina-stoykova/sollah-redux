import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {fetchOneAsset} from '../store/api';
import AssetComponent from '../UI/AssetComponent'

const AssetScreen = ({route, navigation}) => {
  const assetId = route.params.assetId;
  const dispatch = useDispatch();
  const asset = useSelector((state) => state.asset.asset);
  useEffect(() => {dispatch(fetchOneAsset(assetId))}, []);

  const onDetailsSelect = () => {
    navigation.navigate('AssetDetailsScreen')
  }

  const onToggleLike = () => {
    console.log("liked!")
  };

  const addToPlaylist = () => {
    console.log("added!")
  }

  return (
    <ScrollView>
      <View>
        <Image source={{uri: asset.thumb_url_big}} style={styles.thumbImg}/>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{asset.title} </Text>
        <View style={styles.description}>
          <Text style={styles.textDescription}>{asset.description}</Text>
        </View>       
        <View style={styles.innerContainer}>
          <Pressable
          onPress={onDetailsSelect}>
            <Text style={styles.subtitle}>Details</Text>
            {/* TODO: Example */}
          </Pressable>
        </View>
        <View style={styles.innerContainer}>
          <Pressable
          onPress={onToggleLike}>
            <Text style={styles.subtitle}>Like</Text>
          </Pressable>
        </View>
        <View style={styles.innerContainer}>
          <Pressable
          onPress={addToPlaylist}>
            <Text style={styles.subtitle}>Add to Playlist</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.components}>Components</Text>
      <View style={styles.container}>
        {asset.components ? asset.components.map(c => <AssetComponent 
                                  key={c.id} 
                                  title={c.title}
                                  type={c.type}
                                  runtime={c.runtime}
                                  />)
                          : null          
        }
      </View>

      
    </ScrollView>
  )
}

export default AssetScreen;

const styles = StyleSheet.create({
  thumbImg: {
    width: '100%',
    height: 250,
  },
  container: {
    paddingTop: 10,
    paddingHorizontal: 8,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22,
    paddingBottom: 8
  },
  description: { 
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2"
  },
  textDescription: {
    fontSize: 15,
    color: '#555',
  },
  innerContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2"
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  components: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#666',
    paddingVertical: 10
  }
})