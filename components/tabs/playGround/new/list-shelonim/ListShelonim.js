import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView} from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

import readDir from '../../../../fileSystem/readDir'

import ListItem from './list-item';
export default function Admin(props) {
    const [shelonim,setShelonim]=useState(null)
     useEffect(()=>{
        readDir('/shelonim').then((res)=>{
             setShelonim(res)
        }).catch((err)=>console.error(err))
    },[])
    
    return (
        <SafeAreaView style={styles.container2}>
<View >
<FontAwesome onPress={()=>props.setOpenOld(true)} style={{marginLeft:'auto',marginRight:'auto'}} name="history" size={24} color="black" />
<Text onPress={()=>props.setOpenOld(true)}> טפסים קודמים </Text>
</View>

            <ScrollView style={{marginTop:25 }}>
            {shelonim&&shelonim.map((shelon)=><ListItem key={shelon} setShelonim={setShelonim}  setShelon={props.setShelon} shelon={shelon}/>)}
 
    
            </ScrollView>
 <Text >shelonim</Text>

               </SafeAreaView>
      );
}


 

  const styles = StyleSheet.create(
    {
    container2: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 200,
        top:'30%',
        backgroundColor: '#FFFF',
      }, 
    
   
  });