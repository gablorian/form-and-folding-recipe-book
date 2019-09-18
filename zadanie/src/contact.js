import React from 'react';
import './App.css';

function validate(name, email, text) {
    const errors = [];

    if (name.length < 3) {
        errors.push("Twoje imie jest za krótkie");
    }
    if ((email.length < 5) ||(email.split("").filter(x => x === "@").length !== 1) || (email.indexOf(".") === -1)){
        errors.push("Niepoprawny email");
    }
    if (text.length >200){
        errors.push("Wiadomość może mieć maksymalnie 200 znaków")
    }
    return errors;
}
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const name = (this._nameInput).value;
        const email = (this._emailInput).value;
        const text = (this._textInput).value;

        const errors = validate(name, email, text);
        if (errors.length > 0) {
            this.setState({errors});
        }else{
            console.log(
                'wszystko ok'
            )
        }
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="recipeTable justCenterIt">
                <div className="justCenterIt recipeTable border">
                    <h1 className='titleRowText'>Kontakt</h1>
                    <form onSubmit={this.handleSubmit} className='justCenterIt' noValidate>
                        {errors.map(error => (
                            <p key={error} className='longText'>Błąd: {error}</p>
                        ))}
                        <div className="name">
                            <div><input
                                ref={nameInput => (this._nameInput = nameInput)}
                                type="text"
                                placeholder="Imię"
                            /></div>
                            <div className="email">
                                <div><input
                                    ref={emailInput => (this._emailInput = emailInput)}
                                    type="text"
                                    placeholder="Email"
                                /></div>
                            </div>
                            <div className="text">
                                <div><input
                                    ref={textInput => (this._textInput = textInput)}
                                    type="textarea"
                                    placeholder="Wiadomość"
                                /></div>
                            </div>
                            <div className="send">
                                <button type="submit">Wyślij</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );

    }
}
export default Contact;