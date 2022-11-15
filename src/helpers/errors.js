import utils from './utils';
const errors = { 
	handleErrors:(response) => { 
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return response;
   },
   catch:(errors, msg='')=>{
      console.log('errors',errors);
      utils.loadingHide();
      if(msg!==''){
         utils.showError(msg);
      }
      else {
         utils.showError(`Error`); 
      }
   }
} 
export default errors