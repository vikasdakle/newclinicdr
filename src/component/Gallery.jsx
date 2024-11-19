import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import oneone from '../assets/gallerycss/One.jpg';
import threeone from '../assets/gallerycss/Three.jpg';
import fiveone from '../assets/gallerycss/Five.jpg';
import sixone from '../assets/gallerycss/Six.jpg';
import sevenone from '../assets/gallerycss/Seven.jpg';
import eightone from '../assets/gallerycss/Eight.jpg';

import one from '../assets/galleryimg/oneimg.jpg';
import two from '../assets/galleryimg/two.jpg';
import three from '../assets/galleryimg/three.jpg';
import four from '../assets/galleryimg/four.jpg';
import five from '../assets/galleryimg/five.jpg';
import six from '../assets/galleryimg/six.jpg';
import seven from '../assets/galleryimg/seven.jpg';
import eight from '../assets/galleryimg/eight.jpg';
import nine from '../assets/galleryimg/nine.jpg';
import ten from '../assets/galleryimg/ten.jpg';
import eleven from '../assets/galleryimg/eleven.jpg';
import twel from '../assets/galleryimg/twel.jpg';
import thirteen from '../assets/galleryimg/thirteen.jpg';
import fourteen from '../assets/galleryimg/fourteen.jpg';
import fifteen from '../assets/galleryimg/fifteen.jpg';

import './gallery.css';

const images = [
    { id: 1, src: one, alt: 'Image 1' },
    { id: 2, src: two, alt: 'Image 2' },
    { id: 3, src: three, alt: 'Image 3' },
    { id: 4, src: four, alt: 'Image 4' },
    { id: 5, src: five, alt: 'Image 5' },
    { id: 6, src: six, alt: 'Image 6' },
    { id: 7, src: seven, alt: 'Image 7' },
    { id: 8, src: eight, alt: 'Image 8' },
    { id: 9, src: nine, alt: 'Image 9' },
    { id: 10, src: ten, alt: 'Image 10' },
    { id: 11, src: eleven, alt: 'Image 11' },
    { id: 12, src: oneone, alt: 'Image 12' },
    { id: 13, src: threeone, alt: 'Image 13' },
    { id: 14, src: fiveone, alt: 'Image 14' },
    { id: 15, src: sixone, alt: 'Image 15' },
    { id: 16, src: sevenone, alt: 'Image 16' },
    { id: 17, src: eightone, alt: 'Image 17' },
    { id: 18, src: twel, alt: 'Image 18' },
    { id: 19, src: thirteen, alt: 'Image 19' },
    { id: 20, src: fourteen, alt: 'Image 20' },
    { id: 21, src: fifteen, alt: 'Image 21' },
];


const Gallery = () => {
    return <>
        <div className="col-md-12 pt-4 mt-1 d-flex justify-content-center">
            <h2 style={{ color: "rgb(0, 63, 139)", fontSize: "2rem", marginBottom: "30px" }} className='fw-bold'>Gallery</h2>
        </div>
        <div className="gallery-container mb-5">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="image-wrapper mb-4">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="gallery-image"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
};

export default Gallery;
