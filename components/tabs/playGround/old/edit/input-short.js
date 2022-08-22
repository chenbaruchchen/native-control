 
import * as React from 'react';
import { TextInput,StyleSheet } from 'react-native';
 

const MyComponent = (props) => {
   const [focused,setFoucused]=React.useState( false)
 
   return (
    <TextInput
     
    style={
        focused?styles.focused:styles.regular
    }
  
    onFocus={()=>setFoucused(true)}
    // placeholder="{props.ans}"
       value={props.ans}
      onChangeText={text => props.setAns(text)}

      
    />
  );
};


const styles=StyleSheet.create({

    regular:{
        backgroundColor:'#fffa',

        padding:10,
        borderRadius:20
    },
    focused:{
        backgroundColor:'white',

        padding:20,
        borderRadius:12,
        fontSize:20
        
    }

})


export default MyComponent;