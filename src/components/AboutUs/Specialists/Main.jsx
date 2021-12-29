import "./main.scss";
import { FaRegStar } from 'react-icons/fa';
import ExpertAdvice from "../../ExpertAdvice/ExpertAdvice";

// const specialist = [
// 		{
//             imgUrl:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
//             name: 'Антон Алексеев',
//             position: 'Главный специалист'
// 	    },
//         {
//             imgUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//             name: 'Кирилл Сафонов',
//             position: 'Главный бухгалтер'
//         },
//         {
//             imgUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//             name: 'Эсен Саидов',
//             position: 'Финансовый консультант'
//         },
//         {
//             imgUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//             name: 'Лара Ионова',
//             position: 'Специалист по продажам'
//         },
//         {
//             imgUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//             name: 'Ася Каирова',
//             position: 'Главный консультант'
//         }
// 	];
	
     



function Main() {

    // const specialist = props.specialist;
    // const items = specialist.map((specImg, specName,specPosition) => {specImg,specName,specPosition});
    

//     {this.specialist.map((item) =>
//      {this.props.item.specImg}, {this.props.item.specName}, {this.props.item.specPosition}
// )}


   return (
        <div className="specialistsList">
            <div className="specialistsList__inner">
                <h1>Лучшие специалисты</h1>
                <div className="specialistsList__inner-block">
                    <div className="specialistsList__inner-block1">
                        <img src={"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} />
                        <span>
                                <FaRegStar/>
                                <FaRegStar/>
                                <FaRegStar/>
                                <FaRegStar/>
                                <FaRegStar/>
                        </span>
                        <h3>Антон Алексеев</h3>
                        <p>Главный специалист</p>
                    </div>
                    <div className="specialistsList__inner-block2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa totam reprehenderit vero omnis cum iste est laboriosam atque nam, hic excepturi sed nesciunt itaque temporibus iure animi, nostrum eos maiores ab, rem culpa illum eligendi! Ab dolore officiis perspiciatis, hic excepturi sed nesciunt itaque temporibus iure animi, nostrum eos maiores ab, rem culpa illum eligendi! Ab dolore officiis perspiciatis
                    </div>
                </div>
{/* second */}
                <div className="specialistsList__inner-block">
                    <div className="specialistsList__inner-block2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa totam reprehenderit vero omnis cum iste est laboriosam atque nam, hic excepturi sed nesciunt itaque temporibus iure animi, nostrum eos maiores ab, rem culpa illum eligendi! Ab dolore officiis perspiciatis, hic excepturi sed nesciunt itaque temporibus iure animi, nostrum eos maiores ab, rem culpa illum eligendi! Ab dolore officiis perspiciatis
                    </div>

                    <div className="specialistsList__inner-block1">
                        <img src={"https://media.istockphoto.com/photos/north-african-black-young-woman-picture-id1060680104?b=1&k=20&m=1060680104&s=170667a&w=0&h=FL8BDL7XascC1UIMLKrYQ12ZFNJYGfR6GF6xjjWupso="} />
                        <span>
                                <FaRegStar/>
                                <FaRegStar/>
                                <FaRegStar/>
                                <FaRegStar/>
                                <FaRegStar/>
                        </span>
                        <h3>Ася Каирова</h3>
                        <p>Главный консультант</p>
                    </div>
                </div>
                <ExpertAdvice/>

{/* third */}
                <div className="specialistsList__inner-block">
                    <div className="specialistsList__inner-block1">
                        <img src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} />
                        <span>
                                <FaRegStar/>
                                <FaRegStar/>
                                <FaRegStar/>
                                <FaRegStar/>
                                <FaRegStar/>
                        </span>
                        <h3>Кирилл Сафонов</h3>
                        <p>Главный бухгалтер</p>
                    </div>
                    <div className="specialistsList__inner-block2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa totam reprehenderit vero omnis cum iste est laboriosam atque nam, hic excepturi sed nesciunt itaque temporibus iure animi, nostrum eos maiores ab, rem culpa illum eligendi! Ab dolore officiis perspiciatis, hic excepturi sed nesciunt itaque temporibus iure animi, nostrum eos maiores ab, rem culpa illum eligendi! Ab dolore officiis perspiciatis
                    </div>
                </div>
{/* fourth */}
                <div className="specialistsList__inner-block">
                    <div className="specialistsList__inner-block2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa totam reprehenderit vero omnis cum iste est laboriosam atque nam, hic excepturi sed nesciunt itaque temporibus iure animi, nostrum eos maiores ab, rem culpa illum eligendi! Ab dolore officiis perspiciatis, hic excepturi sed nesciunt itaque temporibus iure animi, nostrum eos maiores ab, rem culpa illum eligendi! Ab dolore officiis perspiciatis
                    </div>

                    <div className="specialistsList__inner-block1">
                        <img src={"https://media.istockphoto.com/photos/passport-photo-of-serious-mexican-female-young-adult-picture-id1266398949?b=1&k=20&m=1266398949&s=170667a&w=0&h=JGZfex8tVJ9_Xsla9qe9ctWfYmFRgyAUMSxWx9dp9f4="} />
                        <span>
                                <FaRegStar/>
                                <FaRegStar/>
                                <FaRegStar/>
                                <FaRegStar/>
                                <FaRegStar/>
                        </span>
                        <h3>Эмилия Саидова</h3>
                        <p>Финансовый консультант</p>
                    </div>
                </div>

            </div>
        </div>
    )  

    
}



export default Main
