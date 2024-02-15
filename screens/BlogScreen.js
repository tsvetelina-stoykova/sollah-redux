import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import RelatedAsset from '../UI/RelatedAsset';

const BlogScreen = ({route}) => {
  const dict = useSelector((state) => state.blog.dict);
  const blogId = route.params.blogId;
  const blogName = route.params.blogName;
  const { width } = useWindowDimensions();
  const related_asset = dict[blogId].asset_ids;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{dict[blogId].title}</Text>
      </View>
      <Image
            style={styles.image}
            source={{uri: dict[blogId].thumb_url}}
        />
      <View style={styles.container}>
        <View>
          <RenderHtml
            contentWidth={width}
            source={{html: dict[blogId].body}}
          />  
        </View>
        <View>
          {related_asset.map(a => <RelatedAsset key={a} />)}
        </View>  
      </View>
    </ScrollView>
  )
}

export default BlogScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 210,
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
  }
})