import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LocaleContext from './LocaleContext';
import LanguageSelect from './LanguageSelect';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: 'de',
            handleChange: value => this.setState({ locale: value }),
        };
    }
    render() {
        return (
            <LocaleContext.Provider value={this.state}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                        <LanguageSelect />
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>
                        <LocaleContext.Consumer>{context => context.locale}</LocaleContext.Consumer>
                    </p>
                </div>
            </LocaleContext.Provider>
        );
    }
}

export default App;
