import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import OurServices from '../../components/OurServices';
import WhyUs from '../../components/WhyUs';
import Testimonial from '../../components/Testimonial';
import Marketing from '../../components/Marketing';
import FAQ from '../../components/FAQ';
import { navList, serviceList, cardWhyUs, testimonial } from '../../const/staticData';

const Home = () => {
    const showCTA = true;
    const props = {
        navList,
        serviceList,
        cardWhyUs,
        testimonial,
        showCTA
    }

    return (
        <>
            <Navbar {...props} />
            <Banner {...props} />
            <OurServices {...props} />
            <WhyUs {...props} />
            <Testimonial {...props} />
            <Marketing />
            <FAQ />
            <Footer />
        </>
    );
}
 
export default Home;