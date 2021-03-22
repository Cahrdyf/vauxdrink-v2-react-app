import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
	  email: '',
	  message: ''
    };
  }
  
  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  
  render() {
    return (
      <form>
		  <h2>Contact Us</h2>
		  <br/>
		  <p>First Name:</p>
		  <input
			type='text'
			name='firstname'
		  />
		  <p>Last Name:</p>
		  <input
			type='text'
			name='lastname'
		  />
		  <p>Email:</p>
		  <input
			type='text'
			name='email'
		  />
		  <p>Message:</p>
			<textarea 
			  value={this.state.message} 
			  onChange={this.changeHandler}
			  rows='5' 
			  name='message'/>
		  <input type="submit" value="SEND"/>
      </form>
    );
  }
}

function Contact(){
  return(
    <div className="contact">
      <ContactForm/>
	</div>
  );
}

export default Contact;
