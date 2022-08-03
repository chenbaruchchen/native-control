import { View,Text ,StyleSheet} from "react-native";
import ToolsBar from "./ToolsBar";
import { AntDesign } from '@expo/vector-icons'; 

import {useState}from 'react'

import Edit from './edit/edit'
import ListTfasim from './listTfasim/ListTfasim'
import Excel from './excel/excel'
export default function Old(props) {

    const [toolBarSize,setToolBarSize]=useState(true)
    const [toolTabContent,setToolTabContet]=useState('list')
     const [chosenTofes,setChosenTofes]=useState(null)
return <View style={styles.container}>

    {/* if the tool bar open */}
 {toolBarSize&&<ToolsBar setToolTabContet={setToolTabContet} setToolBarSize={setToolBarSize}  style={styles.toolBar}/>} 
 {/* if the tool bar close */}
 {!toolBarSize&&<AntDesign onPress={()=> setToolBarSize(prev=>!prev)} style={{left:20,top:50, position:'absolute',zIndex:10}} name="minuscircleo" size={24} color="black" />}
    

 {/* render content */}
 <View style={styles.content}>
 <Text>{ chosenTofes}</Text>
 {toolTabContent==='list'&&<ListTfasim chosenTofes={chosenTofes} setChosenTofes={setChosenTofes}/>}
{toolTabContent==='edit'&&<Edit/>}
{toolTabContent==='excel'&&<Excel chosenTofes={chosenTofes}/>}


</View>


    </View>
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        width:'100%',
         display: 'flex', 
         flexDirection: 'row',
         justifyContent:'flex-end',
        height:'100%',
        alignItems:"flex-start" 
    } ,
    
    toolBar:{
        flex:1,
        // size:'30%',
        width:'100%',height:300

},
content:{
    paddingTop:30,
    flex:7,
     width:'100%',
    height:'100%',
     
}
})