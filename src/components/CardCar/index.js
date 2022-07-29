import { Link } from 'react-router-dom';
import { Card, Container, Row } from 'reactstrap';
import './style.scss';

const CardCar = ({data}) => {
    return (
        <section id='cardcar'>
            <Container>
                <div className='card-wrapper'>
                {
                    !!data.length && (
                        data.map((item) =>(
                            <Card>
                                <div>
                                    <div className='img'>
                                        <img src={!!item.image ? item.image : 'https://img.freepik.com/premium-vector/modern-car-silhouette-illustration-vector-design_500890-234.jpg?w=600'} />
                                    </div>
                                    <h2 className='name'>{ (!!item.name) ? item.name : 'Mobil' }</h2>
                                    <p className='price'>Rp { (!!item.price) ? item.price : '0' } / hari</p>
                                    <p className='desc'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <Link to={`/detailmobil/${item.id}`}>
                                        <button className='btn btn-success'>Pilih Mobil</button>
                                    </Link>
                                </div>
                            </Card>
                        ))
                    )
                }
                </div>
            </Container>
        </section>
    );
}
 
export default CardCar;