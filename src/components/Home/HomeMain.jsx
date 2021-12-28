import React from 'react';
import Banner from '../../page/Sections/Banner/Banner';
import Slider from '../../page/Sections/Slider_Feedback/Slider_Feedback';
import FinansPageOrder from '../Services/Finans/FinansPageOrder';
import '../Services/Finans/finans.scss'
import './home.scss'

function Home_Main() {

    const homeLinks = [
        {
            title: 'Об основателе компании',
            img: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
            text: `Инвестиционный консалтинг Орион позволяет нашим клиентам разработать и обосновать инвестиционную модель инвестиционного проекта, привлечь денежные средства для получения финансирования в развитие существующего бизнеса. Мы предоставляем широкий спектр услуг в управлении инвестиционным проектом, в том числе анализ и консультирование по существующим инвест портфелям, анализ стратегии инвестирования, формировании активов для долгосрочного инвестирования.`,
            link: '',
            btn: 'Нзнать больше',
        },
        {
            title: 'О Компании',
            img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
            text: `Сегодня наша компания Орион занимает лидирующие  позиции на рынке консалтинговых услуг. В своей работе мы используем передовые методы консолидации финансовой  отчетности, а так же применяем международный опыт в создании эффективной бизнес модели, в основе который лежит гибкий подход в формировании проектных команд  под индивидуальные потребности каждого клиента. В партнерстве с компаниями из различных секторов экономики: финансы, складская/транспортная логистика, производство, оптовая/розничная торговля, строительство, а также в сотрудничестве с государственными и муниципальными предприятиями, мы реализуем проекты, которые меняют жизнь людей к лучшему.`,
            link: '',
            btn: 'Нзнать больше',
        },
        {
            title: 'Наша Цель',
            img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            text: `Цель консалтинговой компании «Орион» при предоставлении услуг консалтинга зависит от характера задач, которые заказчик планирует решить. Как правило, это помощь в стратегическом планировании компании и глубоком анализе поведения конкурентов на рынке, бизнес-планирование, внедрение бюджетирование, организация управленческого учета, аудит бизнес-процессов, создание маркетингового плана продвижения продукции.`,
            link: '',
            btn: 'Нзнать больше',
        }
    ]


    return (
        <section id='Home_Main'>
            <Banner />
            <div className="container">
                <div className="finans">

                    {
                        homeLinks.map((element, index) => {
                            return <FinansPageOrder Stitle={element.title} Simg={element.img} Stext={element.text} Slink={element.link} Sbtn={element.btn} key={element.title + index} />
                        })
                    }

                </div>
            </div>
            <Slider />



        </section>
    )
}

export default Home_Main;
