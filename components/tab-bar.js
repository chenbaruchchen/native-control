import { StyleSheet, Text, View,Button  } from 'react-native';

export default function TabBar(props){
    return(
    <View  style={styles.container}>
   <Text onPress={()=>props.setTab('admin')} >admin</Text> 
     <Text onPress={()=>props.setTab('playGround')}>playGround</Text>
   </View>
);
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: '#fafafa',
       width:'100%',
       alignItems: 'center',
       justifyContent: 'space-evenly',
        flex:1,
        flexDirection:'row'
     },
  });