import Navbar from '../../components/Global/Navbar';
import Banner from "../../components/Global/Banner";
import Footer from "../../components/Global/Footer";
import { navList } from '../../const/staticData';

const SearchCar = () => {
    const props = {
        navList
    }

    return (
        <>
            <Navbar {...props} />
            <Banner />
            <h1>Search Car</h1>
            <Footer />
        </>
    );
}
 
export default SearchCar;