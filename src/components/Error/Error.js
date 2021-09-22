import React, { Component } from 'react'
import './Error.css'
import img from './sad_face.jpg'
export default class Error extends Component {
    render() {
        return (
            <div className="random-block rounded">
                <img className="error-image" src={img} alt="sad-face" />
                <h3 className="error-message">Oops, Something went wrong!</h3>
            </div>
        )
    }
}
