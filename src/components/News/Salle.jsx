import React from 'react';
import './newsMain.scss';

function Salle() {
    const salleDateBloc1 = `30.12.2021`;
    const salleDateBloc2Chd1 = `28.12.2021`;
    const salleDateBloc2Chd2 = `22.12.2021`;
    return (
        <section id='salle'>
            <div className='salle__text'>
                <h4>Акция</h4>
                <h4>Акция</h4>
                <h4>Акция</h4>
            </div>
            <div className="container">
                <article className='salle'>
                    <div className="salle__bloc1 block">
                        <h3>20% скидка на</h3>
                        <p>Финансовый Консалтинг</p>
                        <h3>до {salleDateBloc1} г</h3>
                    </div>
                    <div className="salle__bloc2">
                        <div className="salle__bloc-chd block">
                            <h3>20% скидка на</h3>
                            <p>Управленческий  Консалтинг</p>
                            <h3>до {salleDateBloc2Chd1} г</h3>
                        </div>
                        <div className="salle__bloc-chd block">
                            <h3>20% скидка на</h3>
                            <p>Управленческий  Консалтинг</p>
                            <h3>до {salleDateBloc2Chd2} г</h3>
                        </div>

                    </div>
                </article>
            </div>
        </section>
    )
}

export default Salle
