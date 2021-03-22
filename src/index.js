import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './home';
import About from './about';
import Drinks from './drinks';
import Merch from './merch';
import Contact from './contact';
import './index.scss';

const txtmenu = 'MENU';
let id = null;

function O(obj){
  return document.getElementById(obj);
}

function Clock(props) {
  return (
    <div>
      <h2 className="date-home">{Date().substr(0,4)} {props.date.toLocaleTimeString()} Los Angeles, CA</h2>
    </div>
  );
}

function tick() {
  if(O('home-clock')){
    ReactDOM.render(
      <Clock date={new Date()} />,
      O('home-clock')
    );
  }
}

setInterval(tick, 1000);

function fadeIn(){
  let el = O('menu-nav');
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if(pos > 100) {
	  clearInterval(id);
      el.style.opacity = 1;
	}
	else{
	  pos += 0.8;
	  let z = (pos) + 60;
	  el.style.opacity = z*0.01;
	}
  }
}

function transmitClick(){
  O("toggleMenu").click();
  let isChecked = O("toggleMenu").checked;
  console.log(isChecked);
  if (isChecked){ 
    O("menu-nav").style.display = 'inline';
	O("btn-nav").innerHTML = ' &#8212 ';
	fadeIn();
  }
  else{
    O("menu-nav").style.display = 'none';
	O("btn-nav").innerHTML = txtmenu;
  }
}

function Head() {
  return (
    <div className="header">
      <input type="checkbox" id="toggleMenu" className="toggleMenu" name="toggleMenu"/>
	  <Nav/>
      <button id="btn-nav" className="btn-nav" onClick={transmitClick}>{txtmenu}</button>
      <h1>VAUX VIALLIS</h1>
	  <button className="btn-cart">CART (0)</button>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="ss-icons">
	  <a className="ig" href="http://www.instagram.com/" target="_blank" rel="noopener">IG</a>
	  <a className="fb" href="http://www.facebook.com/" target="_blank" rel="noopener">FB</a>
	  <a className="tw" href="http://www.twitter.com/" target="_blank" rel="noopener">TW</a>
	  <a className="pin" href="http://www.pinterest.com/" target="_blank" rel="noopener">PIN</a>

	</div>
  );
}

function Foot() {
  return (
    <div className="footer">
	  <SocialMedia />
      <p>Drink responsibly.</p>
      <p>JONATHAN TOLENTINO &#169; 2021</p>
	</div>
  );
}

function Nav(){
  return (
    <div id="menu-nav" className="menu-nav">
      <ul>
        <li onClick={transmitClick}><NavLink to="/">HOME</NavLink></li>
        <li onClick={transmitClick}><NavLink to="/drinks">DRINKS</NavLink></li>
		<li onClick={transmitClick}><NavLink to="/merch">MERCH</NavLink></li>
		<li onClick={transmitClick}><NavLink to="/about">ABOUT</NavLink></li>
		<li onClick={transmitClick}><NavLink to="/contact">CONTACT</NavLink></li>
      </ul>
    </div>
  );
}

class Root extends Component {
  render(){
  return (
    <div className="wrapper">
	  <BrowserRouter>
        <Head/>  
		<div className="spacer"> </div> 
		
		  <Switch>
		    <Route path="/" component={Home} exact/>
			<Route path="/drinks" component={Drinks} exact/>
			<Route path="/merch" component={Merch} exact/>
		    <Route path="/about" component={About} exact/>
			<Route path="/contact" component={Contact} exact/>
	      </Switch>
	  </BrowserRouter>
	  <Foot/>
	</div>
  );
  }
}

ReactDOM.render(
  <Root/>, O('root')
);


