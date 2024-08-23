import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Menu.css'

import {pages} from './pages'




const Menu = ({handlePageChange}) => {

const navigate = useNavigate();



  return (
    <div className='menu-container'>
      <div className="logo">
            <img  src="./user.svg"/>
         
     </div> 
    <div className='menu'>
        {
            pages.map((page)=>{
                return(
                    <Link to={page.path} className='listItem' key={page.id} onClick={()=>{handlePageChange(page.name)}}>
                        <img src={page.icon} alt=''/>
                        <span className='listItemTitle'>{page.name}</span>    
                    </Link>
                )
            })
        }


    </div>
   </div>
  )
}

export default Menu