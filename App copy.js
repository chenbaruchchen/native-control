import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TabBar from './components/tab-bar';
import Admin from './components/tabs/admin/admin';
import PlayGround from './components/tabs/playGround/playGround';

 import { useState } from 'react';
export default function App() {
  const [tab,setTab]=useState('playGround')
  return (
    <View style={styles.container}>

 <View style={styles.body}>
  {tab==='playGround'?<PlayGround/>:<Admin/>}
 </View>
        <TabBar setTab={setTab}/>
 
    </View>
  );
}

const styles = StyleSheet.create(
  {
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
   
     
    flex:1,
   }, 
  
  body: {
height:'90%',
     alignItems: 'center',
    justifyContent: 'center',
    
    width:"100%"
  },
});
