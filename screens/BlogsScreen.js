import { StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import fetchBlogs from '../store/fetchBlogs';
import Card from '../UI/Card';

const BlogsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const dict = useSelector((state) => state.dict);
  const index = useSelector((state) => state.index);
  const loading = useSelector((state) => state.pending);

  useEffect(() => {dispatch(fetchBlogs())}, []);

  const renderOneBlog = (itemData) => {
    const onBlogSelect = () => {
      navigation.navigate('Blog', {blogId: itemData.item})
    }
    return (       
        <Card 
          dict={dict} 
          item={itemData.item} 
          index={index} 
          onPress={onBlogSelect}
        />
    )
  }

  return (
    <>
        { loading
          ? <ActivityIndicator style={styles.loader} size="large" />
          : <FlatList
             data={index}
             renderItem={renderOneBlog}          
          ></FlatList>
        }
    </>
  )
}

export default BlogsScreen;

const styles = StyleSheet.create({
  loader: {
    alignSelf: 'center',
  },
});