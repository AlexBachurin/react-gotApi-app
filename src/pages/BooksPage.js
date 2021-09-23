import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import ItemList from '../components/itemList'
import ItemDetails, { Field } from '../components/itemDetails'


export default class BooksPage extends Component {

    //state for storing clicked element id for every page
    state = {
        itemId: null
    }

    //get id of clicked item to show in details
    getItemId = (e) => {
        const clickedId = e.target.id;
        this.setState({
            itemId: clickedId
        })
    }

    render() {
        return (
            <Row>
                <Col md='6'>
                    <ItemList getAllItems={this.props.getAllItems} getItemId={this.getItemId} />
                </Col>
                <Col md='6'>
                    <ItemDetails getSingleItem={this.props.getSingleItem} itemId={this.state.itemId} >
                        <Field label="numberOfPages" field="numberOfPages" />
                        <Field label="publisher" field="publisher" />
                        <Field label="released" field="released" />
                    </ItemDetails>
                </Col>
            </Row>
        )
    }
}
