
import { View,Text ,StyleSheet} from "react-native";
import readDir from '../../../../fileSystem/readDir'

import { AntDesign } from '@expo/vector-icons'; 
import deleteFile from '../../../../fileSystem/deleteFile'
import readFile from '../../../../fileSystem/readFile'

import {useEffect, useState}from 'react'
export default function Old(props) {
    const [tfasim,setTfasim]=useState(['דוגמא'])

   useEffect(()=>{
    const uri='/tfasim'
    readDir(uri).then((res)=>setTfasim(res)).then(()=>console.log(tfasim.length))
     

   },[])
   
   function handleDalete(tofes) {
    let uri=`/tfasim/${tofes}`
   

    deleteFile(uri).then(res=>console.log(res))
   }

//    return (
//     <View>
//         <Text>רשימת טפסים</Text>
//         {tfasim.map((tofes)=> <Text key={tofes}>1  </Text>)}
//         {console.log(tfasim)}
//         {/* <Text key="{tofes}">1  </Text> */}
//     </View>
//    )
return <View  style={styles.container}>
 <Text>רשימת טפסים</Text>
 <Text>{ props.chosenTofes}</Text>
 {tfasim.map((tofes)=>(<View onStartShouldSetResponder={()=>props.setChosenTofes(tofes)} key={tofes}  
 style={styles.item} >
    <AntDesign onPress={()=>handleDalete(tofes)} style={{marginRight:35}} name="delete" size={24} color="black" />   
      <Text  >{tofes}</Text>
          
      {/* onPress={deleteContainerFunction} */}
 </View>))}

    </View>
}

const styles=StyleSheet.create({
    container:{
             display: 'flex',
            position: 'relative',
            height: 'auto',
            width: '100%',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingTop: 30,
            marginTop: 12,
            paddingBottom: 30,
            marginBottom: 12,
          
    }
    ,
    item:{
        width: '90%',
        height: 'auto',
        display: 'flex',
        position: 'relative',
        marginTop: 10,
        minHeight: 50,
        alignItems: 'center',
        paddingTop: 15,
        transition: '0.3s',
        paddingLeft: '10%',
        borderRadius: 20,
        marginBottom: 10,
        paddingRight: '10%',
        flexDirection: 'row',
        paddingBottom: 15,
        justifyContent: 'space-between',
        backgroundColor: '#F6F8FA',
        alignItems:'center',justifyContent:"center"

    }
})