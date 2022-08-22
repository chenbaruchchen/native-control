import { View,Text ,StyleSheet,SafeAreaView,ScrollView,TouchableOpacity} from "react-native";
 import InputStringShort from "./input-short";
 import Quatsion from './quatsion'
import readFile from "../../../../fileSystem/readFile";
import saveFile from "../../../../fileSystem/saveFile";

import readDir from "../../../../fileSystem/readDir";

import {useEffect, useState,createContext}from 'react'
 
import { Button } from "./Button";

 export default function Old(props) {
    const [data,setData]=useState([])
    const [shelon,setShelon]=useState(null)
    const [ansArr,setAnsArr]=useState([])

    
 
 

useEffect(()=>{

    if(shelon!==null) return
     (async function getData(params) {
        console.log('try')
        if(props.chosenTofes===undefined)  {
            console.log(undefined)
             return
        }

        const uri='/tfasim/'+props.chosenTofes
        let tofes=await readFile(uri)
        tofes=JSON.parse(tofes)
        setData(tofes)
        setAnsArr(tofes.data)
        if(data.length===0) return
        const uriShelon='/shelonim/'+data.name
        console.log(uriShelon)
        let shelonRes=await readFile(uriShelon)
        shelonRes=JSON.parse(shelonRes)
         setShelon(shelonRes.rows)
    })()
    // readDir('/tfasim').then(()=>console.log(data))

    // console.log("props.chosenTofes",props.chosenTofes )
   
    // if(props.chosenTofes===undefined)  return

    // if (data===null) {
    //     const uri='/tfasim/'+props.chosenTofes
    //     readFile(uri).then((string1)=>{
    //        let parseRes= JSON.parse(string1)
    //         setData(parseRes)
    //     }).then(()=>{
    //         const uri='/shelonim/'+data?.name
    //         readFile(uri).then((res)=>{
    //             let parseRes= JSON.parse(res)
    //             setShelon(parseRes.rows)
               
    //          })
            
    //     })   
    // }


       
})
   
if(props.chosenTofes===undefined)  return null

if (data.length!==0){

      
    return (   
        <View >
         <Text>edit {data.name}</Text>
         <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}>
          
              <View style={styles.form}>
              {/* // .c[0]?.v */}
                 {shelon&&shelon.map((q,index)=><Quatsion index={index} setData={setData} data={data} key={index} q={q}/>)}
             
              {/* <Button/> */}
        
         </View>
        
              </ScrollView>
              <View>

              </View>
            </SafeAreaView>


         <TouchableOpacity style={styles.button} onPress={()=>getFromGoogleSheetsData()}>
    <Text style={{color:"white"}}>
    save updates
    </Text>
</TouchableOpacity>
            </View>
            )
  
    
    }

    return <Text>wait</Text>
}


 const styles=StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor:'white',
        width:'100%',
        height:'92%'
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