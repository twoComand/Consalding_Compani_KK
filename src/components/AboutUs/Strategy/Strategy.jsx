import React from 'react';
import "./strategy.scss";

function Strategy() {
    return (
        <div className='strategy'> 
            <div className='strategy__inner'>
                <h2>Наша стратегия</h2>
                <img src={'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80 alt="strategy"'}/>
            </div>

            <div className='strategy__inner-title'>
                <h3>Продвижение бизнеса продажи ваших продуктов</h3>
            </div>

            <div className='strategy__inner-text'>
               <div className='strategy__inner-text1'>
               <p>
                Цель консалтинговой компании «Орион» при предоставлении услуг консалтинга зависит от характера задач, которые заказчик планирует решить. Как правило, это помощь в стратегическом планировании компании и глубоком анализе поведения конкурентов на рынке, бизнес-планирование, внедрение бюджетирование, организация управленческого учета, аудит бизнес-процессов, создание маркетингового плана продвижения продукции.
                </p>
               </div>

               <div className='strategy__inner-text2'>
               <p>
                   В своей работе мы используем следующую последовательность действий и применяем основные этапы:
                   <ul>
                       <li> обследование организации(положение на рынке, сильные и слабые стороны);</li>
                       <li> глубокий анализ финансово-хозяйственной деятельности предприятия;</li>
                       <li>Систематизация бизнеса</li>
                       <li>Аудит бизнес процессов</li>
                       <li>Выдача рекомендаций по улучшению ситуации</li>
                       
                   </ul>

               </p>
               </div>
            </div>
        </div>
    )
}

export default Strategy
