import React, { Component } from 'react';
import About from './Componenets/about';
import Navbar from './Componenets/navbar';
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render() { 
    return (
      <React.Fragment>
      <Navbar/>
      <div className={styles.AboutWrapper}>
        <About/>
      </div>
      </React.Fragment>
    );
  }
}
 
export default App;
