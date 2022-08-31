///casic change

import * as FileSystem from 'expo-file-system';


export default async function main() {
    console.log('res')

// let res=await cheackIfThereIs()
// console.log(res)
//    return(res)  
   
 
    let main=await cheackAndCraeteMain()
 let shelonim=await cheackAndCraeteShelonim()
 let tfasim=await cheackAndCraeteTfasim()

 let res=await FileSystem.readDirectoryAsync(FileSystem.documentDirectory+'hr-controls-data')

 return true
 
 
}

async  function cheackAndCraeteMain() {
    let res=await FileSystem.readDirectoryAsync(FileSystem.documentDirectory)

    //empty then create
    if (res.length===0) {
        await createFolder(FileSystem.documentDirectory+'hr-controls-data')
    }
     return res
}
async  function cheackAndCraeteShelonim() {
    let res=await FileSystem.readDirectoryAsync(FileSystem.documentDirectory+'hr-controls-data')
     //empty then create
    if (!res.includes("shelonim")) {
        await createFolder(FileSystem.documentDirectory+'hr-controls-data/shelonim')
    
    }
     
 
}

async  function cheackAndCraeteTfasim() {
    let res=await FileSystem.readDirectoryAsync(FileSystem.documentDirectory+'hr-controls-data')
     //empty then create
    if (!res.includes("tfasim")) {
        await createFolder(FileSystem.documentDirectory+'hr-controls-data/tfasim')
    
    }
     
 
}





 ///////////
async function cheackIfThereIs() {
    let uri=FileSystem.documentDirectory+'hr-controls-data'


    let res=await FileSystem.readDirectoryAsync(FileSystem.documentDirectory)

 
    ////there i'snt main folder
    if (res.length===0) {
       
        await createFolder(FileSystem.documentDirectory+'hr-controls-data')
 
        
    }
    console.log("resMainFolder")
     let resMainFolder=await FileSystem.readDirectoryAsync(FileSystem.documentDirectory+'hr-controls-data')
     console.log(resMainFolder)

     //if there is shelonim
     if (!resMainFolder.includes("shelonim")) {

        await createFolder(FileSystem.documentDirectory+'hr-controls-data/shelonim')
    }

    if (!resMainFolder.includes("tfasim")) {

        await createFolder(FileSystem.documentDirectory+'hr-controls-data/tfasim')
    }
   

    
     return true
}





 

async function createFolder(dirUri) {
       

     FileSystem.makeDirectoryAsync(dirUri,{intermediates :true})     
 
 
 } 