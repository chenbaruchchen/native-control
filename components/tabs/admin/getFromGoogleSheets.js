
import {FlatList, StyleSheet, Text, View,Button, SafeAreaView,  ScrollView ,TextInput,TouchableOpacity} from 'react-native';
import React, { useState,useEffect } from "react";
import Papa from "papaparse";

import InputUi from '../../uiComponents/inputs'
import saveFile from '../../fileSystem/saveFile';
import * as FileSystem from 'expo-file-system';

import { Alert } from '../../uiComponents/alert';

import { AntDesign } from '@expo/vector-icons'; 

const container = React.createRef(null);

   export default function getFromGoogleSheets(props) {


    const [data, setData] = useState(null); 
    const [name,setName]=useState('') 
    const [text,setText]=useState(null) 
    const [save,setSave]=useState(null) 
    const [index,setIndex]=useState(0) 


     useEffect(()=>{
        if (data) {
            console.log(data)
            setText(data.rows[0].c.toString())
  
        }
    },[data])

     

    const sheetId = '1IrUsxcPxZjeqkVdHeor6GfDZKJG95idqN783JU9IM-Y';
    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
    const sheetName = name;
    const query = encodeURIComponent('Select *')
    const url = `${base}&sheet=${sheetName}&tq=${query}`  
             function getFromGoogleSheetsData(params) {

                console.log(name)

          
                console.log(url)
                fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
          setData(jsonData.table)
 
          console.log(data)

  
        }) 
            }
 
            function prepereForSave() {
                const uri=  '/shelonim/'+name
                 saveFile(uri,data).then(res=>setSave(res)).then(()=>{
                    console.log(save)
                    if (save) {
                        setText(null)
                   
                    }
                 })
            }
    return (<View style={styles.sarchAndGet}>
  <Input setInput={setName}/>

  {/* {save !==null?<Text>נשמר בהצלחה</Text>:null} */}
<TouchableOpacity style={styles.button} onPress={()=>getFromGoogleSheetsData()}>
    <Text style={{color:"white"}}>
    get from google sheets
    </Text>
</TouchableOpacity>
 


 {text!==null? <DisplayData name={name} data={data} prepereForSave={prepereForSave} />:null}

 
   {save?<AntDesign name="checkcircle" size={45} color="green" />:null}
 </View>)
}

function DisplayData(props) {
    return(<SafeAreaView style={styles.displayContainer}>
        {/* <Text>{props.data.row}</Text> */}
        <Text> השאלון </Text>


        <FlatList
 data={props.data.rows}
 renderItem={({item}) => <View  style={styles.displayQuatsion}>
 <Text Text>{item.c[0].v}</Text>
 </View>}
/>
 
 
 
<TouchableOpacity style={styles.button} onPress={props.prepereForSave}>
    <Text style={{color:"white"}}>
    {`save shelon as ${props.name}`}
    </Text>
</TouchableOpacity>

    </SafeAreaView>)
}
 

const styles=StyleSheet.create({
sarchAndGet:{
    
    // marginVertical:'auto',
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    // padding: "0px 0px 0px 0px",
    alignContent: "center",
    flexWrap: "nowrap",
    gap: 10,
},
input: {
    flexShrink: 0,
    width:200,
    height: 55,
    backgroundColor: "white",
    overflow: "hidden",
    position: "relative",
    borderRadius: 20,
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
  ,displayContainer:{
margin:20,
padding:12,gap:10,
    boxSizing: "border-box",
    flexShrink: 0,
    width: '100%',
    // flex: "1 0 0px",
    height: '60%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    // padding: "0px 0px 0px 0px",
    alignContent: "center",
    flexWrap: "nowrap",
    gap: 10,
    borderTopEndRadius:20,
    borderTopStartRadius:20,
    // borderRadius: "44px 44px 0px 0px",
    borderColor: "rgba(34, 34, 34, 0.81)",
    borderStyle: "solid",
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
 displayQuatsion: {
    flexShrink: 0,
    margin:12,
    padding:6,
    width: 'auto',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height: 50,
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#faf5ff",
    overflow: "hidden",
    position: "relative",
    borderRadius: 20,
  }
})

const rows = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    padding: "0px 0px 0px 0px",
    alignContent: "center",
    flexWrap: "nowrap",
    gap: 10,
  }

  function Input(props) {
    return      <TextInput style={styles.input} onChangeText={(e)=>props.setInput(e)} />

  }