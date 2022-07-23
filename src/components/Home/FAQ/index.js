import { Container, Row, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
import './style.scss';

const FAQ = () => {
    return (
        <section id='faq'>
            <Container>
                <Row>
                    <div className='wrapper d-flex flex-column flex-lg-row'>
                        <div className='title col-12 col-lg-5 d-flex justify-content-start flex-column'>
                            <h2>Frequently Asked Question</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className='accordion-wrapper col-12 col-lg-7 d-flex justify-content-center align-items-center'>
                        
                            <UncontrolledAccordion defaultOpen="0">
                                <AccordionItem>
                                    <AccordionHeader targetId="1">
                                        Apa saja syarat yang dibutuhkan?
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="2">
                                        Berapa hari minimal sewa mobil lepas kunci?
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="3">
                                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="4">
                                        Apakah Ada biaya antar-jemput?
                                    </AccordionHeader>
                                    <AccordionBody accordionId="4">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="5">
                                        Bagaimana jika terjadi kecelakaan
                                    </AccordionHeader>
                                    <AccordionBody accordionId="5">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </AccordionBody>
                                </AccordionItem>
                            </UncontrolledAccordion>

                        </div>
                    </div>
                </Row>
            </Container>
        </section>
     );
}
 
export default FAQ;