import * as FileSystem from 'expo-file-system';


export default async function main() {

    cheackIfThereIs()
   

 

}

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
       

     FileSystem.makeDirectoryAsync(dirUri)     
 
 
 } 