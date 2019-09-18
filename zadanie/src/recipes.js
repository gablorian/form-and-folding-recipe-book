import React from 'react';
import './App.css';
import arrow from "./images/arrow.png";
import hat from "./images/hat.png";

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeToShow : null,
            active: false
        };
    }
    toggleRecipe(id) {
        if(this.state.recipeToShow === id ) {
            this.setState(({recipeToShow: null }));
        }else{
            this.setState(({recipeToShow: id }))
        }
    }


    render() {
        return (
            <div className='recipeTable'>
                <div className='recipeTable '>
                    <div className='firstRow border'>
                        <span className='titleRowText'>Przepis</span>
                        <span className='titleRowText'>Trudność</span>
                    </div>
                    <div className='secondRow border letsFlexIt'>
                        <div className='spacer'>
                            <div className='textFirstPart'>
                                <div>
                                    <span className='number'>1.</span>
                                </div>
                                <div>
                                    <span>Spaghetti</span>
                                </div>
                            </div>
                            <div className=' letsFlexIt'>
                                <div className='divAlign'>
                                <img src={hat} alt='bs' className='hat'/>
                                <img src={hat} alt='bs' className='hat'/>
                                </div>
                                <div className={this.state.recipeToShow && ''} onClick={() =>this.toggleRecipe(1)}>
                                    <img src={arrow} alt='bs' className={`bigger ${this.state.recipeToShow === 1 ? "arrowRotate" : ""}`}/>
                                </div>

                            </div>
                        </div>
                        <div itemID={1} className={`spacerSecond justCenterIt ${this.state.recipeToShow === 1 ? "" : "hidden"}`}>
                            <div className='primaryColumn'>
                                <div><span className='number'>Składniki</span>
                                </div>
                                <div>
                                    <ul className='subMenu'>
                                    <li>Podwójna porcja CIASTA NA PIEROGI</li>
                                    <li>500 g sera białego tłustego</li>
                                    <li>Kapsuta</li>
                                    <li>500 g ziemniaków</li>
                                    <li>2 łyżeczki soli (lub do smaku)</li>
                                    <li>1/2 łyżeczki zmielonego pieprzu</li>
                                </ul>
                                </div>

                            </div>
                            <div className='secondaryColumn'>
                                <div><span className='number'>Przygotowanie</span>
                                </div>
                                <div className='longText'>
                                    Nadzienie: ziemniaki obrać, opłukać, włożyć do garnka, dodać sól, przykryć zimną wodą i zagotować. Gotować pod uchyloną pokrywą przez około pół godziny lub do miękkości. Odcedzić, włożyć
                                    z powrotem do garnka i jeszcze gorące roztłuc dokładnie tłuczkiem do ziemniaków na gładką masę bez grudek. Ziemniaki całkowicie ostudzić, odparować.

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='thirdRow border letsFlexIt'>
                        <div className='spacer'>
                        <div className='textFirstPart'>
                            <div>
                                <span className='number'>2.</span>
                            </div>
                            <div>
                                <span>Carbonara</span>
                            </div>
                        </div>
                            <div className='letsFlexIt'>
                                <div>
                                    <img src={hat} alt='bs' className='hat'/>
                                    <img src={hat} alt='bs' className='hat'/>
                                    <img src={hat} alt='bs' className='hat'/>
                                </div>
                                <div className={this.state.recipeToShow && ''} onClick={() => this.toggleRecipe(2)}>
                                    <img src={arrow} alt='bs' className={`bigger ${this.state.recipeToShow === 2 ? "arrowRotate" : ""}`}/>
                                </div>
                            </div>
                        </div>
                        <div id={2} className={`spacerSecond justCenterIt ${this.state.recipeToShow === 2 ? "" : "hidden"}`}>
                            <div className='primaryColumn'>
                                <span className='number'>Składniki</span>
                                <ul className='subMenu'>
                                    <li>Podwójna porcja CIASTA NA PIEROGI</li>
                                    <li>500 g sera białego tłustego</li>
                                    <li>Kapsuta</li>
                                    <li>500 g ziemniaków</li>
                                    <li>2 łyżeczki soli (lub do smaku)</li>
                                    <li>1/2 łyżeczki zmielonego pieprzu</li>
                                </ul>
                            </div>
                            <div className='secondaryColumn'>
                                <div><span className='number'>Przygotowanie</span>
                                </div>
                                <div className='longText'>
                                    Nadzienie: ziemniaki obrać, opłukać, włożyć do garnka, dodać sól, przykryć zimną wodą i zagotować. Gotować pod uchyloną pokrywą przez około pół godziny lub do miękkości. Odcedzić, włożyć
                                    z powrotem do garnka i jeszcze gorące roztłuc dokładnie tłuczkiem do ziemniaków na gładką masę bez grudek. Ziemniaki całkowicie ostudzić, odparować.

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='fourthRow border letsFlexIt'>
                        <div className='spacer'>
                        <div className='textFirstPart'>
                            <div>
                                <span className='number'>3.</span>
                            </div>
                            <div>
                                <span >Lazagne</span>
                            </div>
                        </div>
                            <div className='letsFlexIt'>
                                <div>
                                    <img src={hat} alt='bs' className='hat'/>
                                    <img src={hat} alt='bs' className='hat'/>
                                </div>
                                <div className={this.state.recipeToShow && ''} onClick={() => this.toggleRecipe(3)}>
                                    <img src={arrow} alt='bs' className={`bigger ${this.state.recipeToShow === 3 ? "arrowRotate" : ""}`}/>
                                </div>
                            </div>
                        </div>
                        <div id={3} className={` spacerSecond justCenterIt ${this.state.recipeToShow === 3 ? "" : "hidden"}`}>
                            <div className='primaryColumn'>
                                <span className='number'>Składniki</span>
                                <ul className='subMenu'>
                                    <li>Podwójna porcja CIASTA NA PIEROGI</li>
                                    <li>500 g sera białego tłustego</li>
                                    <li>Kapsuta</li>
                                    <li>500 g ziemniaków</li>
                                    <li>2 łyżeczki soli (lub do smaku)</li>
                                    <li>1/2 łyżeczki zmielonego pieprzu</li>
                                </ul>
                            </div>
                            <div className='secondaryColumn'>
                                <div><span className='number'>Przygotowanie</span>
                                </div>
                                <div className='longText'>
                                    Nadzienie: ziemniaki obrać, opłukać, włożyć do garnka, dodać sól, przykryć zimną wodą i zagotować. Gotować pod uchyloną pokrywą przez około pół godziny lub do miękkości. Odcedzić, włożyć
                                    z powrotem do garnka i jeszcze gorące roztłuc dokładnie tłuczkiem do ziemniaków na gładką masę bez grudek. Ziemniaki całkowicie ostudzić, odparować.

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='fifthRow border letsFlexIt'>
                        <div className='spacer'>
                        <div className='textFirstPart'>
                            <div>
                                <span className='number'>4.</span>
                            </div>
                            <div>
                                <span >Pierogi</span>
                            </div>
                        </div>
                            <div className='letsFlexIt'>
                                <div>
                                    <img src={hat} alt='bs' className='hat'/>
                                    <img src={hat} alt='bs' className='hat'/>
                                    <img src={hat} alt='bs' className='hat'/>
                                    <img src={hat} alt='bs' className='hat'/>
                                </div>
                                <div className={this.state.recipeToShow && ''} onClick={() => this.toggleRecipe(4)}>
                                    <img src={arrow} alt='bs' className={`bigger ${this.state.recipeToShow === 4 ? "arrowRotate" : ""}`}/>
                                </div>
                            </div>
                        </div>
                        <div id={4} className={`spacerSecond justCenterIt ${this.state.recipeToShow === 4 ? "" : "hidden"}`}>
                            <div className='primaryColumn'>
                                <span className='number'>Składniki</span>
                                <ul className='subMenu'>
                                    <li>Podwójna porcja CIASTA NA PIEROGI</li>
                                    <li>500 g sera białego tłustego</li>
                                    <li>Kapsuta</li>
                                    <li>500 g ziemniaków</li>
                                    <li>2 łyżeczki soli (lub do smaku)</li>
                                    <li>1/2 łyżeczki zmielonego pieprzu</li>
                                </ul>
                            </div>
                            <div className='secondaryColumn'>
                                <div><span className='number'>Przygotowanie</span>
                                </div>
                                <div className='longText'>
                                    Nadzienie: ziemniaki obrać, opłukać, włożyć do garnka, dodać sól, przykryć zimną wodą i zagotować. Gotować pod uchyloną pokrywą przez około pół godziny lub do miękkości. Odcedzić, włożyć
                                    z powrotem do garnka i jeszcze gorące roztłuc dokładnie tłuczkiem do ziemniaków na gładką masę bez grudek. Ziemniaki całkowicie ostudzić, odparować.

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default Recipes
