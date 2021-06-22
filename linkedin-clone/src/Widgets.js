import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import "./Widgets.css"

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecord/>
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <Info/>
            </div>
            {newsArticle("A hiring binge in IT is coming", "2d ago")}
            {newsArticle("Second wave hits hiring speed", "3d ago")}
            {newsArticle("Companies revisit back-to-office plans", "3d ago")}
            {newsArticle("Tata Sons restores pay", "1d ago")}
            {newsArticle("Can 'Zoom-free' Friday really helps ", "2d ago")}
        </div>
    );
}

export default Widgets;
