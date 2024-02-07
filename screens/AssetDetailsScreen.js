import { Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const AssetDetailsScreen = ({route}) => {
  const assetId = route.params

  return (
    <Text>Assets Details Screen</Text>
  )
}

export default AssetDetailsScreen;

const styles = StyleSheet.create({

})