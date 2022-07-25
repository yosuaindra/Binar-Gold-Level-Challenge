import React from "react";
import { Container, Row, Card } from 'reactstrap';
import './style.scss';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
    const slider = React.useRef();
    
    const settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id='testimonial'>
            <Container fluid className='p-0'>
                <Row>
                    <div className='wrapper d-flex flex-column justify-content-start'>
                        <div className='title text-center'>
                            <h2>Testimonial</h2>
                            <p>Berbagai review positif dari para pelanggan kami</p>
                        </div>
                    </div>
                    <div className='wrapper-slider'>
                            <Slider ref={slider} {...settings}>
                                <Card>
                                    <div className='image col-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center'>
                                        <img src='https://cdn.discordapp.com/attachments/986612883859341333/997421101493780590/unknown.png' alt='testimonial' />
                                    </div>
                                    <div className='desc col-12 col-md-8 col-lg-8 d-flex justify-content-center'>
                                        <div className='rating'>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                        </div>
                                        <h3>&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod&rdquo;</h3>
                                        <p>John Dee 32, Bromo</p>
                                    </div>
                                </Card>
                                <Card>
                                    <div className='image col-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center'>
                                        <img src='https://cdn.discordapp.com/attachments/986612883859341333/997421148054753320/unknown.png' alt='testimonial' />
                                    </div>
                                    <div className='desc col-12 col-md-8 col-lg-8 d-flex justify-content-center'>
                                        <div className='rating'>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                        </div>
                                        <h3>&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod&rdquo;</h3>
                                        <p>John Dee 32, Bromo</p>
                                    </div>
                                </Card>
                                <Card>
                                    <div className='image col-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center'>
                                        <img src='https://cdn.discordapp.com/attachments/986612883859341333/997421101493780590/unknown.png' alt='testimonial' />
                                    </div>
                                    <div className='desc col-12 col-md-8 col-lg-8 d-flex justify-content-center'>
                                        <div className='rating'>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                        </div>
                                        <h3>&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod&rdquo;</h3>
                                        <p>John Dee 32, Bromo</p>
                                    </div>
                                </Card>
                                <Card>
                                    <div className='image col-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center'>
                                        <img src='https://cdn.discordapp.com/attachments/986612883859341333/997421148054753320/unknown.png' alt='testimonial' />
                                    </div>
                                    <div className='desc col-12 col-md-8 col-lg-8 d-flex justify-content-center'>
                                        <div className='rating'>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                            <span className='fa fa-star checked'></span>
                                        </div>
                                        <h3>&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod&rdquo;</h3>
                                        <p>John Dee 32, Bromo</p>
                                    </div>
                                </Card>
                            </Slider>
                            
                            <div className='nav-slider d-flex justify-content-center'>
                                <span onClick={() => slider.current.slickPrev()} className='fa-solid fa-angle-left'></span>
                                <span onClick={() => slider.current.slickNext()} className='fa-solid fa-angle-right'></span>
                            </div>
                        </div>
                </Row>
            </Container>
        </section>
     );
}
 
export default Testimonial;