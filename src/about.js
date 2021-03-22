import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import Root from './index.js';

function AboutText(){
  return(
	  <div className="about-text">
		<h3>It all started in a little brewhouse&#8230;</h3>
		<br></br>
		<p>In 1897, we started brewing in the small town of Ralston, CA.<br></br>
		   Our founder T.J. Viallis, brewed the best beer in town and soon <br></br>
		   the whole state of California came to enjoy his work. Since then,<br></br>
		   we have stopped at nothing to perfect our craft and deliver the <br></br>
		   freshest and most exquisite brew we can make.
		</p>
		<NavLink to="/drinks">
	      <div className="to-drinks">
		    <br></br>
			Stock up
		  </div>
		</NavLink>
	  </div>
  );
}

function About(){
  return(
    <div className="about">
      <video width='auto' height='auto' autoPlay loop muted playsInline>
        <source src='./video/vid.mp4' type='video/mp4'/>
      </video>
      <AboutText/>
	</div>
  );
}

export default About;
