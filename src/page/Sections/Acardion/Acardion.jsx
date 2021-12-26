import React from 'react';
import PageAcardion from './PageAcardion';
import './acardion.scss';

function Acardion() {

    const products = [
        {
            title: 'Юридический консалтинг',
            service: 'Перечень услуг',
            serviceItem: `   Консультация по налоговому прву /международному праву /
            гражданскому праву / административному праву / по
            трудовому праву . Представительствов суде`,
            term: 'Срок / Дней',
            termDate: 'от 10 до 30 дней',
            price: 'Цена',
            priceNum: 'от  1700 $',
        },
        {
            title: 'Финансовый Консалтинг',
            service: 'Перечень услуг',
            serviceItem: `   Финансовые  консультации
            Реструктуризация финансовой службы
            Постановка и внедрение системы
            бюджетного управления. Организация
            финансового учета. Экспресс-анализ
            системы финансового учета`,
            term: 'Срок / Дней',
            termDate: 'от 10 до 20 дней',
            price: 'Цена',
            priceNum: 'от  1000 $',
        },
        {
            title: 'Управленческий Консалтинг',
            service: 'Перечень услуг',
            serviceItem: `Бизнес планирование. Ьаркетинговые
            исследования. SWOT-анализ.
            Бьюджетирование. Бизнес процессы.
            Стратегия развития. Организационная
             структура.
            Система управления. Система мотивации. 
            Организация управленческого учета`,
            term: 'Срок / Дней',
            termDate: 'от 10 до 30 дней',
            price: 'Цена',
            priceNum: 'от  1300 $',
        },
        {
            title: 'Кадровый Консалтинг',
            service: 'Перечень услуг',
            serviceItem: `Постановка кадрового учета с “нуля”.
            Аутоплейсмент. Карьерный менеджмент.
            Обзор заработанных плат. Кадровый аудит`,
            term: 'Срок / Дней',
            termDate: 'от 10 до 40 дней',
            price: 'Цена',
            priceNum: 'от  1900 $',
        },
    ]
    return (
        <>
            {products.map((product, index) => (
                < PageAcardion
                    key={index}
                    title={product.title}
                    service={product.service}
                    serviceItem={product.serviceItem}
                    term={product.term}
                    termDate={product.termDate}
                    price={product.price}
                    priceNum={product.priceNum}
                />
            ))}
        </>
    )
}

export default Acardion;
