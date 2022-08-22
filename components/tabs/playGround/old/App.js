import { View,Text ,StyleSheet,Pressable } from "react-native";
import ToolsBar from "./ToolsBar";
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import {useEffect, useState}from 'react'

import Edit from './edit/edit'
import ListTfasim from './listTfasim/ListTfasim'
import Excel from './excel/excel'
export default function Old(props) {

    const [toolBarSize,setToolBarSize]=useState(true)
    const [toolTabContent,setToolTabContet]=useState('list')
     const [chosenTofes,setChosenTofes]=useState(null)

     const [openSideBar,setOpenSideBar]=useState(false)

//      useEffect((chosenTofes)=>{
// console.log(chosenTofes)
//      },[])
     return (
        <View style={styles.container2}>

{chosenTofes!==null&& <SideBar setChosenTofes={setChosenTofes} setToolTabContet={setToolTabContet} setOpenSideBar={setOpenSideBar} openSideBar={openSideBar}/>}

           
            <View style={styles.app}>
                {chosenTofes===null&&<ListTfasim chosenTofes={chosenTofes} setChosenTofes={setChosenTofes}/>}
                {toolTabContent==='edit'&&<Edit chosenTofes={chosenTofes}/>}
                {toolTabContent==='excel'&&<Excel chosenTofes={chosenTofes}/>}
          

            </View>
        </View>
     )

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
     
},sideBar:{
    backgroundColor:'#373F50',color:'#BCC2CD',minWidth:'40%',height:'100%',maxWidth:'65%',
    borderRadius: 10, paddingTop:20, display:'flex',alignItems:'center',
    // paddingBottom:100,
    // justifyContent:'space-evenly'
},sideBarMenuIcon:{
    position:'absolute',
    top:10,left:10,

},app:{
    width:'100%',height:'100%',marginTop:40  
},

container2:{
    display:'flex',
    flexDirection:'row',
    width:'100%',height:'85%'
},

sideBarList:{
    width:'100%',height:'100%',
    borderRadius: 10, paddingTop:20, display:'flex',alignItems:'center',
    paddingBottom:100,
    justifyContent:'space-evenly'
},

sideBarListItem:{
    // backgroundColor:'#384051'
    backgroundColor:'white',
    width:'80%',
    paddingTop:9,
    paddingBottom:9,
    borderRadius:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
}
})
 
function SideBar(props) {
    if(!props.openSideBar){
        return           <Feather onPress={()=>props.setOpenSideBar(true)} name="menu" style={styles.sideBarMenuIcon} size={28} color="black" />


        // menu-2-outline

    }
    return <View style={styles.sideBar}>
        <AntDesign onPress={()=>props.setOpenSideBar(false)} name="close" size={30} color="#BCC2CD" />
        <View style={styles.sideBarList}>


        <Pressable onPress={()=>{
    props.setOpenSideBar(false)
      props.setToolTabContet('edit')
      }}>
        <View   style={styles.sideBarListItem}>

<Text
>Edit</Text>
<AntDesign   name="edit" size={24} color="black" />
 
</View>
        </Pressable>


        <Pressable onPress={()=>{
    props.setOpenSideBar(false)
      props.setChosenTofes(null)
      }}>
        <View   style={styles.sideBarListItem}>

<Text
>List</Text>
<FontAwesome5  name="list-ul" size={24} color="black" />
 
</View>
        </Pressable>
<Pressable onPress={()=>{
props.setOpenSideBar(false)
  props.setToolTabContet('excel')
  }}>
<View   style={styles.sideBarListItem}>

<Text > Excel</Text>
<FontAwesome5  name="file-excel" size={24} color="black" />
 
</View>
</Pressable >

        
         </View>
        
    </View>
    
}