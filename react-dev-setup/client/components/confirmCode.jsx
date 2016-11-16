import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Paper from 'material-ui/Paper'

const errorMessages = {
    numberError: "Please enter the correct confirmation code(number)"
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

export default class ConfirmCode extends React.Component{
constructor(props){
	super(props);
	this.state={password: ''};
	this.enableButton= this.enableButton.bind(this);
	this.disableButton= this.disableButton.bind(this);
	this.submitForm = this.submitForm.bind(this);
	this.state = {canSubmit:false};
	}
		//this.notifyFormError = this.notifyFormError.bind(this);


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
  	 alert(JSON.stringify(data));
	}
  	// var password=JSON.stringify(data.confirmCode);
  	// if()
  	// {
  	// 	alert("Please enter correct confirmation code");

  	// }

render(){
		return(
			<Paper style={styles.paperStyle}>
		    <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}>
    		<FormsyText
				      name="confirmCode"
				      hintText="Enter code sent to you via email"
				      validations="isNumeric"
                      validationError={errorMessages.numberError}
              		  required
				      floatingLabelText="Confirmation code"
				      updateImmediately/><br />
			  <RaisedButton
			  	type="submit"
              	label="Continue"
              	primary={true}
                disabled={!this.state.canSubmit}
					    style={{ 
			          	width:100,
			          	marginTop:50,
			            marginLeft:200
			          }}/>
         </Formsy.Form>
        </Paper>
				      );
				   
	}
}