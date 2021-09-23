import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import ItemList from '../components/itemList'
import Error from '../components/Error'
import { withRouter } from 'react-router'


class BooksPage extends Component {

    //state for storing clicked element id for every page
    state = {
        itemId: null,
        error: false
    }

    //get id of clicked item to show in details
    getItemId = (id) => {
        this.setState({
            itemId: id
        })
    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <Error />
        }

        return (
            <Row>
                <Col md='6'>
                    <ItemList getAllItems={this.props.getAllItems} getItemId={(itemId) => {
                        //push id to history so we can use it in SingleBook
                        this.props.history.push(`/books/${itemId}`)
                    }} />
                </Col>
                {/* <Col md='6'>
                    <ItemDetails getSingleItem={this.props.getSingleItem} itemId={this.state.itemId} >
                        <Field label="numberOfPages" field="numberOfPages" />
                        <Field label="publisher" field="publisher" />
                        <Field label="released" field="released" />
                    </ItemDetails>
                </Col> */}
            </Row>
        )
    }
}

export default withRouter(BooksPage)
