import { View,Text ,StyleSheet} from "react-native";
import readFile from "../../../../fileSystem/readFile";
import readDir from "../../../../fileSystem/readDir";

import Button  from "./saveButton";
import {createExcelFromTofesAndShelon} from './createExcel'
import {useEffect, useState}from 'react'

import ShereButton from './shereButton'
 
export default function Old(props) {

    const [data,setData]=useState(null)
    const [file,setFile]=useState(null)
    useEffect(()=>{
        const uri='/tfasim/'+props.chosenTofes
    
        console.log(uri)
        if(props.chosenTofes){
            // readFile(uri).then((res)=>console.log(res))
         readFile(uri).then((res)=> setData(JSON.parse(res))) 

        }

       
   
    },[props.chosenTofes])

    async function handleGanerateExcel() {
 
        const shelonUri='/shelonim/'+data.name

        const shelon=await readFile(shelonUri)

        const excel=await createExcelFromTofesAndShelon(data,JSON.parse(shelon),data.name)
        setFile(excel)
  
         
    }

    if (!props.chosenTofes) {
        return <Text>בחר טופס</Text>
    }
return <View style={styles.app} >
 <Text>excel</Text>

 {/* {file&&<ShereButton file={file}/>} */}

<Button style={styles.button} action={handleGanerateExcel}/>
     </View>
}
 


const styles=StyleSheet.create({
    app:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',alignContent:'center',alignItems:'center'
       
    },button:{
        position:'absolute',top:10,left:'auto',right:'auto',marginLeft:'auto',marginLeft:'auto'
    }
})

