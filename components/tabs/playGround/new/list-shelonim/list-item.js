import React from 'react'
import { StyleSheet,View, Text} from 'react-native'
 
import { AntDesign } from '@expo/vector-icons'; 
import deleteFile from '../../../../fileSystem/deleteFile'
 
const ListItem = (props) => {

  function deleteContainerFunction() {

    props.setShelonim((prev)=>{
      const newArr=[...prev]

      var index = array.indexOf(props.shelon);
      if (index !== -1) {
        array.splice(index, 1);
      }

      return newArr
    })

   deleteFile(`/shelonim/${props.shelon}`)
  }
  return (
    <View
    onTouchEnd={()=> 
        props.setShelon(props.shelon)
    }
      style={styles.container}
    >

<AntDesign onPress={deleteContainerFunction} name="delete" size={24} color="black" />       

      <Text
        //   onPress={()=>console.log("props")}

        style={styles.text}
      >
       {props.shelon?props.shelon:'name of shelon'}
      </Text>
 
      <AntDesign name="caretleft" size={24} color="black" />      
 
    </View>
  )
}
 
 
 

const styles = StyleSheet.create(
    {
    container: {
        display: 'flex',
        position: 'relative',
        height: 'auto',
        width: '80%',
        alignItems: 'center',
        flexDirection: 'row',
        minHeight: 50,
        backgroundColor: '#F6F8FA',
        justifyContent: 'space-between',
        paddingLeft: '10%',
        paddingRight: '10%',
        borderRadius: 20,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10,
        marginBottom: 10,
        transition: '0.3s',
      }, 
    
    text: {
        color: 'rgba(45, 44, 44, 0.52)',
      },
  });

export default ListItem
