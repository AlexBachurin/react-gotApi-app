import React, { Component } from 'react';
import FetchService from '../../services/FetchService';
import './charDetails.css';
import Loading from '../Loading';
import Error from '../Error';
export default class CharDetails extends Component {


    state = {
        item: {},
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
        if (this.props.itemId !== prevProps.itemId) {
            console.log('updated char details')
            //need to setup loading here, then if we sucessfully fetch we disable loading again
            this.setState({
                loading: true
            })
            this.getCharacterById()

        }
    }



    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    getCharacterById = () => {
        const id = this.props.itemId;
        if (id) {
            this.fetchService.getSingleCharacter(id)
                .then(item => {
                    console.log(item)
                    this.setState({
                        item: item,
                        loading: false

                    })
                })
                .catch(error => {
                    this.setState({
                        error: true
                    })
                })
        }
    }

    render() {

        const { loading, error } = this.state;
        const { itemId } = this.props;
        if (error) {
            return <Error />
        }
        if (!itemId) {
            return <h3 className="select-char">Select character to see details</h3>
        }
        return (
            <>
                {loading ? <Loading /> : <ViewComponent {...this.state.item} />}
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