import { Text,View ,StyleSheet, ActivityIndicator, FlatList, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAssets } from '../store/api';
import Card from '../UI/Card';
import Segmented from '../UI/Segmented/Segmented';
import Segmented3 from '../UI/Segmented3';
import SwitchButton from '../UI/SwitchButton';
import styles from './styles'

const AssetsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const dict = useSelector((state) => state.assets.dict);
  const index = useSelector((state) => state.assets.index);
  const loading = useSelector((state) => state.pending);

  const [tabs, setTabs] = useState(["Assets", "New",]);
  const [animate, setAnimate] = useState(false)

  useEffect(() => {dispatch(fetchAssets())}, []);

  useEffect( () => {
    navigation.setOptions({headerTitle: () => 
          <Segmented
            options={tabs}
            // selectedIndex={null}
            // onBeforeChange={null}
            style={styles.filters}
            segmentStyle={styles.filter}
            textStyle={styles.filter_text}   
          /> 
    })
  }, [navigation])

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

  const onSelectSwitch = () => console.log("Pressed")

  return (
    <>
      { loading
        ? <ActivityIndicator style={styles.loader} size="large" />
        : <>
            <Segmented3
              selectionMode={1}
              option1={"First"}
              option2={"Second"}
              selectionColor={'blue'}
              onSelectSwitch={onSelectSwitch}
            />
            <SwitchButton value={animate} onValueChange={setAnimate}/>
            <FlatList
              data={index}
              renderItem={renderOneAsset}
            ></FlatList>
        </> 
      }
    </>
  )
}

export default AssetsScreen;

// const styles = StyleSheet.create({
//   loader: {
//     alignSelf: 'center',
//   },
// })