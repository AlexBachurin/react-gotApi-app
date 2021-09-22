import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import Button from 'reactstrap/lib/Button';
import { Component } from 'react';

class App extends Component {

    //state for toggle button to show random character
    state = {
        showRandom: false,
        charId: null
    }

    //function to help toggle random character
    handleToggle = () => {
        this.setState(state => {
            return {
                showRandom: !state.showRandom
            }
        })
    }

    //get id of clicked character to show in details
    getCharacterId = (e) => {
        console.log(e.target.id)
        const clickedId = e.target.id;
        this.setState({
            charId: clickedId
        })
    }
    render() {
        const { showRandom, charId } = this.state;
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
                    <Row>
                        <Col md='6'>
                            <ItemList getCharacterId={this.getCharacterId} />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={charId} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

export default App;