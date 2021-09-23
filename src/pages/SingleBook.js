import React, { useState, useEffect } from 'react'
import FetchService from '../services/FetchService'
import Error from '../components/Error'
import Loading from '../components/Loading';
const SingleBook = ({ bookId }) => {
    const [book, setBook] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)
    const fetchService = new FetchService();
    console.log(bookId)
    const getBook = () => {
        if (bookId) {
            fetchService.getSingleBook(bookId)
                .then(book => {
                    setBook(book);
                    setLoading(false)
                })
        } else {
            setError(true)
            setLoading(false)
        }
    }

    useEffect(() => {
        getBook();
    }, [bookId])

    if (error) {
        return <Error />
    }
    if (loading) {
        return <Loading />
    }

    const { name, numberOfPages, publisher, released } = book;

    return (

        <div className="book">
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">{name}</span>
                <span>{name}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">{numberOfPages}</span>
                <span>{numberOfPages}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">{publisher}</span>
                <span>{publisher}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">{released}</span>
                <span>{released}</span>
            </li>
        </div>
    )
}


export default SingleBook;
