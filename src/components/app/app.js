import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import Button from 'reactstrap/lib/Button';
import { Component } from 'react';
import CharactersPage from '../../pages/CharactersPage';
import BooksPage from '../../pages/BooksPage';
import HousesPage from '../../pages/HousesPage'
import FetchService from '../../services/FetchService';
class App extends Component {

    fetchService = new FetchService();
    //state for toggle button to show random character
    state = {
        showRandom: false,
        itemId: null
    }

    //function to help toggle random character
    handleToggle = () => {
        this.setState(state => {
            return {
                showRandom: !state.showRandom
            }
        })
    }

    //get id of clicked item to show in details
    getItemId = (e) => {
        console.log(e.target.getAttribute('name'))
        const clickedId = e.target.id;
        this.setState({
            itemId: clickedId
        })
    }
    render() {
        const { showRandom, itemId } = this.state;
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {/* if showRandom in true state, dont display random char component, if not display it */}
                            {showRandom ? null : <RandomChar />}
                            <Button onClick={this.handleToggle} className="toggle-btn" variant="primary" size="lg">
                                Toggle Character
                            </Button>{' '}
                        </Col>
                    </Row>
                    <CharactersPage getSingleItem={this.fetchService.getSingleCharacter} getAllItems={this.fetchService.getAllCharacters} getItemId={this.getItemId} itemId={itemId} />
                    <BooksPage getSingleItem={this.fetchService.getSingleBook} getAllItems={this.fetchService.getAllBooks} getItemId={this.getItemId} itemId={itemId} />
                    <HousesPage getSingleItem={this.fetchService.getSingleHouse} getAllItems={this.fetchService.getAllHouses} getItemId={this.getItemId} itemId={itemId} />
                </Container>
            </>
        );
    }
};

export default App;