import React, { Component } from 'react';


export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            nameBox: '',
            speciesBox: '',
            charHeightBox: '',
            sayingBox: ''
        }
    }
    nameBoxChange(newWords){
        this.setState({nameBox: newWords})
    }
    speciesBoxChange(newSpecies){
        this.setState({speciesBox: newSpecies})
    }
    charHeightBoxChange(newHeight){
        this.setState({charHeightBox: newHeight})
    }
    sayingBoxChange(newPhrase){
        this.setState({sayingBox: newPhrase})
    }
    handleClick(){
        console.log(`Button Clicked!`, this.state.nameBox)
        this.setState({
            nameBox: '',
            speciesBox: '',
            charHeightBox: '',
            sayingBox: ''
        })
    }

    render(){
    return (
        <div>
            <h1>Add a New Tune!</h1>
            Name:<input type='text' placeholder='Character Name' onChange={(recieve) => this.nameBoxChange(recieve.target.value)} /> <br />
            Species: <input type='text' placeholder='Am i a rabbit?' onChange={(recieve) => this.speciesBoxChange(recieve.target.value)} /> <br />
            Height of Character: <input type='text' placeholder='In Feet' onChange={(recieve) => this.charHeightBoxChange(recieve.target.value)} /> <br />
            Catchphrase: <input type='text' placeholder='I`ll get that wabbit' onChange={(recieve) => this.sayingBoxChange(recieve.target.value)} />
            <button onClick={this.handleClick} >Add My Tune!</button>
        </div>
    )}
}