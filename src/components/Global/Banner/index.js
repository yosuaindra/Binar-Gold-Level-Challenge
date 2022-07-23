import { Container, Row } from 'reactstrap';
import './style.scss';
import ButtonCTA from '../../Global/Button';

const Banner = () => {
    return (
        <section id='banner'>
            <Container>
                <Row>
                    <div className='wrapper col-12 col-lg-6 d-flex flex-column justify-content-lg-center'>
                        <h1>Sewa & Rental Mobil Terbaik di kawasan Tangerang</h1>
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <div>
                            {/* <a href='' className='btn btn-success'>Mulai Sewa Mobil</a> */}
                            <ButtonCTA />
                        </div>
                    </div>
                </Row>
            </Container>
            <div className='hero-img'></div>
        </section>
     );
}
 
export default Banner;