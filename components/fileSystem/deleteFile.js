import * as FileSystem from 'expo-file-system';

export default  async function readFile(dirUri) {

   let uri=FileSystem.documentDirectory+'/hr-controls-data'+dirUri

   const response= await FileSystem.deleteAsync(uri)
   return response
}

 