import { Link } from 'react-router-dom';
// import { video } from '../../assets';
import './aboutUs.scss';

function AboutUs() {

    return (
        <section className='about'>
            <div className="container">
                <h2>Что мы делаем</h2>
                <div className="about__first">

                    <div className='about__info'>
                        <video src={'https://youtu.be/4CjqvSfL6SY'} controls>
                        </video>
                    </div>
                    <div className='about__text'>
                        <p>
                            Орион — бизнес-консалтинговая компания со специализацией на построении облачных систем
                            и внедрении передовых цифровых решений для управления взаимоотношениями с клиентами SAP
                            Customer Experience (ранее SAP Hybris).
                            Будучи золотым партнером SAP и имея огромный отраслевой опыт внедрения и поддержки цифровых
                            систем, Орион обладает глубокой экспертизой, которая позволяет формировать для бизнеса дополнительную ценность.
                        </p>
                        <button className="about__button"><Link to='/WeDo'>Узнать больше</Link></button>
                    </div>
                </div>

                <h2>Наша стратегия</h2>
                <div className="about__first">
                    <div className='about__info'>
                        <video src={'https://youtu.be/4CjqvSfL6SY'} controls>
                        </video>
                    </div>
                    <div className='about__text'>
                        <p>
                            Анализируя многомерное пространство — Орион, мы обеспечиваем максимальный охват возможностей для роста.
                            Мы не «кипятим океан» и не третируем менеджмент компании бесчисленными интервью, как это нередко делается
                            при традиционном подходе. Наш подход уникален. Его высокая структурированность обеспечивает определение и экспресс-оценку 10–20 возможных стратегических опций.
                            Будучи золотым партнером SAP и имея огромный отраслевой опыт внедрения и поддержки цифровых
                            систем, Орион обладает глубокой экспертизой, которая позволяет формировать для бизнеса дополнительную ценность.
                        </p>
                        <button className="about__button"><Link to='/Strategy'>Узнать больше</Link></button>
                    </div>
                </div>

            </div>

            <h2>Наша цель</h2>
            <div className="about__goal">
                <h4>о нем все слышали</h4>
                <h4>говорили о вашем бизнесе</h4>
                <h4>выходил на другие страны</h4>
                <h4>Ваш бизнец развивался</h4>
                <h4>максимальный клиентский поток</h4>
                <h4>Был устойчивым</h4>
                <h4>конурентно способным</h4>
                <h6>Ваш бизнец развивался</h6>
                <h6>Ваш бизнец развивался</h6>
                <h6>Ваш бизнец развивался</h6>
                <h6>Ваш бизнец развивался</h6>
                <h6>Ваш бизнец развивался</h6>
                <h6>Ваш бизнец развивался</h6>
                <h6>Ваш бизнец развивался</h6>
                <h6>Ваш бизнец развивался</h6>
                <h6>Ваш бизнец развивался</h6>
            </div>
            <div className="container">
                <div className="about__Text">

                    <p className="about__goalText">
                        Повышать профессионализм и компетенции людей для создания высокоинтеллектуального общества нашей страны
                        Стремление всех слоев современного общества к развитию личностных и профессиональных качеств для достижения успеха во всем.
                        Вывести бизнес нашей страны в мировое сообщество предпринимателей, используя лучший мировой опыт в формировании капитала.
                        Повышать профессионализм и компетенции людей для создания высокоинтеллектуального общества нашей страны
                        Стремление всех слоев современного общества к развитию личностных и профессиональных качеств для достижения успеха во всем.
                        Вывести бизнес нашей страны в мировое сообщество предпринимателей, используя лучший мировой опыт в формировании капитала.

                    </p>
                    {/* <button className="about__button"><Link to='WeDo'>Узнать больше</Link></button> */}
                </div>

            </div>

            <div className="about__specialists">
                <div className="container">
                    <h2>Лучшие специалисты</h2>
                    <div className='about__specialist'>
                        <ul>
                            <li>
                                <Link to='/Spacialist'>
                                    <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='novik' />

                                    <h6>Алекс Новиков</h6>
                                    <p>Старший специалист</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Spacialist'>
                                    <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='novik' />

                                    <h6>Алекс Новиков</h6>
                                    <p>Старший специалист</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Spacialist'>
                                    <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='novik' />

                                    <h6>Алекс Новиков</h6>
                                    <p>Старший специалист</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Spacialist'>
                                    <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='novik' />

                                    <h6>Алекс Новиков</h6>
                                    <p>Старший специалист</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button className="about__button"><Link to='/Spacialist'>Узнать больше</Link></button>
                </div>
            </div>


        </section>
    )
}

export default AboutUs