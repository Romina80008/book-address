import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div> 
      <Header title="Gabriel"/>
      Hola mundo Paula
      <Footer copy="Pie de pagina!"/>
 

       </div>

    );
  }
}

//const obj = {a: 1, b: 's', c: true};



export default App;
