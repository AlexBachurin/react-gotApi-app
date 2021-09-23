import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import ItemList from '../components/itemList'
import ItemDetails, { Field } from '../components/itemDetails'


export default class CharactersPage extends Component {

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
                    <ItemDetails getSingleItem={this.props.getSingleItem} itemId={this.state.itemId}>
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
