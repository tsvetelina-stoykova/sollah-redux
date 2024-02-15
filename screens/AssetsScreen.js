import { Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAssets } from '../store/api';
import Card from '../UI/Card';

const AssetsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const dict = useSelector((state) => state.assets.dict);
  const index = useSelector((state) => state.assets.index);
  const loading = useSelector((state) => state.pending);

  useEffect(() => {dispatch(fetchAssets())}, []);

  const renderOneAsset = (itemData) => {
    const onAssetSelect = () => {
      navigation.navigate('AssetScreen', {assetId: itemData.item})
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