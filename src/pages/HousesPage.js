import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import ItemList from '../components/itemList'
import ItemDetails, { Field } from '../components/itemDetails'


export default class BooksPage extends Component {
    render() {
        return (
            <Row>
                <Col md='6'>
                    <ItemList getAllItems={this.props.getAllItems} getItemId={this.props.getItemId} />
                </Col>
                <Col md='6'>
                    <ItemDetails getSingleItem={this.props.getSingleItem} itemId={this.props.itemId}>
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