
import { StyleSheet, Text, View,Button,ScrollView } from 'react-native';
import React, { useState,useEffect } from "react";
import Papa from "papaparse";

import InputUi from '../../uiComponents/inputs'
import saveFile from '../../fileSystem/saveFile';
import * as FileSystem from 'expo-file-system';

import { Alert } from '../../uiComponents/alert';
 export default function getFromGoogleSheets(props) {


    const [data, setData] = useState(null); 
    const [name,setName]=useState('') 
    const [text,setText]=useState(null) 
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
                const uri=  '/shelonim/'+name+Math.random()
                 saveFile(uri,data) 
            }
    return (<View>
 
<InputUi setInput={setName}/>
<Button onPress={getFromGoogleSheetsData} title='get from google sheets'></Button>


 {text&& <DisplayData name={name} data={data} prepereForSave={prepereForSave} />}


    </View>
      );
}

function DisplayData(props) {
    return(<View>
        {/* <Text>{props.data.row}</Text> */}

<ScrollView style={{position:'absolute'}}>
 
    < Button  onPress={props.prepereForSave} title= {`save shelon as ${props.name}`}> </Button>

{props.data.rows?.map(q=>(<Text key={q.c[0].v} Text>{q.c[0].v}</Text>))}
</ScrollView>


    </View>)
}
 