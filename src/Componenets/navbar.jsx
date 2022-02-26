import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {IoMdSchool} from 'react-icons/io';
import styles from '../Styles/Navbar.module.css';
class Navbar extends React.Component {
    state = {listItems:[
        {link:'About',href:'#'},
        {link:'Resume',href:'#'},
        {link:'Projects',href:'#'},
        {link:'Contact',href:'#'}
    ],
    title:'Samuel Boateng'
}
    render() { 
        return (
            <nav className={styles.Navbar}>
                <div className={styles.LogoSchool}>
                    <h1 className={styles.Logo}><IoMdSchool size="60" color="white"/><span className={styles.Span}>{this.state.title}</span></h1>
                </div>
                <div className={styles.ListContainer}>
                    <ul className={styles.Lists}>
                        {this.state.listItems.map((list,index)=>{
                            return (
                                <li key={index} className={styles.List}><a key={index} className={styles.Link} href={list.href}>{list.link}</a></li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;