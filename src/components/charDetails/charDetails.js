import React, { Component } from 'react';
import FetchService from '../../services/FetchService';
import './charDetails.css';
import Loading from '../Loading';
import Error from '../Error';
export default class CharDetails extends Component {


    state = {
        name: null,
        born: null,
        gender: null,
        died: null,
        culture: null,
        loading: true,
        error: false
    }

    fetchService = new FetchService();


    componentDidMount() {
        this.getCharacterById();
    }

    //only when we will update(when props are passed) we will fetch character by id and set it into our state
    componentDidUpdate(prevProps) {
        //only call function if previous props are not equal current props, else it will update infinetly
        if (this.props.charId !== prevProps.charId) {
            console.log('updated char details')
            this.getCharacterById()
        }
    }



    componentDidCatch() {
        this.setState({
            error: true
        })
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
                            culture: culture,
                            loading: false
                        }
                    })
                })
                .catch(error => {
                    this.setState({
                        error: true
                    })
                })
        } else {
            this.setState({
                loading: false
            })

        }
    }

    render() {

        const { loading, error } = this.state;
        const { charId } = this.props;
        if (error) {
            return <Error />
        }
        if (!charId) {
            return <h3 className="select-char">Select character to see details</h3>
        }
        return (
            <>
                {loading ? <Loading /> : <ViewComponent {...this.state} />}
            </>
        );
    }
}

const ViewComponent = ({ name, gender, born, died, culture }) => {
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
    )
}