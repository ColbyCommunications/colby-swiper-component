/* eslint-disable react/display-name */
/* eslint-disable import/no-unresolved */
import React, { useRef } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css?raw';
import PropTypes from 'prop-types';
import Style from './style.css';

const ColbySwiperDefaultTemplate = props => {
    const ref = useRef(null);
    return (
        <Swiper {...props.params} ref={ref}>
            {props.slides.map(slide => (
                <div key={slide.content} className={`${Style[slide.type]}`}>
                    {slide.content}
                </div>
            ))}
        </Swiper>
    );
};

ColbySwiperDefaultTemplate.propTypes = {
    params: PropTypes.object.isRequired,
    slides: PropTypes.array.isRequired,
};

export default ColbySwiperDefaultTemplate;
