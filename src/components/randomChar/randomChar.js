import React, { Component } from 'react';
import './randomChar.css';
import FetchService from '../../services/FetchService';
import Loading from '../Loading';
import Error from '../Error';

export default class RandomChar extends Component {



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
    componentDidMount() {
        //show random character on mount
        this.randomChar();
        console.log('mounted');
        //update random character every 3 sec
        this.timerId = setInterval(() => {
            console.log('update')
            this.randomChar();
        }, 30000);

    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    //show random user on every component load
    randomChar() {
        //get random id
        const randomId = Math.floor(Math.random() * 131)
        // const randomId = 333333;
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
        const { loading, error } = this.state;

        //if we got error show error block
        if (error) {
            return <Error />
        }
        return (
            <>
                <div className="random-block rounded">
                    {loading ? <Loading /> : <RandomCharViewComp {...this.state} />}
                </div>

            </>
        );
    }
}


const RandomCharViewComp = ({ name, gender, born, died, culture }) => {
    return (
        <><h4>Random Character: {name}</h4>
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
            </ul> </>
    )
}
