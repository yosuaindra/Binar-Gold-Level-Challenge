import './style.scss';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = (props) => {
    const {handleChangeName, handleSearch} = props;
    

    return (
        <section id='searchbar'>
            <Container className="search-bar">
                <Row>
                    <Col lg={10}>
                        <Row>
                            <Col lg={3}>
                                <FormGroup>
                                    <Label for="namaMobil">
                                        Nama Mobil
                                    </Label>
                                    <Input
                                        id="namaMobil"
                                        name="name"
                                        placeholder="Ketik nama/tipe mobil"
                                        onChange={(e) => handleChangeName(e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={3}>
                                <FormGroup>
                                    <Label for="kategoriMobil">
                                        Kategori
                                    </Label>
                                    <Input
                                        id="kategoriMobil"
                                        name="category"
                                        type="select"
                                        disabled
                                    >
                                        <option>
                                            Masukan Kapasitas Mobil
                                        </option>
                                        <option>
                                            1
                                        </option>
                                        <option>
                                            2
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col lg={3}>
                                <FormGroup>
                                    <Label for="hargaMobil">
                                        Harga
                                    </Label>
                                    <Input
                                        id="hargaMobil"
                                        name="price"
                                        type="select"
                                        disabled
                                    >
                                        <option>
                                            Masukan Harga Sewa per Hari
                                        </option>
                                        <option>
                                            1
                                        </option>
                                        <option>
                                            2
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col lg={3}>
                                <FormGroup>
                                    <Label for="statusMobil">
                                        Status
                                    </Label>
                                    <Input
                                        id="statusMobil"
                                        name="status"
                                        type="select"
                                    >
                                        <option value={true}>
                                            True
                                        </option>
                                        <option value={false}>
                                            False
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}>
                        <Row>
                            <FormGroup>
                                <Button className='btn-success' onClick={handleSearch}>
                                    Cari Mobil
                                </Button>
                            </FormGroup>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default SearchBar;