

import React, { Component } from 'react'

export default class FetchService extends Component {
    constructor(props) {
        super(props);
        this._baseURL = 'https://www.anapioficeandfire.com/api'
    }
    //ultimate function to get data from provided url
    async getData(url) {
        const res = await fetch(`${this._baseURL}${url}`);
        const data = await res.json();
        return data;

    }
    //get all characters from 1 page
    getAllCharacters() {
        this.getData('/characters?page=5&pageSize=10')
            .then(data => console.log(data));
    }
    //get 1 char by id
    getSingleCharacter(id) {
        this.getData(`/characters/${id}`)
            .then(data => console.log(data));
    }
    //get Books
    getAllBooks() {
        this.getData('/books')
            .then(data => console.log(data));
    }
    //get book by id
    getSingleBook(id) {
        this.getData(`/books/${id}`)
            .then(data => console.log(data));
    }
    //get houses
    getAllHouses() {
        this.getData('/houses')
            .then(data => console.log(data));
    }
    //get specific house
    getSingleHouse(id) {
        this.getData(`/houses/${id}`)
            .then(data => console.log(data));
    }
}


