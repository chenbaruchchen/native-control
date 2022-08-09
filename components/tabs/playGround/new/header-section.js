import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const AppComponent = (props) => {
    return      <View
    style={{
      display: 'flex',
      position: 'relative',
      height: 'auto',
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      paddingTop: 30,
      paddingBottom: 30,
      justifyContent: 'center',
    }}
  >


<AntDesign 
onPress={()=>props.setShelon(null)}
name="arrowright" size={24} color="black" 

style={{
       
    top: 'auto',
    left: '10%',
    position: 'absolute',
    bottom: 'auto',
  }}/>   
<Text>
    {props.name}
</Text>

   </View>
    
  }
  
  export default AppComponent