import './style.scss';
import { Container, Label, Input, Button } from 'reactstrap';

const SearchBar = (props) => {
    const {handleChangeName, handleSearch, handleStatus,  disableForm, button} = props;
    
    return (
        <section id='searchbar'>
            <Container>
                <div className='search-wrapper'>
                    <div className={!!disableForm || !!button === true ? "search-title" : "d-none"}>
                        <h2>Pencarianmu</h2>
                    </div>
                    <div className='search-input-wrapper'>
                        <div className='search-input'>
                            <div>
                                <Label for="namaMobil">
                                    Nama Mobil 
                                </Label>
                                <Input
                                    id="namaMobil"
                                    name="name"
                                    placeholder="Ketik nama/tipe mobil"
                                    onChange={(e) => handleChangeName(e)}
                                    disabled={!!disableForm || !!button === true ? 'disabled' : ''}
                                />
                            </div>
                        </div>
                        <div className='search-input'>
                            <div>
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
                            </div>
                        </div>
                        <div className='search-input'>
                            <div>
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
                            </div>
                        </div>
                        <div className='search-input'>
                            <div>
                                <Label for="statusMobil">
                                    Status
                                </Label>
                                <Input
                                    id="statusMobil"
                                    name="status"
                                    type="select"
                                    onChange={(e) => handleStatus(e)}
                                    disabled={!!disableForm || !!button === true ? 'disabled' : ''}
                                >
                                    <option value={true}>
                                        True
                                    </option>
                                    <option value={false}>
                                        False
                                    </option>
                                </Input>
                            </div>
                        </div>
                        <div className={!!disableForm ? 'd-lg-none' : ''}>
                            <div className='search-button'>
                                <Button className={(!!button === true) ? 'btn-edit' : 'btn-success'} onClick={handleSearch}>
                                    {(!!button === true) ? 'Edit' : 'Cari Mobil'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
 
export default SearchBar;