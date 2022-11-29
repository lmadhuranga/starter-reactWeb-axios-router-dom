import React, { ReactElement, useState, useEffect} from 'react'; 

 
// // type MenuItem = {
// //   title: string;
// //   subItems?: Array<string>;
// // };

// // type MenuConfig = Array<MenuItem>;


const Solution = ({menuConfig}) => {
  const [buttonStatus, setButtonStatus] = useState({});
  const [menuItemValues, setMenuItemValues] = useState({});

  const toggleBtnValue =  (firstLevelTitle, status) => {
		console.log(`msg_ click button`, firstLevelTitle);
		const btnCurrentStatus = buttonStatus[firstLevelTitle]
    setButtonStatus({...buttonStatus, [firstLevelTitle]:!btnCurrentStatus})
  }
  
  function loadButton(firstLevelTitle, subItems) {
    if(subItems!==undefined) {
      return(
				<button 
					className={firstLevelTitle} 
					onClick={(e)=>{toggleBtnValue(firstLevelTitle)}} 
				> {buttonStatus[firstLevelTitle]?'Hide':'Show'}</button>
			)
    }
  }

  const loadSubItems = (firstLevelTitle, subItems) => {
		if(buttonStatus[firstLevelTitle]) { 
			console.log(`msg_ loadSubItems`,firstLevelTitle, buttonStatus[firstLevelTitle], subItems);
     	return (
				<ul> { 
					subItems.map((title, index)=>{
						return <li key={ index.toString() }> { title } </li>
					}) 
				} 
				</ul>
		 	) 
    } 
  }

	const mainMenuLoad = ({title, subItems}, index) => {  
    return(
			<li key={index.toString()} className="{title}">
				{title}
				{loadButton(title, subItems)}
				{loadSubItems(title, subItems)}
			</li>
    ) 
  }

  const loadDiv = (menuConfig) => {
    return(
			<ul> 
				{ menuConfig.map( (mainRecord, index) => mainMenuLoad(mainRecord, index) ) } 
			</ul>
		) 
  }
  
  return <div className="menu-wrapper" >{ loadDiv(menuConfig) }</div>;
}

export default Solution; 
