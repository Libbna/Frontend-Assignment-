import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css'

function HeaderOptions({avatar, Icon, title, onClick}) {    //props

    const user = useSelector(selectUser);


    return (
        <div onClick={onClick} className="headerOptions">
            {Icon && <Icon className="headerOption_icon" />}
            {avatar && (
                <Avatar className="headerOption_icon" >
                {user?.displayName[0]}    
            </Avatar>
            )
            }

            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}


export default HeaderOptions;




