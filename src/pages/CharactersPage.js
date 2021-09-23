import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import ItemList from '../components/itemList'
import ItemDetails, { Field } from '../components/itemDetails'


export default class CharactersPage extends Component {
    render() {
        return (
            <Row>
                <Col md='6'>
                    <ItemList getAllItems={this.props.getAllItems} getItemId={this.props.getItemId} />
                </Col>
                <Col md='6'>
                    <ItemDetails getSingleItem={this.props.getSingleItem} itemId={this.props.itemId}>
                        <Field field='gender' label='gender'></Field>
                        <Field field='born' label='born'></Field>
                        <Field field='died' label='died'></Field>
                        <Field field='culture' label='culture'></Field>
                    </ItemDetails>
                </Col>
            </Row>
        )
    }
}
