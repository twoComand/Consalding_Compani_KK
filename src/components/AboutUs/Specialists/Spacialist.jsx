import React from 'react'
import SpacialistPage from './SpacialistPage';
import ExpertAdvice from '../../../page/Sections/ExpertAdvice/ExpertAdvice';
import './spacialist.scss'

function Spacialist() {

    const members = [
        {
            img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            name: 'Алекс Новиков',
            post: 'Старший специалист',
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dignissimos eveniet numquam animi laudantium, necessitatibus nam magnam. Consectetur odit pariatur dolorem eos quidem, dolorum porro voluptatum architecto vel animi magnam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dignissimos eveniet numquam animi laudantium, necessitatibus nam magnam. Consectetur odit pariatur dolorem eos quidem, dolorum porro voluptatum architecto vel animi magnam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dignissimos eveniet numquam animi laudantium, necessitatibus nam magnam. Consectetur odit pariatur dolorem eos quidem, dolorum porro voluptatum architecto vel animi magnam.`
        },
        {
            img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            name: 'Алекс Новиков',
            post: 'Старший специалист',
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dignissimos eveniet numquam animi laudantium, necessitatibus nam magnam. Consectetur odit pariatur dolorem eos quidem, dolorum porro voluptatum architecto vel animi magnam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dignissimos eveniet numquam animi laudantium, necessitatibus nam magnam. Consectetur odit pariatur dolorem eos quidem, dolorum porro voluptatum architecto vel animi magnam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dignissimos eveniet numquam animi laudantium, necessitatibus nam magnam. Consectetur odit pariatur dolorem eos quidem, dolorum porro voluptatum architecto vel animi magnam.`
        },
        {
            img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            name: 'Алекс Новиков',
            post: 'Старший специалист',
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dignissimos eveniet numquam animi laudantium, necessitatibus nam magnam. Consectetur odit pariatur dolorem eos quidem, dolorum porro voluptatum architecto vel animi magnam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dignissimos eveniet numquam animi laudantium, necessitatibus nam magnam. Consectetur odit pariatur dolorem eos quidem, dolorum porro voluptatum architecto vel animi magnam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dignissimos eveniet numquam animi laudantium, necessitatibus nam magnam. Consectetur odit pariatur dolorem eos quidem, dolorum porro voluptatum architecto vel animi magnam.`
        },
        {
            img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            name: 'Алекс Новиков',
            post: 'Старший специалист',
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dignissimos eveniet numquam animi laudantium, necessitatibus nam magnam. Consectetur odit pariatur dolorem eos quidem, dolorum porro voluptatum architecto vel animi magnam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dignissimos eveniet numquam animi laudantium, necessitatibus nam magnam. Consectetur odit pariatur dolorem eos quidem, dolorum porro voluptatum architecto vel animi magnam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dignissimos eveniet numquam animi laudantium, necessitatibus nam magnam. Consectetur odit pariatur dolorem eos quidem, dolorum porro voluptatum architecto vel animi magnam.`
        }
    ]
    return (
        <section className='spacialist'>
            {
                members.map((member, index) => {
                    return <SpacialistPage Img={member.img} Name={member.name} Post={member.post} Text={member.text} key={index + member.name} />
                })
            }

            <ExpertAdvice />

        </section>
    )
}

export default Spacialist
