import logoThumb from '../assets/images/thumb.svg';
import logoPriceTag from '../assets/images/pricetag.svg';
import logoDate from '../assets/images/date.svg';
import logoBadge from '../assets/images/badge.svg';

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

// Component Home - Testimonial
const testimonial = [
    {
        user: {
            avatar: 'https://cdn.discordapp.com/attachments/986612883859341333/997421101493780590/unknown.png',
            name: 'John Doe',
            age: 32,
            address: 'Bromo'
        },
        rating: 5,
        testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
    },
    {
        user: {
            avatar: 'https://cdn.discordapp.com/attachments/986612883859341333/997421148054753320/unknown.png',
            name: 'Jane Doe',
            age: 20,
            address: 'Bali'
        },
        rating: 5,
        testimonial: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
    },
    {
        user: {
            avatar: 'https://cdn.discordapp.com/attachments/986612883859341333/997421101493780590/unknown.png',
            name: 'Jimmy Doe',
            age: 27,
            address: 'Tangerang'
        },
        rating: 4,
        testimonial: `If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary`
    },
    {
        user: {
            avatar: 'https://cdn.discordapp.com/attachments/986612883859341333/997421148054753320/unknown.png',
            name: 'Vallen Doe',
            age: 22,
            address: 'Bandung'
        },
        rating: 3,
        testimonial: `If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text`
    }
];

export{navList, serviceList, cardWhyUs, testimonial}