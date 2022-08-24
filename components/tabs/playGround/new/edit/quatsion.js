import InutShort from './input-short'
import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';

 
const MyComponent = (props) => {
const [ans,setAns]=React.useState(props.ans)
 
React.useEffect(()=>{
    
props.setAns((prev)=>{
 
    let newAns=[...prev]
    

    newAns[props.index]=ans


    return newAns
})
},[ans])
  return (
    <View style={styles.conteiner}>
         <Text style={styles.text} >{props.q.c[0]?.v}</Text>
    <InutShort ans={ans}  setAns={setAns}  />

    </View>
   
  );
};

const styles=StyleSheet.create({
conteiner:{
    width:'80%',
    margin:20,
    border:1,
    borderColor:'#DADCE0',
    borderWidth:1,


    backgroundColor: "#eeeeee",

   borderRadius:15,
   paddingVertical:35,
   paddingHorizontal:10,
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    flexDirection:'column'
    // backgroundColor:'green'
},
text:{
    marginBottom:25
}
})
export default MyComponent;