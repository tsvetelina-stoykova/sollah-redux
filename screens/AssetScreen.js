import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import fetchOneAsset from '../store/fetchOneAsset';

const AssetScreen = ({route, navigation}) => {
  const assetId = route.params.assetId;
  const dispatch = useDispatch();
  const asset = useSelector((state) => state.asset.asset);
  useEffect(() => {dispatch(fetchOneAsset(assetId))}, []);

  const onDetailsSelect = () => {
    navigation.navigate('AssetDetailsScreen')
  }
  return (
    <ScrollView>
      <View>
        <Image source={{uri: asset.thumb_url_big}} style={styles.thumbImg}/>
      </View>
      <View>
        <Text>{asset.title} </Text>
        <Text>{asset.description}</Text>
        <View>
          <Pressable
          onPress={onDetailsSelect}>
            <Text>Details</Text>
            {/* TODO: Example */}
          </Pressable>
        </View>  
      </View>
      
    </ScrollView>
  )
}

export default AssetScreen;

const styles = StyleSheet.create({
  thumbImg: {
    width: '100%',
    height: 250,
  }
})