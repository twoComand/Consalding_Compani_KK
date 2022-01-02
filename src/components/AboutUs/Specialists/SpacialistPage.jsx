import React from 'react'
import './spacialist.scss'

function SpacialistPage(props) {
    return (
        <div className="container">
            <div className="spacialist__member">
                <div className="spacialist__sosLin">

                    <img src={props.Img} alt='novik' />

                    <h6>{props.Name}</h6>
                    <p className="spacialist__post">{props.Post}</p>
                </div>
                <div className="spacialist__text">
                    <p>{props.Text}</p>
                </div>
            </div>
        </div>
    )
}

export default SpacialistPage
