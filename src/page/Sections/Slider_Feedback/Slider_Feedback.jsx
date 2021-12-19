import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3 } from "gsap";


import leftArrow from "./images/arrow_left.svg";
import rightArrow from "./images/arrow_raight.svg";
import biznes1 from "./images/biznes-1.jpg";
import biznes2 from "./images/biznes-2.jpg";
import biznes3 from "./images/biznes-3.jpg";

import './slider_Feedback.scss';


const testimonials = [
    {
        id: 1,
        name: "Shoro",
        title: "Супер...",
        image: biznes1,
        quote:
            `Воспользовались услугами ORION, а именно заказали у них индивидуальную разработку документов по ПБ и ОТ.
             Работу свою сотрудники компании выполнили ответственно, быстро и качественно.
              Документы предоставили в точно оговоренный срок. Документы по охране труда также включали и подробные инструкции.`
    },
    {
        id: 2,
        name: "Mark Jacobs",
        title: "Просто , Спасибо!",
        image: biznes2,
        quote:
            `Спасибо бизнес-проекту «Благополучие» за продуктивную консультацию. Мне понравилось все, что мы с вами обсуждали. 
            У вас самые лучшие аналитики, который отлично разбираются в инвестициях.`
    },
    {
        id: 3,
        name: "Lisa Bearings",
        title: "Хорошо работают",
        image: biznes3,
        quote:
            `Обращалась в ORION не один раз! Привлекает доброжелательный персонал, скорость и качество работ, 
            приемлемый уровень цен. Буду обращаться и впредь.`
    }
];

function Slider() {
    const screenWidth = window.screen.width;
    console.log(screenWidth);
    let imageWidth = 0;
    if (screenWidth === 375 || screenWidth <= 1024) {
        imageWidth = 380;
    } else if (screenWidth === 1025 || screenWidth <= 1220) {
        imageWidth = 480;
    } else if (screenWidth === 1221 || screenWidth > 1221) {
        imageWidth = 580;
    }


    let imageList = useRef(null);
    let testimonialList = useRef(null);


    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false
    });


    useEffect(() => {
        TweenLite.to(testimonialList.children[0], 0, {
            opacity: 1
        });
    }, [])


    const slideLeft = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {
            x: -imageWidth * multiplied,
            ease: Power3.easeOut
        });
    };


    const slideRight = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {
            x: imageWidth * multiplied,
            ease: Power3.easeOut
        });
    };

    const scale = (index, duration) => {
        TweenLite.from(imageList.children[index], duration, {
            scale: 1.2,
            ease: Power3.easeOut
        });
    };


    const fadeOut = (index, duration) => {
        TweenLite.to(testimonialList.children[index], duration, {
            opacity: 0
        });
    };
    const fadeIn = (index, duration) => {
        TweenLite.to(testimonialList.children[index], duration, {
            opacity: 1,
            delay: 1
        });
    };

    const nextSlide = () => {
        if (imageList.children[0].classList.contains("active")) {
            setState({ isActive1: false, isActive2: true })

            slideLeft(0, 1);
            slideLeft(1, 1);
            scale(1, 1);
            fadeOut(0, 1);
            fadeIn(1, 1);

        } else if (imageList.children[1].classList.contains("active")) {
            setState({ isActive2: false, isActive3: true })

            //Image transition
            slideRight(0, 1);
            slideLeft(1, 1, 2);
            slideLeft(2, 1, 2);
            scale(2, 1);
            //content transition
            fadeOut(1, 1);
            fadeIn(2, 1);

        } else if (imageList.children[2].classList.contains("active")) {
            setState({ isActive3: false, isActive1: true })

            slideLeft(2, 1, 3);
            slideLeft(0, 1, 0);
            slideLeft(1, 0, 0);
            scale(0, 1);
            //content transition
            fadeOut(2, 1);
            fadeIn(0, 1);
        }
    }

    const prevSlide = () => {
        if (imageList.children[0].classList.contains("active")) {
            setState({ isActive1: false, isActive3: true });
            //Image transition
            slideLeft(2, 0, 3);
            slideLeft(2, 1, 2);
            scale(2, 1);
            slideRight(0, 1);
            slideRight(1, 1);
            //content transtion
            fadeOut(0, 1);
            fadeIn(2, 1);
        } else if (imageList.children[1].classList.contains("active")) {
            setState({ isActive2: false, isActive1: true });
            //Image transition
            slideLeft(0, 0);
            slideRight(0, 1, 0);
            slideRight(1, 1, 0);
            slideRight(2, 1, 2);
            scale(0, 1);
            //content transtion
            fadeOut(1, 1);
            fadeIn(0, 1);
        } else if (imageList.children[2].classList.contains("active")) {
            setState({ isActive2: true, isActive3: false });
            slideLeft(2, 1);
            slideLeft(1, 0, 2);
            slideLeft(1, 1);
            scale(1, 1);
            //content transtion
            fadeOut(2, 1);
            fadeIn(1, 1);
        }
    };



    return (
        <section id='feedback'>
            <h3 className="feedback-title">Отзыв клиентов</h3>
            <div className="feedback">
                <div className="feedback__ch">
                    <div onClick={prevSlide} className="feedback__arrows feedback__left">
                        <img src={leftArrow} alt="left arrow" />
                    </div>

                    <div className="feedback__inner">
                        <div className="feedback__T-image">
                            <ul ref={el => (imageList = el)}>
                                <li className={state.isActive1 ? 'active' : ''}>
                                    <img src={testimonials[0].image} alt={testimonials[0].id} />

                                </li>
                                <li className={state.isActive2 ? 'active' : ''}>
                                    <img src={testimonials[1].image} alt={testimonials[1].id} />

                                </li>
                                <li className={state.isActive3 ? 'active' : ''}>
                                    <img src={testimonials[2].image} alt={testimonials[2].id} />

                                </li>
                            </ul>
                        </div>

                        <div className="feedback__T-content">
                            <ul ref={el => (testimonialList = el)}>
                                <li className={state.isActive1 ? 'active' : ''}>
                                    <div className="feedback__T-content__inner">
                                        <p className="feedback__T-content__quote">
                                            {testimonials[0].quote}
                                        </p>
                                        <h3 className="feedback__T-content__name">
                                            {testimonials[0].name}
                                        </h3>
                                        <h4 className="feedback__T-content__title">
                                            {testimonials[0].title}
                                        </h4>
                                    </div>
                                </li>
                                <li className={state.isActive2 ? 'active' : ''}>
                                    <div className="feedback__T-content__inner">
                                        <p className="feedback__T-content__quote">
                                            {testimonials[1].quote}
                                        </p>
                                        <h3 className="feedback__T-content__name">
                                            {testimonials[1].name}
                                        </h3>
                                        <h4 className="feedback__T-content__title">
                                            {testimonials[1].title}
                                        </h4>
                                    </div>
                                </li>
                                <li className={state.isActive3 ? 'active' : ''}>
                                    <div className="feedback__T-content__inner">
                                        <p className="feedback__T-content__quote">
                                            {testimonials[2].quote}
                                        </p>
                                        <h3 className="feedback__T-content__name">
                                            {testimonials[2].name}
                                        </h3>
                                        <h4 className="feedback__T-content__title">
                                            {testimonials[2].title}
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div onClick={nextSlide} className="feedback__arrows feedback__right">
                        <img src={rightArrow} alt="right arrow" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider

