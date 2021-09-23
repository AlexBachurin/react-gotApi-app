import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import ItemList from '../components/itemList'
import CharDetails from '../components/charDetails'


export default class CharactersPage extends Component {
    render() {
        return (
            <Row>
                <Col md='6'>
                    <ItemList getItemId={this.props.getItemId} />
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.props.itemId} />
                </Col>
            </Row>
        )
    }
}
