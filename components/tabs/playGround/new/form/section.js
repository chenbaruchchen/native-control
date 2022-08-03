import React, { useEffect, useState } from 'react'
import { View,StyleSheet, Text } from 'react-native'

 
import Quatsion from './quatsion'
 
const Section = (props) => {
const [name,setName]=useState(props.name)
    useEffect(()=>{
       let questionText = props.name?props.name:'שם הטופס לא נמצא'
       props.name!=='שם הטופס לא נמצא'&&questionText.replace(/[0-9]/g, '');
       console.log(questionText)
       setName(questionText)
    },[])
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.headline}
      >
       {name}
      </Text>

      {props.data&&props.data.map((quatsion,index)=> <Quatsion setAns={props.setAns} index={index} key={ index} quatsion={quatsion}></Quatsion>)}
        
    </View>
  )
}

 

const styles = StyleSheet.create({
    container:  {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        // flex: '0 0 auto',
        backgroundColor: 'rgba(229, 229, 200, 0.3)',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: 50,
        paddingBottom: 50,
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30,
        position: 'relative',
      },
      headline:{
        color: '#2d2d2d',
        fontSize: 30,
      }
    
}
 
    
  );

export default Section


 