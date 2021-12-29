import "./weDo.scss";

function WeDo() {
    return (
       <div className="wedo">
           <div className="wedo__inner">
           <h2>Что мы делаем</h2>
           <video src={'https://youtu.be/4CjqvSfL6SY'} width="600" height="350" controls>
            </video>
            <div className="wedo__inner-text">
            <p className="wedo__inner-text1">
            Орион — бизнес-консалтинговая компания со специализацией на построении облачных систем
            и внедрении передовых цифровых решений для управления взаимоотношениями с клиентами SAP
            Customer Experience (ранее SAP Hybris).
             </p>
            <p className="wedo__inner-text1">
            Будучи золотым партнером SAP и имея огромный отраслевой опыт внедрения и поддержки цифровых
            систем, Орион обладает глубокой экспертизой, которая позволяет формировать для бизнеса дополнительную ценность.    
            </p>                
            </div>
           </div>
           
       </div>
      
    )
}

export default WeDo;
