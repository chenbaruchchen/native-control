import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
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
            console.log(1)
            setRoute(<GetFromGoogleSheets setData={setData}/>)

            
            break;

            case 'new quiz from Google sheets':
                setRoute(null)
                break;
  
            break;
    }

    },[chosen])

    if(!chosen) return <MenuGroupsShowcase setChosen={setChosen}/>
    else

   
    return (
        
 

<View>
    <Text onPress={()=>setChosen(null)}>close</Text>
    {route!==null?<View style={{
        display:'flex',justifyContent:'center',alignContent:'center' ,
      }}>{route}</View>:<Text onPress={()=>setChosen(null)}>nussssll</Text>}
     </View>
      );
}