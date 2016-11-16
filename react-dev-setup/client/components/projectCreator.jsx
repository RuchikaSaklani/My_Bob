import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import Paper from 'material-ui/Paper';
import {blue500} from 'material-ui/styles/colors';
import FormsyText from 'formsy-material-ui/lib/FormsyText';

 const errorMessages = {
    wordsError: "Please only use letters",
    emailError: "Please enter valid email ID(someone@example.com)",
    passwordError: "Password should be of minimum 8(including special and numeric) characters"
 }
  const styles={
    	paperStyle: {
      	width: 600,
      	margin: 'auto',
      	padding: 20
    	},
    	submitStyle: {
      		marginTop: 20
    		}
		}
export default class ProjectCreator extends React.Component{
	constructor(props){
	super(props);
	this.state={password: ''};
	this.enableButton= this.enableButton.bind(this);
	this.disableButton= this.disableButton.bind(this);
	this.submitForm = this.submitForm.bind(this);
	this.notifyFormError = this.notifyFormError.bind(this);
	this.state = {canSubmit:false};
	}

	enableButton() {
    this.setState({
      canSubmit:true
    });
  }

   disableButton() {
    this.setState({
      canSubmit:false
    });
  }
  submitForm(data) {
  	 //alert(JSON.stringify(data, null, 4));

  	var password=JSON.stringify(data.Password);
  	var confirmpassword=JSON.stringify(data.ConfirmPassword);
  	
  	if(password!==confirmpassword)
  	{
  		alert("Password and confirm password do not match");

  	}
  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }

	render(){
   
		return(
		  <Paper style={styles.paperStyle}>
		    <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}>
			<div style={{
			 marginTop:50,
			 marginLeft:150,
			 color: blue500
			}}>
			<div>
			<strong><h2 style={{color:'#607D8B'}}>Enter your details</h2></strong>
			</div>
    		<FormsyText
              		  name="FullName"
    			      hintText="Full Name"
    			      validations="isWords"
                      validationError={errorMessages.wordsError}
              		  required
				      floatingLabelText="Full name"/><br />
			<FormsyText
					  name="Email"
				      hintText="Email"
				      validations="isEmail"
				      validationError={errorMessages.emailError}
				      required
				      floatingLabelText="Email ID"
				      updateImmediately/><br />
			<FormsyText
				      name="ProjectTitle"
				      hintText="Project Title"
				      required
				      floatingLabelText="Project Title"
				      updateImmediately/><br />
			<FormsyText
				      name="Password"
				      hintText="Password"
				      validations="minLength:8"
				      type="password"
				      validationError={errorMessages.passwordError}
				      required
				      floatingLabelText="Password"
				      updateImmediately/><br />
			<FormsyText
				      name="ConfirmPassword"
				      hintText="Same as password"
				      validations="minLength:8"
				      type="password"
				      validationError={errorMessages.passwordError}
				      required
				      floatingLabelText="Confirm Password"	
				      updateImmediately/><br />
			<RaisedButton
			  type="submit"
              label="Save"
              disabled={!this.state.canSubmit}

			          style={{ 
			          	width:60,
			          	marginTop:50,
			            marginLeft:200
			          }}/>
			          </div>
         </Formsy.Form>
        </Paper>

  			);
	}
}
