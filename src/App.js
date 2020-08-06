import React, { Component } from 'react'

 class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dataObject: {}
        }
    }
    


     componentDidMount(){
         fetch("http://api.open-notify.org/astros.json")
         .then( res => res.json() )
         .then( data => this.setState({
             dataObject: data
         }) )
     }
    render() {
        return (
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}

export default App
