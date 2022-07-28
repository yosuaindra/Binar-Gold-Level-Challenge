import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'reactstrap';
import './style.scss';

const CardCar = ({data}) => {
    return (
        <section id='cardcar'>
            <Container>
                <Row>
                    <div className='card-wrapper d-flex flex-wrap mt-4'>
                    {
                        !!data.length && (
                            data.map((item) =>(
                                <Card>
                                    <div>
                                        <img src={!!item.image ? item.image : 'http://assets.stickpng.com/images/59db69d33752880e93e16efc.png'} />
                                        <h2>{item.name}</h2>
                                        <p>{item.price}</p>
                                        <Link to={`/detailmobil/${item.id}`}>
                                            <button className='btn btn-success'>Pilih Mobil</button>
                                        </Link>
                                    </div>
                                </Card>
                            ))
                        )
                    }
                    </div>
                </Row>
            </Container>
        </section>
    );
}
 
export default CardCar;