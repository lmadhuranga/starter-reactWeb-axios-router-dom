const _dataName = 'dealerDetails';
const dealer = {
   get:(varName='')=>{
      const localDataJson  = JSON.parse(localStorage.getItem(_dataName));
      if(localDataJson===null){
         return null;
      }
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
      const localDataJson = JSON.parse(localStorage.getItem(_dataName)); 
      if(localDataJson===null){
         return false;
      }
      return localDataJson.dealer_id; 
   },
} 
export default dealer