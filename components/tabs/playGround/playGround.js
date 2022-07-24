import { StyleSheet, Text, View} from 'react-native';
import ListShelonim from './list-shelonim/ListShelonim'
import { useEffect, useState } from 'react';
import Shelon from './Shelon'
export default function Admin(props) {
    const [shelon,setShelon]=useState(null)

    return (
        <View style={{width:'100%'}} >
   <Text>playGround - view </Text>
             
            {shelon?<Shelon shelon={shelon}/>:<ListShelonim setShelon={setShelon} />}
    
        </View>
      );
}

const styles=StyleSheet.create({
    list:{}
})