

import { Component } from "react";

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
    getAllBooks = async () => {
        const books = await this.getData('/books')
        return books.map(this.transformBook)
    }
    //get book by id
    getSingleBook = async (id) => {
        const book = await this.getData(`/books/${id}`);
        return this.transformBook(book);

    }
    //get houses
    getAllHouses = async () => {
        const houses = await this.getData('/houses');
        return houses.map(this.transformHouses)

    }
    //get specific house
    getSingleHouse = async (id) => {
        const house = await this.getData(`/houses/${id}`);
        return this.transformHouses(house)

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
            category: 'character'
        }
    }

    //transform book
    transformBook({ url, name, numberOfPages, publisher, released }) {
        return {
            url: url,
            name: name || 'no-info',
            numberOfPages: numberOfPages || 'no-info',
            publisher: publisher || 'no-info',
            released: released || 'no-info',
            category: 'book'
        }
    }
    //transform houses
    transformHouses({ url, name, region, words, titles, ancestralWeapon }) {
        return {
            url: url,
            name: name || 'no-info',
            region: region || 'no-info',
            words: words || 'no-info',
            titles: titles || 'no-info',
            ancestralWeapon: ancestralWeapon || 'no-info',
            category: 'house'
        }
    }
}


