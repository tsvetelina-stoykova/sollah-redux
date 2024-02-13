import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const AssetDetailsScreen = () => {
  const asset = useSelector((state) => state.asset.asset)
  return(
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Type</Text>
        <Text style={styles.description}>{asset.type}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Learning Paths</Text>
        <Text style={styles.description}>{asset.learning_paths}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Main Topic</Text>
        <Text style={styles.description}>{asset.topic}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Other Topics</Text>
        {asset.other_topics.map(o => <Text style={styles.description} key={o}>{o}</Text>)}
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Competencies</Text>
        {asset.competencies.map(c => <Text style={styles.description} key={c}>{c}</Text>)}
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Suggested Industry Usage</Text>
        {asset.industry_settings.map(c => <Text style={styles.description} key={c}>{c}</Text>)}
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Subject</Text>
        <Text style={styles.description}>{asset.subject}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Program</Text>
        <Text style={styles.description}>{asset.source_program}</Text>
      </View>
    </View>
  )
}

export default AssetDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2",
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 2
  },
  description: {
    color: '#666'
  }
})