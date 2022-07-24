import React from 'react'
import {ScrollView, View,StyleSheet} from 'react-native'
import Section from './section'
 
const Form = (props) => {
  return (
    <ScrollView
      // style={styles.container}
    >
      <Section name={props.name} data={props.data}></Section>

      

    </ScrollView>
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


