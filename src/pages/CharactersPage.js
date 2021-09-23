import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import ItemList from '../components/itemList'
import ItemDetails, { Field } from '../components/itemDetails'
import Error from '../components/Error'


export default class CharactersPage extends Component {

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
