import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.scss';

function AboutCompany() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className='aboutCompany'>
            <Slider {...settings}>
                <div className="banner__div">
                    <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <div className="banner__div">

                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <div className="banner__div">

                    <img src="https://images.unsplash.com/photo-1472148439583-1f4cf81b80e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80 " alt="" />
                </div>

            </Slider>
            <div className="container">
                <div className="aboutCompany__item">
                    <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit, reprehenderit placeat
                        fuga vero nemo nisi dolor architecto praesentium quos id repellendus nam deleniti ex suscipit,
                        iure sunt voluptatem neque dolore eaque. Laboriosam consequatur fugiat, at omnis aut pariatur nobis
                        aliquid animi quibusdam sint fuga maxime ducimus. Officiis numquam voluptatem possimus officia accusantium.
                        Facere impedit, ratione aliquid mollitia corporis pariatur. Magni voluptas facilis optio necessitatibus ad
                        maiores deserunt harum quis laboriosam unde dolor perferendis eligendi sequi possimus nobis molestiae, mollitia
                        deleniti ullam, accusamus suscipit, omnis nihil? Sed vitae nesciunt odio ea, eligendi consectetur sit!
                        Reprehenderit, exercitationem omnis? Quaerat temporibus voluptatum nulla eveniet autem dignissimos? Omnis
                        quibusdam iusto ad, ipsa id odit hic iste sint dicta vitae recusandae quia doloribus eius voluptas similique
                        sequi rem obcaecati facere ab eveniet, ipsum quidem magni aut consequuntur. Tenetur ducimus rem hic inventore
                        earum consequatur voluptas minima veritatis sapiente nesciunt quo laudantium quae, rerum eos assumenda iusto,
                        voluptatem eum, incidunt temporibus natus impedit. Adipisci a voluptatum eos dolor totam cumque et atque itaque
                        quas voluptate, id eaque modi explicabo molestias rerum? Autem exercitationem incidunt nesciunt voluptatum ducimus
                        accusamus, maxime expedita odit, dicta mollitia a corrupti accusantium maiores soluta earum aut quaerat, ex
                        explicabo quis provident.
                    </p>
                </div>
            </div>


        </section>
    )
}

export default AboutCompany
