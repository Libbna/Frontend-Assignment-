import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./sidebar.css"

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItems = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                {/* <img src="https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/> */}
                <Avatar src={user.photoUrl} classname="sidebar_avatar">
                    {user.displayName[0]}    
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar_statNumber">300</p>
                </div>
                <div className="sidebar_stat">
                <p>Views of your post</p>
                <p className="sidebar_statNumber">624</p>
                </div>
                
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItems('reactjs')}
                {recentItems('programming')}
                {recentItems('softwareengineer')}
                {recentItems('design')}
                {recentItems('developer')}
                {recentItems('web')}
            </div>
        </div>
    );
};

export default Sidebar;
