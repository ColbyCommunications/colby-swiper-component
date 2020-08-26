/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css?raw';
import PropTypes from 'prop-types';
import templates from './templates/templates.js';
import Style from './style.css';

export default class ColbySwiper extends Component {
    static propTypes = {
        /** Array of slide components */
        slides: PropTypes.array.isRequired,

        /** Swiper params */
        params: PropTypes.object,

        /** Custom template */
        template: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

        /** Enable the Swiper auto-height feature */
        autoHeight: PropTypes.bool,

        /** Enable the Swiper dynamic bullets feature */
        dynamicBullets: PropTypes.bool,
    };

    static defaultProps = {
        params: {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        template: 'default',
        dynamicBullets: false,
        autoHeight: false,
    };

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    renderSlider = () => (
        <Swiper
            {...Object.assign(this.props.params, {
                autoHeight: this.props.autoHeight,
                pagination: {
                    dynamicBullets: this.props.dynamicBullets,
                },
            })}
            ref={this.ref}
        >
            {this.props.slides.map((slide, index) => (
                <div key={index} className={`${Style[slide.type]}`}>
                    {slide.content}
                </div>
            ))}
        </Swiper>
    );

    render() {
        if (typeof this.props.template === 'function') {
            const Template = this.props.template;
            return (
                <Template
                    slider={this.renderSlider()}
                    sliderRef={this.ref}
                    {...Object.assign(this.props.params, {
                        autoHeight: this.props.autoHeight,
                        pagination: {
                            dynamicBullets: this.props.dynamicBullets,
                        },
                    })}
                />
            );
        }

        const Template = templates[this.props.template];

        return (
            <div className={`${Style.colbySwiper} colby-swiper-component`}>
                <Template
                    slides={this.props.slides}
                    params={Object.assign(this.props.params, {
                        autoHeight: this.props.autoHeight,
                        pagination: {
                            ...this.props.params.pagination,
                            dynamicBullets: this.props.dynamicBullets,
                        },
                    })}
                />
            </div>
        );
    }
}
