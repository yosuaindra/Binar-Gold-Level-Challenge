import { Container, Row } from 'reactstrap';
import './style.scss';
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkHome } from "react-router-dom";

const Navbar = ({navList}) => {
    return (
        <header>
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
                        <div className='hamburger-menu d-flex d-lg-none flex-column justify-content-between'>
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