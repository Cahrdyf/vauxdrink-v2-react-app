import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import vid from './video/vid.mp4';
//import Root from './index.js';

function O(obj){
  return document.getElementById(obj);
}

function transmitClickDelivery(){
  O("toggleMenu-delivery").click();
  let isChecked = O("toggleMenu-delivery").checked;
  console.log(isChecked);
  if (isChecked){ 
    O("text-delivery").style.display = 'none';
	O("form-delivery").style.display = 'block';
  }
  else{
    O("menu-nav").style.display = 'none';
  }
}

function OverText(){
  return(
    <div>
      <span className='over-text over-text-top'>SHOP</span>
	  <span className='over-text over-text-bottom'>DRINKS</span>
    </div>
  );
}	

function Panels(props) {
  return(
    <div className="card">
      <img className="card-image" src={props.image}/>
	  <span className="card-title card-title-main">{props.main}</span>
      <span className="card-title card-title-sub">{props.sub}</span>
	</div>
  );
}

function Delivery(){
  return(
    <div className="panel-delivery">
	  <input type="checkbox" id="toggleMenu-delivery" className="toggleMenu-delivery" name="toggleMenu"/>
	  <div id="form-delivery" className="form-delivery">
	    <FormDelivery/>
	  </div>
	  <div id="text-delivery" className="text-delivery" onClick={transmitClickDelivery}>
	    <p>
	      Get your brew delivered today. 
		  Free same day delivery is available tuesday-saturday,
		  7am to 8pm in San Francisco, Sacramento, 
		  Las Vegas, Houston, & Seattle. <br></br><br></br>Click me to check your location!
	    </p>
	  </div>
	</div>
  );
}

class FormDelivery extends React.Component{
  constructor(props){
    super(props);
	this.state = {
	  zip: null,
	  errormessage: ''
	};
  }
  changeHandler = (event) => {
    let zip = event.target.name;
	let val = event.target.value;
	let error = '';
	if (zip === "zip"){
	  if(val.length > 5){
	    error = <strong style={{color: "#eee"}}>Please enter 5 digits only</strong>
	  }
	  if(val != "" && !Number(val)){ 
	    error = <strong style={{color: "#eee"}}>Zip code must be a number</strong>
	  } 
	}
	this.setState({errormessage: error});
	this.setState({[zip]: val});
  }
  render(){
    return (
	  <form>
	    <h3>Please enter your zip code:</h3>
		<input
		  type='text' name='zip' onChange={this.changeHandler}
		/>
		{this.state.errormessage}
	  </form>
	);
  }
}

function Home() {

  return (
    <div className="home">
	  <NavLink to="/drinks">
	    <OverText/>
	    <video width='auto' height='auto' autoPlay loop muted playsInline>
          <source src={vid} type='video/mp4'/>
        </video>
	  </NavLink>
	  <div id='home-clock' className="home-clock"></div>
	  <h3>
	    A rich-flavored lager infused with slow roasted caramel malts. 
		Enjoy a refreshing dark beer with a smooth, smooth taste.
	  </h3>
	  
	  <div className="flex-panels">
	    <NavLink to="/drinks">
	      <div>
			<Panels main='Indulge' sub="Drinks" image="./image/beer.jpg"/>
		  </div>
		</NavLink>
		<NavLink to="/merch">
		  <div>
			  <Panels main='Warm' sub="Wearables" image="./image/hoodie.png"/>
		  </div>
		</NavLink>
	  </div>
	  
	  <Delivery/>
	  
    </div>
  );
}

export default Home;
