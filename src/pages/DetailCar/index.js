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
import CarDetail from '../../components/CarDetail';

const DetailCar = () => {
    const disableForm = true;
    const [car, setCar] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
        .then((res) => setCar(res.data))
        .catch((err) => console.log(err));
    }, []);

    const props = {
        navList,
        disableForm,
        car
    }

    return (
        <>
            <Navbar {...props} />
            <Banner />
            <SearchBar {...props} />
            <CarDetail {...props} />
            <Footer />
        </>
    );
}
 
export default DetailCar;