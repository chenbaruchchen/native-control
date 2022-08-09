import React, { useEffect, useState } from 'react'
import {ScrollView, View,StyleSheet,Button} from 'react-native'
 import Section from './section'
 import saveFile  from '../../../../fileSystem/saveFile'
import PopUp from '../list-shelonim/deleteModel'
 const Form = (props) => {

  const [ans,setAns]=useState([])
  const [added,setAdded]=useState(null)
  function handleSave(data,name) {

    const file={
      data:data,
      name:name
    }
    //  const uri=`/tfasim/${name}/${data[0]}`
     const uri=`/tfasim/${name}&&${data[0]}`
     console.log(uri)
saveFile(uri,file).then((res)=>console.log(res)).then(()=>setAdded(true))

   }

  return (

 <View style={{display:'flex',flexDirection:'column' }}>

      

    
    <ScrollView
      style={{height:'78%'}}
    >
      <Section setAns={setAns} name={props.name} data={props.data}></Section>

     

      <Button
     onPress={()=>handleSave(ans,props.name)} title='form result '> </Button>
    </ScrollView>
 
{added&&<PopUp setOpenModel={setAdded} openModel={added}/>}
    </View>
  )
}


 



const styles = StyleSheet.create(
    {
    container:{
        display: 'flex',
        width: '100%',
        // minHeight:'auto',
        alignItems: 'flex-start',
        // flex: '0 0 auto',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column',
        position: 'relative',
       } 
    
    
  });
  
export default Form


