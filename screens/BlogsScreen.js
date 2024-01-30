import { StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchBlogs from '../store/fetchBlogs';
import BlogCard from '../UI/BlogCard';

const BlogsScreen = () => {
  const dispatch = useDispatch();
  const dict = useSelector((state) => state.dict);
  const index = useSelector((state) => state.index);
  const loading = useSelector((state) => state.pending);
  
  useEffect(() => {dispatch(fetchBlogs())}, []);

  const renderBlogItem = ({item, index}) => {
    return (       
        <BlogCard dict={dict} item={item} index={index}/>
    )
  }

  return (
    <>
        { loading
          ? <ActivityIndicator style={styles.loader} size="large" />
          : <FlatList
             data={index}
             renderItem={renderBlogItem}          
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