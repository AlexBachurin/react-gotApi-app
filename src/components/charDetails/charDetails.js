import React, { Component } from 'react';
import FetchService from '../../services/FetchService';
import './charDetails.css';
export default class CharDetails extends Component {


    state = {
        name: null,
        born: null,
        gender: null,
        died: null,
        culture: null
    }

    fetchService = new FetchService();

    //only when we will update(when props are passed) we will fetch character by id and set it into our state
    componentDidUpdate() {
        console.log('updated char details')
        this.getCharacterById()
    }

    getCharacterById = () => {
        const id = this.props.charId;
        if (id) {
            this.fetchService.getSingleCharacter(id)
                .then(({ name, gender, born, died, culture }) => {
                    this.setState(state => {
                        return {
                            name: name,
                            born: born,
                            gender: gender,
                            died: died,
                            culture: culture
                        }
                    })
                })
        }
    }

    render() {

        const { name, born, gender, died, culture } = this.state;
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}