import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import("./footer.scss")

function Footer() {
  return (
    <div id='Footer'>
      <footer className="footer">
        <div className='divsa'>

          <ul className="logos  uli"><li><a href="/" >Orion</a></li></ul>

          <ul className="uli">
            <li>
              <NavLink to="/" >Главный </NavLink>
            </li>
            <li>
              <NavLink to="/AboutUsMain"  >О Нас</NavLink>
            </li>
            <li>
              <NavLink to="/ServiseMain" >Услуги</NavLink>
            </li>
            <li >
              <NavLink to="/PriceListMain" >Прайст Лист</NavLink>
            </li>
            <li>
              <NavLink to="/NewsMain" >Новости</NavLink>
            </li>
            <li >
              <NavLink to="/ContactsMain" >Контакты</NavLink>
            </li>

          </ul>

          <ul className="uli">
            <li> <a href="//">Политика конфидиальноцти</a></li>
            <li> <a href="//">Условия Использование</a></li>
            <li>  <a href="//">Сертификат</a></li>

          </ul>



          <ul className="uli">
            <li>    {/* +996000111777 код:530371 */}  <a href="//">user@gmail.com</a> </li>
            <li> <a href="//">тел. 0702 33 33 33</a></li>
            <li>  <a href="//">г. Бишкек ул. Токтогула 24</a></li>
          </ul>
          <ul className='contacss uli'>
            <li><a href='//'> <FaTelegramPlane className='teleg' /></a></li>
            <li><a href='//'> <GrInstagram className='inst' /></a></li>
          </ul>
        </div>


        <p className="p">
          Copyright &copy; Super Company
          . All Rights Reserved
        </p>
      </footer>
    </div>
  )
}

export default Footer
