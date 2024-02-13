import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import RelatedAsset from '../UI/RelatedAsset';

const BlogDetailsScreen = ({route}) => {
  const dict = useSelector((state) => state.blog.dict);
  const blogId = route.params.blogId;
  const { width } = useWindowDimensions();
  const related_asset = dict[blogId].asset_ids;

  return (
    <ScrollView>
      <Text> One Blog</Text>
      <Text>{dict[blogId].title}</Text>
      <Image
          style={styles.image}
          source={{uri: dict[blogId].thumb_url}}
      />
      <View>
        <RenderHtml
          contentWidth={width}
          source={{html: dict[blogId].body}}
        />  
      </View>
      <View>
        {related_asset.map(a => <RelatedAsset key={a} />)}
      </View>  
    </ScrollView>
  )
}

export default BlogDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 210,
  }
})