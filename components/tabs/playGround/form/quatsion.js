import React, { useEffect, useState } from 'react'
import { StyleSheet,View,Text, TextInput } from 'react-native'

 
const Quatsion = (props) => {
   const [text, onChangeText] = useState('');
 useEffect(()=>{
       
props.setAns((prev)=>{
  const newArr=[...prev]
  newArr[props.index]=text
  return newArr
})
  //  props.setAns(prev=>{
  //     const newArr=[...prev]
  //     console.log('yes')
  //   //   newArr[0]=text
  //   //  return props.setAns(newArr) 
  //   } )
},[text])
 
  return (
    <View
      style={styles.container}
    >

       <Text
        style={styles.text}
      >
       {props.quatsion?.c[0]?.v}
      </Text>
      <TextInput
      onChangeText={onChangeText} value={text}
         multiline
        placeholder={props.quatsion?.c[1]?.v.toString()}
        style={styles.TextInput}
      ></TextInput>
    </View>
  )
}


const styles = StyleSheet.create(
    {
    container:{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        // // flex: '0 0 auto',
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingTop: 35,
        paddingBottom: 25,
        minHeight: 200,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20,
        position: 'relative',
      },
      TextInput:{
        marginTop: 20,
        textAlign: 'right',
        borderWidth: 0,
        backgroundColor: 'rgba(229, 229, 229, 0.55)',
        borderRadius: 20,
        width: '70%',
        maxWidth: 400,
        paddingTop: 20,
        paddingBottom: 20,
      },text:{
         
        fontSize: 16,
         
        textAlign: 'center',
        maxWidth: 400,
      }
    
    
  }); 
export default Quatsion
