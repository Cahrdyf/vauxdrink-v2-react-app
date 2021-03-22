import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
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
			<Product amount="500 ml" name="Vaux Viallis" image="./image/drink1_square.png"/>
			<Product amount="500 ml" name="Vaux Viallis Light" image="./image/drink2_square.png"/>
		  </div>
		</div>
	
	</div>
  );
}

export default Drinks;
