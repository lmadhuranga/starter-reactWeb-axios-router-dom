const _dataName = 'uploadedDocuments';
const uploadedDocuments = {
   get:(varName='')=>{
      const jsonData  = JSON.parse(localStorage.getItem(_dataName));
      if(varName===''){
         return jsonData;
      }
      return jsonData[varName];
   },
   save:(newData)=>{
      let jsonData  = JSON.parse(localStorage.getItem(_dataName)); 
      if(jsonData===null) {
         jsonData = {};
      } 
      localStorage.setItem(_dataName, JSON.stringify({...jsonData,...newData}));
   },

} 
export default uploadedDocuments