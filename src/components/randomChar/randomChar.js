import React, { Component } from 'react';
import './randomChar.css';
import FetchService from '../../services/FetchService';
export default class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.randomChar();
    }

    fetchService = new FetchService();
    state = {
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null
    }
    //show random user on every component load
    randomChar() {
        //get random id
        const randomId = Math.floor(Math.random() * 131)

        this.fetchService.getSingleCharacter(randomId)
            .then((char) => {
                const { name, gender, born, died, culture } = char;
                this.setState({
                    name: name || 'no info',
                    gender: gender || 'no info',
                    born: born || 'no info',
                    died: died || 'no info',
                    culture: culture || 'no info'
                })
            })

    }

    render() {
        const { name, gender, born, died, culture } = this.state;
        return (
            <div className="random-block rounded">
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}
