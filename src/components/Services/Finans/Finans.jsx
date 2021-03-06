import React from 'react';
import FinansPage from './FinansPage';
import FinansPageOrder from './FinansPageOrder';
import ExpertAdvice from '../../../page/Sections/ExpertAdvice/ExpertAdvice';
import './finans.scss';

function Finans() {

    const finans = [
        {
            title: 'Что такое финансовый консалтинг?',
            img: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            text: `Финансовый консалтинг — это комбинация услуг, направленных на улучшение финансовых показателей предприятия. Специалисты анализируют текущее положение дел в компании и предлагают готовый пакет рекомендаций по решению существующих проблем и утверждению дальнейшего развития.
            Финансовым консалтингом занимаются специальные фирмы, имеющие в штате финансовых консультантов.
            Анализ текущего состояния бизнеса и взгляд со стороны уместны на любом этапе существования компании.
            Сложно переоценить пользу от финансового консалтинга. Он помогает найти эффективные методы управления денежными ресурсами, сделать компанию более управляемой, точнее прогнозировать результаты деятельности и трезво оценивать перспективы развития.
           `,
        },
        {
            title: 'Решаемые нами задачи.',
            img: "https://images.pexels.com/photos/2529179/pexels-photo-2529179.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            text: `Все основные задачи, которые возникают в процессе управления финансами, можно объединить в следующие группы:
            Задачи, связанные с обеспечением финансовыми источниками как кратко-, так и долгосрочной деятельности компании, поиском внутренних и внешних ресурсов, выбором наиболее оптимальной комбинации источников финансирования;
            Задачи, связанные с результативным использованием имеющихся финансов для достижения тактических и стратегических целей бизнеса.`
        }
    ]

    const finansServises = [
        {
            title: 'Финансовый анализ предприятия.',
            img: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            text: `Анализ проводится без углубленного изучения регистров бухгалтерского учета. На основании бухгалтерской отчетности рассчитываются основные показатели деятельности, анализируется структура капитала. Делается вывод о привлекательности Вашей бухгалтерской отчетности и финансовом положении Вашей компании. На основании такого анализа выявляются показатели «ухудшающие» финансовое состояние компании`,
            btn: 'Заказать',
        },
        {
            title: 'Анализ денежного потока.',
            img: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            text: `Анализ текущего состояния бизнеса и взгляд со стороны уместны на любом этапе существования компании. Но есть ситуации, когда привлечение финансового консультанта можно считать необходимым:
            Перед планируемым расширением или выходом на международные рынки. Следует оптимально просчитать все риски, так как такие шаги требуют крупных капиталовложений.`,
            btn: 'Заказать',
        },]

    const finansServises2 = [
        {
            title: 'Финансовый анализ предприятия.',
            img: "https://images.pexels.com/photos/3810762/pexels-photo-3810762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            text: `О качестве услуг компании можно судить по ее сотрудникам. Серьезные консалтинговые фирмы внимательно относятся к подбору кадров. В их числе выпускники MBA, бывшие топ-менеджеры, которые знают бизнес изнутри. И это не универсалы, готовые взяться за любой вид консалтинговых услуг. Каждый из них – профессионал в своей нише.
            О качестве услуг компании можно судить по ее сотрудникам. Серьезные консалтинговые фирмы внимательно относятся к подбору кадров. В их числе выпускники MBA, бывшие топ-менеджеры, которые знают бизнес изнутри. И это не универсалы, готовые взяться за любой вид консалтинговых услуг. Каждый из них – профессионал в своей нише.`,
            btn: 'Заказать',
        },
        {
            title: 'Управление капиталом.',
            img: "https://images.pexels.com/photos/3760089/pexels-photo-3760089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            text: `О качестве услуг компании можно судить по ее сотрудникам. Серьезные консалтинговые фирмы внимательно относятся к подбору кадров. В их числе выпускники MBA, бывшие топ-менеджеры, которые знают бизнес изнутри. И это не универсалы, готовые взяться за любой вид консалтинговых услуг. Каждый из них – профессионал в своей нише.
            О качестве услуг компании можно судить по ее сотрудникам. Серьезные консалтинговые фирмы внимательно относятся к подбору кадров. В их числе выпускники MBA, бывшие топ-менеджеры, которые знают бизнес изнутри. И это не универсалы, готовые взяться за любой вид консалтинговых услуг. Каждый из них – профессионал в своей нише.`,
            btn: 'Заказать',
        }
    ]
    return (
        <section id='Finans'>
            <div className="container">
                <div className="finans">
                    <h2>Услуги финансовой консалтинга</h2>

                    {
                        finans.map((element, index) => {
                            return <FinansPage Stitle={element.title} Simg={element.img} Stext={element.text} key={element.title + index} />
                        })
                    }

                </div>
            </div>
            <div className="container">
                <div className="finans">

                    {
                        finansServises.map((element, index) => {
                            return <FinansPageOrder Stitle={element.title} Simg={element.img} Stext={element.text} Sbtn={element.btn} key={element.title + index} />
                        })
                    }
                </div>
            </div>
            <ExpertAdvice />
            <div className="container">
                <div className="finans">
                    {
                        finansServises2.map((element, index) => {
                            return <FinansPageOrder Stitle={element.title} Simg={element.img} Stext={element.text} Sbtn={element.btn} key={element.title + index} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Finans;
