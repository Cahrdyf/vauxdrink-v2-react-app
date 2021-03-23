import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import drink1 from "./image/drink1_square.png";
import drink2 from "./image/drink2_square.png";
//import Root from './index.js';

function Product(props){
  return(
    <div className="card-drink">
      <img src={props.image}/>
	  <div>{props.name}<br></br>{props.amount}</div>
    </div>
  );
}

function Subheader(){
  return(
  <div className="subheader">
    <h3>
	  &#8212; Beverages &#8212;
	</h3>
  </div>
  );
}

function Drinks(){
  return(
    <div>
	  <Subheader/>
		<div className="drinks-main">
		  <div className="flex-panels-drinks">
			<Product amount="500 ml" name="Vaux Viallis" image={drink1}/>
			<Product amount="500 ml" name="Vaux Viallis Light" image={drink2}/>
		  </div>
		</div>
	
	</div>
  );
}

export default Drinks;
