

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
    getAllCharacters = async () => {
        const response = await this.getData('/characters?page=5&pageSize=10');
        return response.map(this.transformCharacter)
    }
    //get 1 char by id
    getSingleCharacter = async (id) => {
        const character = await this.getData(`/characters/${id}`);
        return this.transformCharacter(character)
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

    //transform character
    transformCharacter({ url, name, born, gender, died, culture }) {
        return {
            url: url,
            name: name || 'no-info',
            born: born || 'no-info',
            gender: gender || 'no-info',
            died: died || 'no-info',
            culture: culture || 'no-info',
        }
    }
}


