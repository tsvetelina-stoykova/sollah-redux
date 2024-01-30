import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import RelatedAsset from '../UI/RelatedAsset';

const BlogScreen = ({route}) => {
  const dict = useSelector((state) => state.dict);
  const item = route.params.params.item;
  const { width } = useWindowDimensions();
  const related_asset = dict[item].asset_ids;

  return (
    <ScrollView>
      <Text> One Blog</Text>
      <Text>{dict[item].title}</Text>
      <Image
          style={styles.image}
          source={{uri: dict[item].thumb_url}}
      />
      <View>
        <RenderHtml
          contentWidth={width}
          source={{html: dict[item].body}}
        />  
      </View>
      <View>
        {related_asset.map(a => <RelatedAsset key={a} />)}
      </View>  
    </ScrollView>
  )
}

export default BlogScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 210,
  }
})