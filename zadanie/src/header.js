import React from 'react';
import './App.css';
import logo from './images/logo.png'
import Recipes from "./recipes";
import Contact from "./contact";
import Hello from "./main";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whichOneRender: null
        };
    }
        setForRecipes(){
            this.setState({whichOneRender:1});
        };
        setForContact(){
            this.setState({whichOneRender:2});
        };
        setClear(){
            this.setState({whichOneRender:null});
        };



    render() {
        let button = <Hello/>;
        if (this.state.whichOneRender===null) {
            button = <Hello/>;
        } if (this.state.whichOneRender===1){
            button = <Recipes/>;
        } if(this.state.whichOneRender===2){
            button = <Contact/>
        }
        return (
            <div className='site-content'>
                <div className='header'>
                    <div className='container'>
                        <div className='send'>
                            <img src={logo} alt='logo jakieś' className='mainLogo' onClick={() => this.setClear()} />
                        </div>
                        <div className='menuChoices'>
                            <ul className='menu'>
                                <li onClick={() => this.setForRecipes()} ><span>Przepisy</span></li>
                            </ul>
                            <ul className='menu'>
                                <li onClick={() => this.setForContact()}><span>Kontakt</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className='section'>

                        {button}

                </section>
            </div>


        );
    }
}
export default Header;