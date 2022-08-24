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
    const[ans,setAns]=useState([])
    // const[index,setIndex]=useState(0)
useEffect(()=>{
console.log(ans)
console.log("ans")
},[ans])
    
 function saveTofes() {
     if (props.name){
         
 

        const uri=`/tfasim/${props.name}&&${ans[0]}`

        let tofes={name:props.name,data:ans}
         console.log(tofes)
   saveFile(uri,tofes).then((res)=>console.log(res)).then(()=>setUpdate(true))


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
         <Text>edit {props.name}  </Text>
         
       
         <SafeAreaView style={styles.container}>



              {/* <ScrollView style={styles.scrollView}> */}
          
              {/* <View style={styles.form}> */}

              {/* {props.data.map((q,index)=><Quatsion setAns={setAns} tofes={props.data} setTofes={props.setData} index={index}    key={index} q={q}/>)} */}

              <FlatList
              style={{
                marginLeft:'auto',
                marginRight:'auto',
                 width:'100%',
                 flex:7
              }
                

              }
 data={props.data}
 
 renderItem={({item,index}) => {


 
   return( <Quatsion setAns={setAns} tofes={props.data} setTofes={props.setData} index={index}    q={item}/>)
  
  
  }}
/>
         {/* </View> */}
        
              {/* </ScrollView> */}
              

              <TouchableOpacity style={styles.button} onPress={()=>saveTofes()}>
    <Text style={{color:"white"}}>
   שמירת טופס
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
        height:'100%',
       
        // paddingTop: StatusBar.currentHeight,
       },
      scrollView: {
       flex:9,
        // height:'80%',
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
        marginBottom:30
      },
      button:{
        flex:1,
        display:'flex',
        alignItems:'center',
         flexShrink: 0,
        width: 'auto',
        padding:15,
    margin:20,
    // marginBottom:20,
    marginHorizontal:'25%',
        // height: 58,
        backgroundColor: "#28cdcf",
        // overflow: "hidden",
        // position: "relative",
        borderRadius: 20,
        // display:'flex',
        // justifyContent:'center'
      }

})