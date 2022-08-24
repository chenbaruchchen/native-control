import XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
function getDataAsJson(tofes,shelon) {

    
     let data=[]
 
    for (let index = 0; index < shelon.rows.length; index++) {
        const quatsion = shelon.rows[index].c[0].v;
        const ans = tofes.data[index];
        data.push({
            "שאלה": quatsion,
            "תשובה": ans
          })

 
    }
     return data
}
export async function createExcelFromTofesAndShelon(tofes,shelon,name){

    
    // var data = [{
    //     "name": "John",
    //     "city": "Seattle"
    //   },
    //   {
    //     "name": "Mike",
    //     "city": "Los Angeles"
    //   },
    //   {
    //     "name": "Zach",
    //     "city": "New York"
    //   }
    // ];
    const data=getDataAsJson(tofes,shelon)
     var ws = XLSX.utils.json_to_sheet(data);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "ביקורת");
    const wbout = XLSX.write(wb, {
      type: 'base64',
      bookType: "xlsx"
    });
    const uri = FileSystem.cacheDirectory + 'HR-ontrols.xlsx';
     await FileSystem.writeAsStringAsync(uri, wbout, {
      encoding: FileSystem.EncodingType.Base64
    });
    
    await Sharing.shareAsync(uri, {
      mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      dialogTitle: 'MyWater data',
      UTI: 'com.microsoft.excel.xlsx'
    });
}


 