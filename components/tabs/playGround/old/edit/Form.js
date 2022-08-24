import {FlatList, View,Text ,StyleSheet,SafeAreaView,ScrollView,TouchableOpacity} from "react-native";
 import InputStringShort from "./input-short";
 import Quatsion from './quatsion'
import readFile from "../../../../fileSystem/readFile";
 
import readDir from "../../../../fileSystem/readDir";

import {useEffect, useState,createContext}from 'react'
import saveFile from "../../../../fileSystem/saveFile";
import { Button } from "./Button";
import { AntDesign } from '@expo/vector-icons'; 


  export default function Old(props) {
    const[update,setUpdate]=useState(false)
 
 function saveTofes() {
     if (props.tofes.name){
        const uri=`/tfasim/${props.tofes.name}&&${props.tofes.data[0]}`

 
        console.log(props.tofes)
        saveFile(uri,props.tofes).then((res)=>console.log(res)).then(()=>setUpdate(true))

     }else{
        console.log('false')
     }

 }

 if (update) {
    return<View  >
<AntDesign style={{marginLeft:'auto',marginRight:'auto',marginTop:50}} name="checkcircle" size={45} color="green" />
    </View> 
 }
    return (   
        <View >
         <Text>edit {props.tofes.name}  </Text>
         
       
         <SafeAreaView style={styles.container}>
         <FlatList
              style={{
                marginLeft:'auto',
                marginRight:'auto',
                 width:'100%',
                 flex:7
              }
                

              }
 data={props.shelon}
 
 renderItem={({item,index}) => {
   
  return( <Quatsion setTofes={props.setTofes} index={index} ans={props.tofes.data[index]}   q={item}/>)
   }}
/>
              <View>

              </View>

              <TouchableOpacity style={styles.button} onPress={()=>saveTofes()}>
    <Text style={{color:"white"}}>
    save updates
    </Text>
</TouchableOpacity>
            </SafeAreaView>


      
            </View>
            )
  
    
    }


 


 const styles=StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor:'white',
        width:'100%',
        height:'92%',
        // paddingTop: StatusBar.currentHeight,
       },
      scrollView: {
         // backgroundColor: 'pink',
        // marginHorizontal: 20,
      },
      toolBar:{
        size:'30%'
    },
    
    form : {
        width: "100%",
        // height: "min-content", /* 470px */
        height:'auto',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        overflow: "hidden",
         alignContent: "center",
        flexWrap: "nowrap",
        gap: 10,
      },
      button:{
        display:'flex',
        alignItems:'center',
         flexShrink: 0,
        width: 'auto',
        padding:15,
    margin:20,
    marginHorizontal:'25%',
        height: 58,
        backgroundColor: "#28cdcf",
        overflow: "hidden",
        position: "relative",
        borderRadius: 71,
        display:'flex',justifyContent:'center'
      }

})

