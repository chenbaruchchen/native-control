import React,{useState} from 'react'
import { View } from 'react-native'
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

const ToolsBar = (props) => {
  
  return (
    <View
      style={{
        backgroundColor:'green',
         display: 'flex',
        flexDirection: 'column',
        width: '30%',
        alignItems: 'center',
        backgroundColor: 'rgba(201, 201, 201, 0.27)',
        // boxShadow:
        //   '5px 5px 10px 0px rgba(212, 212, 212, 0.12),-5px -5px 10px 0px rgba(212, 212, 212, 0.1)',
        // minHeight:  Dimensions.get('window').height,
        borderRadius: 30,
        justifyContent: 'flex-start',
        height: '100%',
        position: 'relative',
      }}
    >
     

 
     <AntDesign onPress={()=>props.setToolBarSize(prev=>!prev)} style={{marginTop:20}} name="minuscircleo" size={24} color="black" />


      <View

              

        style={{

 

       borderTopWidth:1,
       borderTopColor:'0f56',
         //   display: 'flex',
        //   flexDirection: 'column',
        //   height: '100%',
        //   alignItems: 'flex-start',
        //   flex: '0 0 auto',
          marginTop: 50,
        //   justifyContent: 'space-between',
        //   minHeight: 150,
        }}
      >

<Entypo  onPress={()=>{
  props.setToolBarSize(prev=>!prev)
  props.setToolTabContet('list') }}  style={{marginTop:20}}  name="list" size={24} color="black" />

<AntDesign onPress={()=>{
  props.setToolBarSize(prev=>!prev)
  props.setToolTabContet('edit')
  }} style={{marginTop:20}} name="edit" size={24} color="black" />
 
 <FontAwesome5 onPress={()=>{
  props.setToolBarSize(prev=>!prev)
  props.setToolTabContet('excel')
  }} style={{marginTop:20}} name="file-excel" size={24} color="black" />
      </View>
    </View>
  )
}

export default ToolsBar
