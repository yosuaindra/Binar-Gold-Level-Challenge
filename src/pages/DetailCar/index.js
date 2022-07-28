import Navbar from '../../components/Navbar';
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { navList } from '../../const/staticData';
import SearchBar from '../../components/SearchBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardCar from '../../components/CardCar';
import { Card, Col, Container, Row } from 'reactstrap';
import { useParams } from "react-router-dom";

const DetailCar = () => {
    const [car, setCar] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
        .then((res) => setCar(res.data))
        .catch((err) => console.log(err));
    }, []);

    const props = {
        navList
    }

    return (
        <>
            <Navbar {...props} />
            <Banner />
            <SearchBar />
            <Container>
                <Row>
                {
                    !!Object.keys(car).length && (
                        <>
                            <img src={!!car.image ? car.image : 'http://assets.stickpng.com/images/59db69d33752880e93e16efc.png'} className='w-50'/>
                            <h1>detail mobil {car.name}</h1>
                            <h2>{car.category}</h2>
                        </>
                    )
                }
                </Row>
            </Container>
            <Footer />
        </>
    );
}
 
export default DetailCar;