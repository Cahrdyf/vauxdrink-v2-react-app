import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import hoodie from "./image/hoodie2.png";
//import Root from './index.js';

function Product(props){
  return(
    <div className="card-merch">
      <img src={props.image}/>
	  <div>{props.name}<br></br>{props.amount}</div>
    </div>
  );
}

function Subheader(){
  return(
  <div className="subheader">
    <h3>
	  &#8212; Merchandise &#8212;
	</h3>
  </div>
  );
}

function Merch(){
  return(
    <div>
	  <Subheader/>
		<div className="merch-main">
		  <div className="flex-panels-merch">
			<Product name="Vaux Viallis Hoodie" image={hoodie}/>
			<Product name="More Apparel" image={hoodie}/>
		  </div>
		</div>
	</div>
  );
}

export default Merch;
