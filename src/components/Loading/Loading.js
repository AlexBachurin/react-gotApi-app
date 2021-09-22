import React, { Component } from 'react'
import './loading.css'
export default class Loading extends Component {
    render() {
        return (
            <div>
                <img className="loading" src='https://res.cloudinary.com/dljezd6qv/image/upload/v1632303740/loading_k35i9x.svg' alt="loading" />
            </div>
        )
    }
}
