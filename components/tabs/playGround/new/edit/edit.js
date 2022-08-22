import { View,Text ,StyleSheet,SafeAreaView,ScrollView,TouchableOpacity} from "react-native";
 import InputStringShort from "./input-short";
 import Quatsion from './quatsion'
import readFile from "../../../../fileSystem/readFile";
import saveFile from "../../../../fileSystem/saveFile";

import readDir from "../../../../fileSystem/readDir";

import {useEffect, useState,createContext}from 'react'
 
import { Button } from "./Button";


import Form from "./Form";
 export default function Old(props) {
    const [tofes,setTofes]=useState(null)
    const [shelon,setShelon]=useState(null)
   
     
 useEffect(()=>{
    

    console.log(props.chosenTofes)
    if(props.chosenTofes===undefined) return 

    (async function getData() {
        console.log('getData')

        const uri='/tfasim/'+props.chosenTofes
        
        /// tofes - answers and name
         
            let res=await getTofes()
            res=await getShelon()
 

        
       
        
        
 
        
    })()

 },[props.chosenTofes])

 async function getShelon() {
       //    / shelon - quatsion and name
       if(!tofes) return false
       const uriShelon='/shelonim/'+tofes.name
       let shelonRes=await readFile(uriShelon)
       shelonRes=JSON.parse(shelonRes)
        setShelon(shelonRes.rows)
       return true

 }
async function getTofes() {
    const uri='/tfasim/'+props.chosenTofes
    let tofesTemp=await readFile(uri)
    tofesTemp=JSON.parse(tofesTemp)
  
    setTofes(tofesTemp)
    return true
}
 if(props.chosenTofes===undefined) return 
 
if (shelon&&tofes) {
    return <Form setTofes={setTofes} shelon={shelon} tofes={tofes} />
}else{
    getShelon()
    getTofes()
    
}
   
 
 


return <Text>wait  </Text>
}


const styles=StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor:'white',
        width:'100%',
        height:'92%',
        maxHeight:'80%',
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
         flexShrink: 0,
        width: 'auto',
        padding:15,
    margin:20,
        height: 58,
        backgroundColor: "#28cdcf",
        overflow: "hidden",
        position: "relative",
        borderRadius: 71,
        display:'flex',justifyContent:'center'
      }

})