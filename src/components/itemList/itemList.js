import React, { Component } from 'react';
import './itemList.css';
import FetchService from '../../services/FetchService';
import Loading from '../Loading';
import Error from '../Error';
export default class ItemList extends Component {
    service = new FetchService();

    state = {
        itemList: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        this.getCharacterList();
    }
    //fetch characters
    getCharacterList = () => {
        this.service.getAllCharacters()
            .then(list => {
                this.setState({
                    itemList: list,
                    loading: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: true
                })
            })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }


    render() {

        const { itemList, error, loading } = this.state;
        const { getCharacterId } = this.props;
        // create list with items in jsx
        const list = itemList.map((item) => {
            //get id, since we dont have it in the object we will extract it from url
            const itemUrl = item.url;
            const id = itemUrl.replace(/\D/g, "")
            return (
                <li onClick={getCharacterId} id={id} key={id} className="list-group-item">
                    {item.name}
                </li>
            )
        })
        //if error when fetching show error
        if (error) {
            return <Error />
        }
        return (
            <ul className="item-list list-group">
                {/* if loading show loading, else show component */}
                {loading ? <Loading /> : <>{list} </>}
            </ul>
        );
    }
}