import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to="/">
                    Game of Thrones DB
                </Link>
            </HeaderTitle>
            <HeaderLinks>
                <Link to="/characters">
                    <li>
                        Characters
                    </li>
                </Link>
                <Link to="/houses">
                    <li>
                        Houses
                    </li>
                </Link>
                <Link to="/books">
                    <li>
                        Books
                    </li>
                </Link>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;