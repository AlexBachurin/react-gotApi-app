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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleBook from '../../pages/SingleBook';
import { ErrorPage } from '../../pages/ErrorPage';

class App extends Component {

    fetchService = new FetchService();
    //state for toggle button to show random character
    state = {
        showRandom: false,
    }

    //function to help toggle random character
    handleToggle = () => {
        this.setState(state => {
            return {
                showRandom: !state.showRandom
            }
        })
    }


    render() {
        const { showRandom, itemId } = this.state;
        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Switch >
                            <Route exact path="/">
                                <Row>
                                    <Col lg={{ size: 5, offset: 0 }}>
                                        {/* if showRandom in true state, dont display random char component, if not display it */}
                                        {showRandom ? null : <RandomChar />}
                                        <Button onClick={this.handleToggle} className="toggle-btn" variant="primary" size="lg">
                                            Toggle Character
                                        </Button>{' '}
                                    </Col>
                                </Row>
                            </Route>
                            <Route path="/characters">
                                <CharactersPage getSingleItem={this.fetchService.getSingleCharacter} getAllItems={this.fetchService.getAllCharacters} getItemId={this.getItemId} itemId={itemId} />
                            </Route>
                            <Route path="/houses">
                                <HousesPage getSingleItem={this.fetchService.getSingleHouse} getAllItems={this.fetchService.getAllHouses} getItemId={this.getItemId} itemId={itemId} />
                            </Route>
                            <Route exact path="/books">
                                <BooksPage getSingleItem={this.fetchService.getSingleBook} getAllItems={this.fetchService.getAllBooks} getItemId={this.getItemId} itemId={itemId} />
                            </Route>
                            <Route path="/books/:id" render={({ match }) => {
                                const { id } = match.params;
                                return <SingleBook bookId={id} />
                            }}>
                            </Route>
                            <Route path="*" >
                                <ErrorPage />
                            </Route>
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
};

export default App;