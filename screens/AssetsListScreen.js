import { Text, StyleSheet, Button } from 'react-native';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchAssets from '../store/fetchAssets';
import { useNavigation } from '@react-navigation/native';

const AssetsListScreen = () => {
  const dispatch = useDispatch();
  const dict = useSelector((state) => state.dict);
  const index = useSelector((state) => state.index);
  useEffect(() => {dispatch(fetchAssets())}, []);
  const navigation = useNavigation();

  const onPressLearnMore = () => {
    navigation.navigate('AssetDetailsScreen',{
      screen: 'AssetDetailsScreen',
      });
  }

  return (
    <Button
      onPress={onPressLearnMore}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  )
}

export default AssetsListScreen;

const styles = StyleSheet.create({

})