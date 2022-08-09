import { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
 import readFile from '../../fileSystem/readFile';
 import { FontAwesome } from '@expo/vector-icons'; 

 import Form from './new/form/form'
 import Old from './old/App';

 import Header from './new/header-section'
export default function Admin(props) {
    const [data,setData]=useState(null)
  useEffect(()=>{
 const uri='/shelonim/'+props.shelon
readFile(uri).then((res)=>{
     
    setData(JSON.parse(res).rows)
 
    
  }).catch(err=>console.log(err))
 },[])
 
 return (
        <View style={{width:'100%'}} >

            {/* {data&& <Text>{data} </Text>} */}

   {/* <Text>{props.shelon} </Text>
   <Text onPress={()=>props.setShelon(null)}> close</Text> */}

   {/* <View style={{marginTop:20}}>
   <Text onPress={props.setShelon(null)}> close</Text>

<FontAwesome onPress={()=>props.setOpenOld(true)} style={{marginLeft:'auto',marginRight:'auto'}} name="history" size={24} color="black" />
<Text style={{marginLeft:'auto',marginRight:'auto'}} onPress={()=>props.setOpenOld(true)}> טפסים קודמים </Text>
</View> */}

<Header setShelon={props.setShelon} name={props.shelon}/>
        {data&&<Form name={props.shelon} data={data}  />}  
 
         </View>
      );
}

// 0000000000000000000000000
// Object {
//   "cols": Array [
//     Object {
//       "id": "A",
//       "label": "",
//       "type": "string",
//     },
//     Object {
//       "id": "B",
//       "label": "",
//       "type": "string",
//     },
//   ],
//   "parsedNumHeaders": 0,
//   "rows": Array [
//     Object {
//       "c": Array [
//         Object {
//           "v": "name",
//         },
//         Object {
//           "v": "string",
//         },
//       ],
//     },
//     Object {
//       "c": Array [
//         Object {
//           "v": "where",
//         },
//         Object {
//           "v": "isreal",
//         },
//       ],
//     },
//     Object {
//       "c": Array [
//         Object {
//           "v": "why",
//         },
//         Object {
//           "v": "beacuse",
//         },
//       ],
//     },
//     Object {
//       "c": Array [
//         Object {
//           "v": "when",
//         },
//         Object {
//           "v": "tomerwo",
//         },
//       ],
//     },
//     Object {
//       "c": Array [
//         Object {
//           "v": "love",
//         },
//         Object {
//           "v": "hate",
//         },
//       ],
//     },
//   ],
// }

  

 