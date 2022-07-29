import Navbar from '../../components/Navbar';
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { navList } from '../../const/staticData';
import SearchBar from '../../components/SearchBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardCar from '../../components/CardCar';

const Cars = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [button, setButton] = useState(false);

    useEffect(() => {
        axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car')
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, []);

    // contoh asynchronous
    // useEffect(async() => {
    //     const res = await axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car');
    //     console.log(res);
    // });

    const handleChangeName = (e) =>{
        setName(e.target.value);
    }

    const handleStatus = (e) =>{
        setStatus(e.target.value);
    }

    const handleSearch = () =>{
        // const payload = {
        //     name: name
        // }
        
        // axios.post('https://bootcamp-rent-car.herokuapp.com/admin/car', payload)
        //     .then((res) => console.log(res.data))
        //     .catch((err) => console.log(err));

        const newArr = data.filter(e => (
            e.name === name || e.status === status
        ));
        
        setData(newArr);
        // console.log(newArr);
        setButton(true);
    }

    const props = {
        navList,
        data,
        handleChangeName,
        handleSearch,
        handleStatus,
        button
    }

    return (
        <>
            <Navbar {...props} />
            <Banner />
            <SearchBar {...props} />
            <CardCar {...props} />
            <Footer />
        </>
    );
}
 
export default Cars;