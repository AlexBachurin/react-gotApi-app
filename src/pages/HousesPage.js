import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import ItemList from '../components/itemList'
import ItemDetails, { Field } from '../components/itemDetails'
import Error from '../components/Error'


export default class BooksPage extends Component {
    //state for storing clicked element id for every page
    state = {
        itemId: null,
        error: false
    }

    //get id of clicked item to show in details
    getItemId = (e) => {
        const clickedId = e.target.id;
        this.setState({
            itemId: clickedId
        })
    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    render() {
        return (
            <Row>
                <Col md='6'>
                    <ItemList getAllItems={this.props.getAllItems} getItemId={this.getItemId} />
                </Col>
                <Col md='6'>
                    <ItemDetails getSingleItem={this.props.getSingleItem} itemId={this.state.itemId}>
                        <Field label="region" field="region" />
                        <Field label="words" field="words" />
                        <Field label="titles" field="titles" />
                        <Field label="ancestralWeapon" field="ancestralWeapon" />
                    </ItemDetails>
                </Col>
            </Row>
        )
    }
}