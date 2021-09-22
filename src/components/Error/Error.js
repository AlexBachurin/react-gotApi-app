import React, { Component } from 'react'
import './Error.css'
export default class Error extends Component {
    render() {
        return (
            <div className="random-block rounded">
                <img className="error-image" src={process.env.PUBLIC_URL + '/img/sad_face.jpg'} alt="sad-face" />
                <h3 className="error-message">Oops, Something went wrong!</h3>
            </div>
        )
    }
}
