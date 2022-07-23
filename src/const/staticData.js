import logoThumb from '../components/Home/WhyUs/Images/thumb.svg';
import logoPriceTag from '../components/Home/WhyUs/Images/pricetag.svg';
import logoDate from '../components/Home/WhyUs/Images/date.svg';
import logoBadge from '../components/Home/WhyUs/Images/badge.svg';

// Global
const navList = [
    {
    title: 'Our Services',
    url: '/#ourservices'
    },
    {
    title: 'Why Us',
    url: '/#whyus'
    },
    {
    title: 'Testimonial',
    url: '/#testimonial'
    },
    {
    title: 'FAQ',
    url: '/#faq'
    }
];

// Component Home - Our Services
const serviceList = [
    'Sewa Mobil Dengan Supir di Bali 12 Jam',
    'Sewa Mobil Lepas Kunci di Bali 24 Jam',
    'Sewa Mobil Jangka Panjang Bulanan',
    'Gratis Antar - Jemput Mobil di Bandara',
    'Layanan Airport Transfer / Drop In Out'
];

// Component Home - Why Us
const cardWhyUs = [
    {
        logo: logoThumb,
        title: 'Mobil Lengkap',
        desc: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
    },
    {
        logo: logoPriceTag,
        title: 'Harga Murah',
        desc: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
    },
    {
        logo: logoDate,
        title: 'Layanan 24 Jam',
        desc: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
    },
    {
        logo: logoBadge,
        title: 'Sopir Profesional',
        desc: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
    },
];

export{navList, serviceList, cardWhyUs}