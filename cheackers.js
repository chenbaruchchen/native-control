import { View,Text } from "react-native"
import * as FileSystem from 'expo-file-system';
import { useState } from "react";

export default function Main() {
    return <View>
<Name/>

<ReadMain/>
    </View>
}


function Name() {
    
    return null
}

 function ReadMain() {
    const [res,setRes]=useState(null)
    let uri=FileSystem.documentDirectory

    FileSystem.readDirectoryAsync(uri).then((res)=>{
        setRes(res)
        if (!res.includes("hr-controls-data")) {

            let uri=FileSystem.documentDirectory+'/hr-controls-data'
            FileSystem.makeDirectoryAsync(uri,{intermediates :true})

            FileSystem.makeDirectoryAsync(uri+'/shelonim',{intermediates :true})
            FileSystem.makeDirectoryAsync(uri+'/tfasim',{intermediates :true})

        }
    })

    return null
}
