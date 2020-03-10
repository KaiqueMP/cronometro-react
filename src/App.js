import React, {Component} from 'react';
import './style.css'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            button:'Começar'
        }
        this.timer = null;
        this.comecar = this.comecar.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    comecar(){

        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.button = 'Começar';            
        }else{
            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
                    
            }, 100)
            state.button = 'Pausar';
        }
        this.setState(state)
    }

    limpar(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;          
        }

        let state = this.state;
        state.numero = 0;
        state.button = 'Começar';
        this.setState(state);


    }

    render(){
        return(
            <div className="container">
                <img className="cronometroImg" src={require('./assets/cronometro.png')} />
                <a className="timer">{this.state.numero.toFixed(1)}</a>

                <div className="areaBtn">
                    <a className="button" onClick={this.comecar}>{this.state.button}</a>
                    <a className="button" onClick={this.limpar}>Limpar</a>

                </div>
            </div>
        );
    }
}

export default App;
