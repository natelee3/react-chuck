import React, { Component } from 'react';

class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            isLoading: false
        };
    }

    componentDidMount() {
        this._fetchJoke()
    }

    _fetchJoke = () => {
        this.setState({
            isLoading: true
        }, async () => {
            const url= 'https://api.chucknorris.io/jokes/random?category=dev';
            const response = await fetch(url)
                .then(response => response.json())
            this.setState({
                joke: response.value,
                isLoading: false
            });
        })
    };
    
    render() {
        const { joke, isLoading } = this.state;
        return (
            <>
                <p>{!!isLoading ? "Loading..." : joke}</p>
                <button onClick={this._fetchJoke}>New Joke</button>
            </>
        );
    }
}

export default Joke;