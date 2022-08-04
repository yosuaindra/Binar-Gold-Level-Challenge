import { Container, Row } from 'reactstrap';
import './style.scss';
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkHome } from "react-router-dom";
import { useState } from 'react';

const Navbar = ({navList}) => {
    const [showSideBar, setShowSideBar] = useState(false);

    const handleSideBar = () =>{
        console.log('sideBar ganti');
        setShowSideBar(!showSideBar);
    }

    return (
        <header id='navbar' sidebar={ !showSideBar ? 'false' : 'true' }>
            <Container>
                <Row>
                    <div className='wrapper d-flex justify-content-between align-items-center'>
                        <LinkHome to='/'>
                            <div className='logo'></div>
                        </LinkHome>
                        <nav className='d-none d-lg-flex justify-content-between'>
                            {
                                navList.map((item) => (
                                    <LinkScroll to={item.url} offset={-70}>{item.title}</LinkScroll>
                                ))
                            }
                        </nav>
                        <div className='hamburger-menu d-flex d-lg-none flex-column justify-content-between' onClick={handleSideBar}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
     );
}
 
export default Navbar;