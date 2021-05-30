// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    componentDidMount() {
        let url = 'http://api.open-notify.org/astros.json'
        fetch(url)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            this.setState({
                number: data.number,
                people: data.people
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <h1>Hello</h1>
        )
    }
}