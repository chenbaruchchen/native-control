import React,{useState,useEffect,createContext,useContext  } from 'react';
import { Button, Icon, List, ListItem,Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import readDir from '../../../../fileSystem/readDir'
import ModelDelete from './deleteModel'
import deleteFile from '../../../../fileSystem/deleteFile'
const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

 
 const ListAccessoriesShowcase = (props) => {


    const [shelonim,setShelonim]=useState(null)
    const [shelonToDelete,setShelonToDelete]=useState(null)

 
    useEffect(()=>{
       readDir('/shelonim').then((res)=>{
            setShelonim(res)
       }).catch((err)=>console.error(err))
   },[])
 
const uiPopup=<Button onPress={()=>deleteFile(`/shelonim/${shelonToDelete}`)}>מחק את הטופס</Button>

  const renderItemAccessory = (props) => (
     
    <Icon color='blue' {...props} name='arrow-back'/>
  );

 
    const RenderItemIcon = (props) => {

        const [openModel,setOpenModel]=useState(false)
    
     
        return (
        <>
           <Icon onPress={(e)=>{
           
            setShelonToDelete(props.item)
           
     
             
             setOpenModel(true)
            }} {...props} name='trash-2'/>
        {openModel&&<ModelDelete ui={uiPopup} setOpenModel={setOpenModel} openModel={openModel} />}
         
        </>
    
    
     
     
      
       
      );
        }
       
  const renderItem = ({ item, index }) => (
    <ListItem
    
    item={item}
    onPress={()=>props.setShelon(item) }
      title={`${item} ${index + 1}`}
      description={`שאלון ביקורת`}
      accessoryLeft={<RenderItemIcon item={item}/>}
      accessoryRight={renderItemAccessory}
   >

  
   </ListItem>
    
  
  );
if (shelonim) {
    // console.log(shelonim.length)
    return (
        <>
       <Text>
        בחר שאלון
       </Text>

 
        <List
          style={styles.container}
          data={shelonim}
          renderItem={renderItem}
        />

 
         </>
      ); 
}
  return (

    <List
      style={styles.container}
      data={data}
      renderItem={renderItem}
    />
    
  );
};

export default ListAccessoriesShowcase
const styles = StyleSheet.create({
  container: {
    maxHeight: 192,
  },
});