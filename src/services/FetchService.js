

import React, { Component } from 'react'

export default class FetchService extends Component {
    constructor(props) {
        super(props);
        this._baseURL = 'https://www.anapioficeandfire.com/api'
    }
    //ultimate function to get data from provided url
    async getData(url) {
        try {
            const res = await fetch(`${this._baseURL}${url}`);
            //also check for proper url
            if (!res.ok) {
                throw new Error(`Error ${res.error} status: ${res.status}`)
            }
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
        }

    }
    //get all characters from 1 page
    getAllCharacters() {
        return this.getData('/characters?page=5&pageSize=10')
    }
    //get 1 char by id
    getSingleCharacter(id) {
        return this.getData(`/characters/${id}`);
    }
    //get Books
    getAllBooks() {
        return this.getData('/books')
    }
    //get book by id
    getSingleBook(id) {
        return this.getData(`/books/${id}`);

    }
    //get houses
    getAllHouses() {
        this.getData('/houses');

    }
    //get specific house
    getSingleHouse(id) {
        this.getData(`/houses/${id}`);

    }
}


