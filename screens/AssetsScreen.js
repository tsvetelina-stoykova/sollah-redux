import { Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import fetchAssets from '../store/fetchAssets';
import Card from '../UI/Card';

const AssetsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const dict = useSelector((state) => state.dict);
  const index = useSelector((state) => state.index);
  const loading = useSelector((state) => state.pending);

  useEffect(() => {dispatch(fetchAssets())}, []);

  const renderOneAsset = (itemData) => {
    const onAssetSelect = () => {
      navigation.navigate('AssetDetailsScreen', {assetId: itemData.item})
    }
    return (
      <Card
        dict={dict}
        item={itemData.item}
        index={index}
        onPress={onAssetSelect} 
      />
    )
  }

  return (
    <>
      { loading
        ? <ActivityIndicator style={styles.loader} size="large" />
        : <FlatList
            data={index}
            renderItem={renderOneAsset}
           ></FlatList> 
      }
    </>
  )
}

export default AssetsScreen;

const styles = StyleSheet.create({
  loader: {
    alignSelf: 'center',
  },
})