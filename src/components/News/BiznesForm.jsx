import React from 'react';
import './newsMain.scss';

function BiznesForm() {
    return (
        <section id='biznes'>
            <div className="container">
                <div className="biznes">
                    <h3>Бизнес форум</h3>
                    <div className='biznes__biznesIMG'>
                        <div className="biznes__img">
                            <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        </div>
                        <div className="biznes__img">
                            <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        </div>
                        <div className="biznes__img">
                            <img src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        </div>
                    </div>
                    <div className="biznes__video" >
                        <img src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </div>
                    <p className="biznes__text">
                        Проектное управление
                        Позволяет нам сократить количество переговоров. После первой встречи вместо коммерческого предложения вы получаете меморандум проекта. В нем прописана фиксированная цена, что конкретно вы получаете и каким будет результат, если наши рекомендации будут внедрены.
                        Фиксированная цена
                        Работая с меморандумом, мы четко прописываем цели, задачи, этапы проекта и результат, а соответственно понимаем свои трудозатраты и можем назначать фиксированную цену за конкретное решение.
                        Отраслевые решения
                        Копим опыт в различных отраслях и эффективно используем его в проектах. Предпочитаем экспертность универсальности и подбираем для вас консультантов, с которыми вы говорите на одном языке.
                        Проектное управление
                        Позволяет нам сократить количество переговоров. После первой встречи вместо коммерческого предложения вы получаете меморандум проекта. В нем прописана фиксированная цена, что конкретно вы получаете и каким будет результат, если наши рекомендации будут внедрены.
                        Фиксированная цена
                        Работая с меморандумом, мы четко прописываем цели, задачи, этапы проекта и результат, а соответственно понимаем свои трудозатраты и можем назначать фиксированную цену за конкретное решение.
                        Отраслевые решения
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BiznesForm;
