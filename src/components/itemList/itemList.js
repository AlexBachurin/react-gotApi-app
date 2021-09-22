import React, { Component } from 'react';
import './itemList.css';
import FetchService from '../../services/FetchService';
export default class ItemList extends Component {


    render() {
        const service = new FetchService();
        service.getAllCharacters();
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ul>
        );
    }
}