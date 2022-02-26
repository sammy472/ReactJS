import React, { Component } from 'react';
import {FaHotjar,FaRegFlag} from 'react-icons/fa';
import {MdPermIdentity} from 'react-icons/md';
import {BsFillCalendar2DateFill} from 'react-icons/bs';
import {FcHome} from 'react-icons/fc';
import {GiSchoolBag} from 'react-icons/gi';
import {MdAttachEmail} from 'react-icons/md';
import {FaGrinStars} from 'react-icons/fa';
import {SiGoogledomains} from 'react-icons/si';
import {GiNightVision} from 'react-icons/gi';
import {GiSpiderWeb} from 'react-icons/gi';
import styles from '../Styles/About.module.css';
import 'bootstrap/dist/css/bootstrap.css';
class About extends Component {
    state = {
        infos:[{front:'Highlight',back:'lorem ipsum',icon:<FaHotjar size="50" color="wheat"/>},
        {front:'Name',back:'Samuel Boateng',icon:<MdPermIdentity size="50" color="wheat"/>},
        {front:'Date Of Birth',back:'29th October, 1997',icon:<BsFillCalendar2DateFill size="50" color="wheat"/>},
        {front:'Nationality',back:'Ghana',icon:<FaRegFlag size="50" color="wheat"/>},
        {front:'Hometown',back:'Juaso AAS',icon:<FcHome size="50" color="wheat"/>},
        {front:'School',back:'ENSA-Marrakech',icon:<GiSchoolBag size="50" color="wheat"/>},
        {front:'Email',back:'samuelboateng472@gmail.com',icon:<MdAttachEmail size="50" color="wheat"/>},
        {front:'Motivation',back:'Lorem ipsum something',icon:<FaGrinStars size="50" color="wheat"/>},
        {front:'Domains Of Interest',back:'Automobile,IOT and Software Development',icon:<SiGoogledomains size="50" color="wheat"/>},
        {front:'Vision(s)',back:'lorem ipsum something',icon:<GiNightVision size="50" color="wheat"/>},
        {front:'Website',back:'Samuelboateng.com',icon:<GiSpiderWeb size="50" color="wheat"/>},
        
    ]
    }
    render() { 
        return (
            <React.Fragment>
            <center className={styles.Title}><h3>Get To Know Something About Me</h3></center>
            <main className={styles.wrapper}>
                {this.state.infos.map((info,index)=>{
                    return(
                    <div className={styles.Container} key={index}>
                        <div className={styles.Cart} key={index}>
                            <div className={styles.Front} key={index}>
                                    <h2 className={styles.CartInfo} key={index}>{info.back}</h2>
                            </div>
                            <div className={styles.Back} key={index}>
                                <span className={styles.Span}>{info.icon}</span>
                                <h2 className={styles.CartInfo} key={index}>{info.front}</h2>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </main>
            </React.Fragment>
        );
    }
}
 
export default About;