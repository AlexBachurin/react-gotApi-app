import React, { Component } from 'react';
import FetchService from '../../services/FetchService';
import './charDetails.css';
import Loading from '../Loading';
import Error from '../Error';

//component for rendering field of ItemDetails
const Field = ({ item, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            {/* get field of item we get from api, since we get object, we use item[field] */}
            <span>{item[field]}</span>
        </li>
    )
}

export { Field };


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

        const { loading, error, item } = this.state;
        const { name } = item;
        const { itemId } = this.props;
        if (error) {
            return <Error />
        }
        if (!itemId) {
            return <h3 className="select-char">Select character to see details</h3>
        }
        return (
            <>
                {loading ? <Loading /> : <div className="char-details rounded">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {/* display all Field components we get from parent */}
                        {
                            //since we cant directly change child, we using map 
                            //and cloning element with adding item from state to it
                            React.Children.map(this.props.children, (child) => {

                                return React.cloneElement(child, { item })
                            })
                        }
                    </ul>
                </div>}
            </>
        );
    }
}

