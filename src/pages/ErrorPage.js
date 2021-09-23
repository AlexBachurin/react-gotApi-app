import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'reactstrap/lib/Button'
import img from './sad_face.jpg'
export const ErrorPage = () => {
    return (
        <div className="random-block rounded">
            <img className="error-image" src={img} alt="sad-face" />
            <h3 className="error-message">Oops, Something went wrong! There is no such Page</h3>
            <Link to='/'>
                <Button style={{ display: "block", margin: '0 auto', backgroundColor: 'green' }} variant="success">Go home</Button>{' '}
            </Link>
        </div>
    )
}
