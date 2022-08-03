import { StyleSheet, Text, View} from 'react-native';
import ListShelonim from './new/list-shelonim/ListShelonim'
import { useEffect, useState } from 'react';
import Shelon from './Shelon'
import Old from './old/App';
export default function Admin(props) {
    const [shelon,setShelon]=useState(null)
    const [openOld,setOpenOld]=useState(false)


    ///// if open old return only old playground

 if(openOld){
return <Old />
}



    return (
        <View style={{width:'100%'}} >
   <Text>playGround - view </Text>
             
            {shelon?<Shelon setOpenOld={setOpenOld} shelon={shelon}/>:<ListShelonim  setOpenOld={setOpenOld} setShelon={setShelon} />}
    
        </View>
      );
}

const styles=StyleSheet.create({
    list:{}
})