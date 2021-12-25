// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './banner.scss';

function Banner() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <section className="banner">
            <Slider {...settings}>
                <div className="banner__div">
                    <p>
                        Предлагем Вам профессиональную помощь в развитии, наведении порядка и антикризисном управлении бизнесом.
                        <a href="/">button</a>
                    </p>
                    <img src="https://images.pexels.com/photos/51930/chess-game-chessboard-glass-51930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div className="banner__div">
                    <p>
                        Ведущая российская компания по оптово-розничным продажам автозапчастей для японских автомобилей, с собственной сетью магазинов, сервисных центров и сетью региональных представительств.
                    </p>
                    <img src="https://images.pexels.com/photos/5668452/pexels-photo-5668452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div className="banner__div">
                    <p>
                        Ведущая российская компания по оптово-розничным продажам автозапчастей для японских автомобилей, с собственной сетью магазинов, сервисных центров и сетью региональных представительств.
                    </p>
                    <img src="https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 " alt="" />
                </div>

            </Slider>
        </section>
    )
}

export default Banner
