import React from 'react';
import ReactDOM from 'react-dom';
import ContinueButton from './components/continueButton.jsx';
import ProjectCreator from './components/projectCreator.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import ConfirmCode from './components/confirmCode.jsx';
injectTapEventPlugin();
// const FirstComponent = () => (
// 
ReactDOM.render(<MuiThemeProvider>
	<div>
	<ProjectCreator/>
	</div>
	</MuiThemeProvider>, document.getElementById('root'));

	// <ConfirmCode/>
	// <ContinueButton/>
