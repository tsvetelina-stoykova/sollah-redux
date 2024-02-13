import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import fetchOneAsset from '../store/fetchOneAsset';

const AssetDetailsScreen = ({route}) => {
  const assetId = route.params.assetId;
  console.log("id", assetId)
  const dispatch = useDispatch();
  const dict = useSelector((state) => state.dict);
  // useEffect(() => {dispatch(fetchOneAsset({assetId}))}, []);


  return (
    <ScrollView>
      <View>
        {/* <Image source={{uri: dict[assetId].thumb_url_big}} style={styles.thumbImg}/> */}
      </View>
      {/* <Text>{dict[assetId].title} </Text> */}
      <Text>Assets Details</Text>
    </ScrollView>
  )
}

export default AssetDetailsScreen;

const styles = StyleSheet.create({
  thumbImg: {
    width: '100%',
    height: 250,
  }
})