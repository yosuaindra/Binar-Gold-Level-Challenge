import { Container, Row } from 'reactstrap';
import './style.scss';

const OurServices = ({serviceList}) => {
    return (
        <section id='ourservices'>
            <Container>
                <Row>
                    <div className='wrapper d-flex flex-column flex-lg-row'>
                        <div className='image col-12 col-lg-6 d-flex justify-content-center align-items-center'>
                            <img src='https://cdn.discordapp.com/attachments/986612883859341333/997378688301674506/unknown.png' alt='our services' />
                        </div>
                        <div className='desc col-12 col-lg-6 d-flex justify-content-center align-items-center'>
                            <div>
                                <h2>Best Car Rental for any kind of trip in Tangerang!</h2>
                                <p>Sewa mobil di Tangerang bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                                <ul>
                                    {
                                        serviceList.map((item) => (
                                            <li>{item}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
     );
}
 
export default OurServices;