import { StyleSheet, Text, View } from 'react-native';
import GetFromGoogleSheets from './getFromGoogleSheets';
 import { useEffect, useState } from 'react';
 
 import MenuGroupsShowcase  from './choseFunction'

 
export default function Admin(props) {
    const[data,setData]=useState(null)

    const [chosen,setChosen]=useState(null)
    const [route,setRoute]=useState(null)
    useEffect(()=>{

        console.log(chosen)
   
    switch (chosen) {
        case 'Download new quiz from Google sheets':
            setRoute(<GetFromGoogleSheets setData={()=>setData}/>)
            break;

            case 'new quiz from Google sheets':
                setRoute(3)
                break;
        default:
            setRoute(2)
            break;
    }

    },[chosen])

    if(!chosen) return <MenuGroupsShowcase setChosen={setChosen}/>
    else

    return (
        
 
        <View >

    <Text onPress={()=>setChosen(null)}>close</Text>

    
      {route&&<Text>{route}</Text>}

        </View>
      );
}