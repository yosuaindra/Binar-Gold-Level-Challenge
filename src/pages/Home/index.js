import Navbar from '../../components/Global/Navbar';
import Footer from '../../components/Global/Footer';
import Banner from '../../components/Global/Banner';
import OurServices from '../../components/Home/OurServices';
import WhyUs from '../../components/Home/WhyUs';
import Testimonial from '../../components/Home/Testimonial';
import Marketing from '../../components/Home/Marketing';
import FAQ from '../../components/Home/FAQ';
import { navList, serviceList, cardWhyUs } from '../../const/staticData';

const Home = () => {
    const props = {
        navList,
        serviceList,
        cardWhyUs
    }

    return (
        <>
            <Navbar {...props} />
            <Banner />
            <OurServices {...props} />
            <WhyUs {...props} />
            <Testimonial />
            <Marketing />
            <FAQ />
            <Footer />
        </>
    );
}
 
export default Home;