import * as FileSystem from 'expo-file-system';

export default function saveFile(fileUri,contents) {
console.log('start save')
    // FileSystem.makeDirectoryAsync(uri)
    // FileSystem.readDirectoryAsync(uri).then((res)=>console.log(res))

    // FileSystem.getInfoAsync(uri).then((res)=>console.log(res))

    
    let uri=FileSystem.documentDirectory+'/hr-controls-data'+fileUri
  return   FileSystem.writeAsStringAsync(uri, JSON.stringify(contents)).then((res)=>{
 
      return true     
        console.log(res)
      }).catch(err=> {
console.log(err) 
return false
      }        
      )

      
}

 export function createDir(dirUri) {
      let uri=FileSystem.documentDirectory+'/hr-controls-data'+dirUri

      
      try {
            console.log(FileSystem.makeDirectoryAsync(uri)     )
      } catch (error) {
            console.log(error)
      }
 
 } 