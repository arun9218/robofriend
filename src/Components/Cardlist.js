import React from 'react';
import Card from './Card';
const Cardlist=({ robots })=>{
	const cardarray=robots.map((user,i)=>{
	    return <Card id={robots[i].id} name={robots[i].name} mail={robots[i].email} />;
	})
	return(
		<div>
		   {cardarray}
		</div>
		);
}

export default Cardlist;