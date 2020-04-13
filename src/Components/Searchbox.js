import React from 'react';

const Searchbox = ({searchChange}) => {
	return(
		<div className="pa2" >
	        <input className="bg-light-green ba pa3" 
	         type='text' 
	         placeholder='Searchbox'
	         onChange={searchChange}
	        />  
        </div>  
       );
}

export default Searchbox;