import * as FileSystem from 'expo-file-system';

export default  async function readFile(fileUri) {

   let uri=FileSystem.documentDirectory+'/hr-controls-data'+fileUri

   const response= await FileSystem.readAsStringAsync(uri)
   return response
}

 