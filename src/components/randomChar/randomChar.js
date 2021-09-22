import React, { Component } from 'react';
import './randomChar.css';
import FetchService from '../../services/FetchService';
import Loading from '../Loading';
import Error from '../Error';
export default class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.randomChar();
    }

    fetchService = new FetchService();
    state = {
        loading: true,
        error: false,
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null
    }
    //show random user on every component load
    randomChar() {
        //get random id
        // const randomId = Math.floor(Math.random() * 131)
        const randomId = 133333;
        this.fetchService.getSingleCharacter(randomId)
            .then((char) => {
                const { name, gender, born, died, culture } = char;
                this.setState({
                    name: name || 'no info',
                    gender: gender || 'no info',
                    born: born || 'no info',
                    died: died || 'no info',
                    culture: culture || 'no info',
                    loading: false
                })
            })
            //if error on fetch change error state to true
            .catch(error => {
                console.log(error);
                this.setState({
                    ...this.state, error: true
                })
            })

    }

    render() {
        const { name, gender, born, died, culture, loading, error } = this.state;
        if (error) {
            return <Error />
        }
        return (
            <div className="random-block rounded">
                {loading ? <Loading /> : <><h4>Random Character: {name}</h4>
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
                    </ul> </>}
            </div>
        );
    }
}
