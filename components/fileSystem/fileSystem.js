import * as FileSystem from 'expo-file-system';
import {Text, Button,View} from 'react-native'
import readFile from './readFile';
  export default function FileSystemMain(props) {

 
    function createMainDir() {
        console.log('createMainDir')
      const mainPath=  FileSystem.documentDirectory+'hr-controls-data'
        try {
            FileSystem.makeDirectoryAsync(mainPath)
        } catch (error) {
            console.log(error)
        }
    }


    async function readMainDir() {
        console.log('readMainDir')
        const mainPath=  FileSystem.documentDirectory+'hr-controls-data'
          try {
        const response= await     FileSystem.readDirectoryAsync(mainPath)

        console.log(response)


          } catch (error) {
              console.log(error)
          }
         
    }


    return(
        <View>
<Text>file system</Text>

<Button  title='create main Directory' onPress={createMainDir}>  </Button>

<Button title='read main dir' onPress={readMainDir}>  </Button>


<Button title='get file' onPress={()=>readFile(FileSystem.documentDirectory+'hr-controls-data/'+'shelonim/tah')}>  </Button>

        </View>
        
    )
}