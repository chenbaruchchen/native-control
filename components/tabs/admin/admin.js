import { StyleSheet, Text, View } from 'react-native';
import GetFromGoogleSheets from './getFromGoogleSheets';
 import { useState } from 'react';
export default function Admin(props) {
    const[data,setData]=useState(null)
    return (
        <View >
    <Text>admin</Text>

           <GetFromGoogleSheets setData={setData}/>  
     

        </View>
      );
}