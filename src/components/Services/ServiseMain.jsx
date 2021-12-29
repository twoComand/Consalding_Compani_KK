import React from 'react';
import ServisePage from './ServisePage';
import ExpertAdvice from '../../page/Sections/ExpertAdvice/ExpertAdvice';
import './serviseMain.scss';

function ServiseMain({ children }) {

    const servises = [
        {
            title: 'Финансовый Консалтинг',
            img: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            text: `Финансовый консалтинг – это комплекс услуг, включающих в себя аудит
                    финансовой отчетности и детальный анализ финансово-экономической деятельности предприятия,
                    проводится ежегодно совместно с главным бухгалтером и финансовым директором компании.`,
            link: 'Finans',

        },
        {
            title: 'Кадровый консалтинг',
            img: "https://images.pexels.com/photos/5717309/pexels-photo-5717309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            text: `Кадровый консалтинг – это вид предпринимательской деятельности, напрямую связанный с решением задач руководителя организации, в области отбора персонала, его обучение и адаптации, в целях увеличения эффективности использования трудовых ресурсов. `,
            link: 'Personnel',
        }]

    const servises2 = [
        {
            title: 'Юридический Консалтинг',
            img: "https://images.pexels.com/photos/7841804/pexels-photo-7841804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            text: `Юридический консалтинг – сравнительно новая, но широко востребованная услуга, позволяющая компания получать  качественное обслуживание правового характера, так как законодательство нашей страны имеет свойство постоянно меняться. Консультации юриста, приоритетом деятельности которого является достижение `,
            link: 'Lawyer',
        },
        {
            title: 'Управленческий консалтинг',
            img: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            text: `Управленческий консалтинг – это профессиональная помощь собственникам(руководителям) компаний, направленная на совершенствование форм управления и ведения бизнеса, посредством систематизации бизнес-процессов через внедрение автоматизированных систем бизнес анализа. `,
            link: 'Management',
        }
    ]


    return (
        <section id='ServiseMain'>
            <div className="container">
                <div className="servise">
                    <h2>Услуги Бизнес Косалтинга</h2>

                    {
                        servises.map((element, index) => {
                            return <ServisePage Stitle={element.title} Simg={element.img} Stext={element.text} Slink={element.link} key={element.title + index} />
                        })
                    }

                </div>
            </div>
            <ExpertAdvice />
            <div className="container">
                <div className="servise">
                    {
                        servises2.map((element, index) => {
                            return <ServisePage Stitle={element.title} Simg={element.img} Stext={element.text} Slink={element.link} key={element.title + index} />
                        })
                    }
                </div>
            </div>
            <div >{children}</div>
        </section>
    )
}

export default ServiseMain;
