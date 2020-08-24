/* eslint-disable import/no-unresolved */
import React, { useRef } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css?raw';
import ClickButton from '@colbycommunications/colby-click-button-component';
import PropTypes from 'prop-types';
import Style from './soblu.css';

const ColbySwiperSobluTemplate = props => {
    const ref = useRef(null);

    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev();
        }
    };

    const params = { loop: true };

    return (
        <div>
            <Swiper ref={ref} {...params}>
                {props.slides.map(slide => (
                    <div key={slide.content}>{slide.content}</div>
                ))}
            </Swiper>
            <div className={Style.navigationContainer}>
                <ClickButton
                    className="btn"
                    title={
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-chevron-left"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                            />
                        </svg>
                    }
                    onClick={goPrev}
                >
                    Prev
                </ClickButton>
                <ClickButton
                    className="btn"
                    title={
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-chevron-right"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    }
                    onClick={goNext}
                >
                    Next
                </ClickButton>
            </div>
        </div>
    );
};

ColbySwiperSobluTemplate.propTypes = {
    slides: PropTypes.array.isRequired,
};

export default ColbySwiperSobluTemplate;
