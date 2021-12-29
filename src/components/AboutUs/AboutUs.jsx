import { Link } from 'react-router-dom';
// import { video } from '../../assets';
import './aboutUs.scss';

function AboutUs() {
    
    return (
        <div className='about'>
            <div className='about__first'>
                <h1>Что мы делаем:</h1>
                    <div className='about__info'>
                        <div className='about__video'>
                            <video src={'https://youtu.be/4CjqvSfL6SY'} width="600" height="350" controls>
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
                            <Link to='wedo'><button className="button">Узнать больше</button></Link>
                        </div>
                    </div>
                

               <div className='about__second'>
                   <h1>Наша стратегия</h1>
                   
                   <div className='about__strategy'>
                        <div className='about__text'>
                            <p>
                            Анализируя многомерное пространство — Орион, мы обеспечиваем максимальный охват возможностей для роста. Мы не «кипятим океан» и не третируем менеджмент компании бесчисленными интервью, как это нередко делается при традиционном подходе. Наш подход уникален. Его высокая структурированность обеспечивает определение и экспресс-оценку 10–20 возможных стратегических опций.    
                            </p>
                            <Link to='strategy'><button className='button'>Узнать больше</button></Link>
                        </div>
                        <div className='about__video'>
                                <video src={'https://youtu.be/4CjqvSfL6SY'} width="600" height="350" controls>
                                </video>
                        </div>
                   </div>
               </div>
                  
               <div className='about__third'>
                   
                   <div className='about__mission'>
                       <h2>Миссия</h2>
                       <p>Повышать профессионализм и компетенции людей для создания высокоинтеллектуального общества нашей страны</p>
                   </div>
                   <div className='about__mission'><h2>Ценности</h2>
                   <p>Стремление всех слоев современного общества к развитию личностных и профессиональных качеств для достижения успеха во всем.</p>
                   </div>
                   <div className='about__mission'>
                       <h2>Принципы</h2>
                       <p>Вывести бизнес нашей страны в мировое сообщество предпринимателей, используя лучший мировой опыт в формировании капитала.</p>
                   </div>
                   
               </div>
               
               <div className='fourth'>
                   <h1>Лучшие специалисты</h1>
                   <div className='about_specialist'>
                       <ul className='about__list'>
                            <li>
                                
                                    <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='novik'/>
                                
                                <h6>Алекс Новиков</h6>
                                <p>Старший специалист</p>
                            </li>
                            <li>
                                
                                    <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='novik'/>
                                
                                <h6>Алекс Новиков</h6>
                                <p>Старший специалист</p>
                            </li>
                            <li>
                                
                                    <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='novik'/>
                                
                                <h6>Алекс Новиков</h6>
                                <p>Старший специалист</p>
                            </li>
                            <li>
                                
                                    <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='novik'/>
                               
                                <h6>Алекс Новиков</h6>
                                <p>Старший специалист</p>
                            </li>
                            <li>
                                
                                    <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='novik'/>
                                
                                <h6>Алекс Новиков</h6>
                                <p>Старший специалист</p>
                            </li>
                       </ul>
                   </div>
                   <Link to='specialists'><button className='third-button'>Узнать больше</button></Link>
               </div>
            </div>
            
        </div>
        
    )
}

export default AboutUs;
