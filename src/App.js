import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
        searchText: 'Busqueda',
        firstName: ''; 

    };
  }

  handleSearchTextChange = (event) => {
      this.setState({
        searchText: event.target.value
      });

  }



  render() {
    return (
      <div> 
      <Header title="Gabriel"/>
      <div></div>
      <SearchBox 
        value={this.state.searchText}
        onChange={this.handleSearchTextChange}
      />
      Hola mundo Paula

      <div className="row">
      <div className="col-md-6">
      <h1>Nuevo Contacto </h1>
      </div>

      </div>



      <Footer copy="Pie de pagina!"/>
 

       </div>

    );
  }
}

//const obj = {a: 1, b: 's', c: true};



export default App;
