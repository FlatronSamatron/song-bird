import React from 'react'
import './header.css'
import logo from './image/logo.svg'

export default class extends React.Component{

    render(){
    const {list,active} = this.props

    let menuList = list.map( (item,i) => {
        return (
            <li key={i} className = {i === active ? 'menu-item active' : 'menu-item'}>{item}</li>
        )
    })

        return(
            <>
            <div className="logo-score">
                <img className="logo" src={logo} alt="logo"/>
                <p className="score">Score: {this.props.score}</p>
            </div>
                <ul className='menu'>
                    {menuList}
                </ul>
            </>
        )
    }
}