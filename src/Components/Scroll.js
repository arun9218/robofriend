import React from'react';

const Scroll=(prob)=>{
    return(
    	<div style = {{ overflowY:"scroll", border:"1px solid black",height:"800px"}}>
        	{prob.children}
        </div>
    	)
}

export default Scroll;