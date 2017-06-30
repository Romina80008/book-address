
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


/*
import React from "react";
import ReactDOM from "react-dom";

import Header from './components/Header';


//1 const MiPrimerComponente = () =>   React.createElement('div', {className: 'text-center'}, 'Hello World Romi')

const MiPrimerComponente = () => ( 
	<div className="text-center"> 
	Hola Mundo
	</div> 
);



ReactDOM.render(
	<MiPrimerComponente/>,
	document.getElementById('root')
	);



/*
1 
ReactDOM.render(
	React.createElement(MiPrimerComponente, null, null),
	document.getElementById('root')
	);
*/