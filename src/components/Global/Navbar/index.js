import { Container, Row } from 'reactstrap';
import './style.scss';

const Navbar = ({navList}) => {
    return (
        <header>
            <Container>
                <Row>
                    <div className='wrapper d-flex justify-content-between align-items-center'>
                        <div className='logo'></div>
                        <nav className='d-none d-lg-flex justify-content-between'>
                            {
                                navList.map((item) => (
                                    <a href={item.url}>{item.title}</a>
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