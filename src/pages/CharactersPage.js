import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import ItemList from '../components/itemList'
import CharDetails, { Field } from '../components/charDetails'


export default class CharactersPage extends Component {
    render() {
        return (
            <Row>
                <Col md='6'>
                    <ItemList getAllItems={this.props.getAllItems} getItemId={this.props.getItemId} />
                </Col>
                <Col md='6'>
                    <CharDetails itemId={this.props.itemId}>
                        <Field field='gender' label='gender'></Field>
                        <Field field='born' label='born'></Field>
                    </CharDetails>
                </Col>
            </Row>
        )
    }
}
