const _dataName = 'userData';
const users = {
   get:(varName='')=>{
      const localDataJson  = JSON.parse(localStorage.getItem(_dataName));
      if(varName===''){
         return localDataJson;
      }
      return localDataJson[varName];
   },
   save:(newData)=>{
      let jsonData  = JSON.parse(localStorage.getItem(_dataName)); 
      if(jsonData===null) {
         jsonData = {};
      } 
      localStorage.setItem(_dataName, JSON.stringify({...jsonData,...newData}));
   },
   isLogged:()=>{
      const localDataJson  = JSON.parse(localStorage.getItem('userData'));
      if(localDataJson===null){
         return false;
      }
      return localDataJson.nic; 
   },
   clear:()=>{
      let keysToRemove = [
         "transactionId",
         "uploadedDocuments",
         "trial_cal_id",
         "leadData",
         "leaseData",
         "userData",
      ];

      for (const key of keysToRemove) {
         localStorage.removeItem(key);
      } 
   },
} 
export default users