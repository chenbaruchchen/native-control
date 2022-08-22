import { StyleSheet, Text, View} from 'react-native';
import ListShelonim from './new/list-shelonim/ListShelonim'

import List from './new/list-shelonim/list'
import { useEffect, useState } from 'react';
import Shelon from './Shelon'
import Old from './old/App';

import ChoseTab from './ChoseTab'
export default function Admin(props) {
    const [chosenTab,setChosenTab]=useState('new')
    const [shelon,setShelon]=useState(null)
    const [openOld,setOpenOld]=useState(false)


  
        return (
            <View>
<ChoseTab setChosenTab={setChosenTab}/>
 
           


                {chosenTab==='new'&&(<>
                {/* <List/> */}
                    {shelon?<Shelon setShelon={setShelon} setOpenOld={setOpenOld} shelon={shelon}/>:<List   setShelon={setShelon} />}

                </>)}
                {chosenTab==='old'&&<Old/>}

                 
                
            </View>
        )
    
 

 if(openOld){
return <Old setOpenOld={setOpenOld} />
}



    return (
        <View  >
  
             
    
        </View>
      );
}
