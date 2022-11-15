import { toast } from 'react-toastify'; 
import events from './events';
// import numeral from 'numeral';
import React from 'react';
import swal from 'sweetalert2';



// toast.configure({
//    // nOpen: props => console.log(props.foo),
//    // onClose: props => console.log(props.foo),
//    autoClose: 6000, 
//    type: toast.TYPE.INFO,
//    hideProgressBar: false,
//    position: toast.POSITION.TOP_CENTER,
//    pauseOnHover: true, 
//    progress: 0.2
// }); 

// const addToast = useToasts()
const utils = { 
   sAlert: (type, title, msg) => {
      swal.fire(title, msg, type)
   },
   isSinhale: () => {
      if(localStorage.getItem('lan') === 'si'){
         return true;
      }
      return false;
   },

   emit:(msg='', cb=()=>{})=>{
      events.dispatch(msg,cb) 
   },
   loadingShow:()=>{
      events.dispatch('loadingShow',()=>{}) 
   },
   loadingHide:()=>{
      events.dispatch('hideLoading') 
   }, 
   showError:(msg)=>{
      toast.error(msg)
   },
   showMsg:(msg)=>{
      toast.success(msg)
   },
   getDateTime:(withSeperate=false) => {
      var now = new Date();
      function pad(n) {
         return n<10 ? '0'+n : n;
      }

      function seperater(sym='-') {
         return (withSeperate)?sym:'';
      }

      var localDateTime = now.getFullYear() +
               seperater() +
               pad(now.getMonth()+1) +
               seperater() + 
               pad(now.getDate()) +
               "T" +
               pad(now.getHours()) +
               seperater(':') + 
               pad(now.getMinutes()) +
               seperater(':') + 
               pad(now.getSeconds());
      return localDateTime;
                
   },
   numberFormat:(rowNumber, withDecimal=true) => {
      if(withDecimal){
         // return numeral(rowNumber).format('0,0.00');
      }
      
      // return numeral(rowNumber).format('0,0');
   },
   errorFormatter:(errors, cStyle={}) => {
		return(
			<ul style={{...cStyle}} className='errors'> 
				{
					errors.map((error, index) => {
						return(<li key={index}><i className="fa  fa-exclamation redchecker" aria-hidden="true"></i> <span className='error'>{error}</span></li>);
					})
				}
			</ul>
		);
   },
   formatName:(str, limit=10) => { 
      return str.substring(0, limit);
   },
   formatAddress:(str, limit=10) => { 
      return str.substring(0, limit);
   },
} 
export default utils