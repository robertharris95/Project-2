import React, { useState } from "react";
import API from "../../utils/API";
import "./style.css";

// props: bookName, author, link, img, info, apiHref.
function BookCard(props) {

    const [state, setState] = useState(false);

    function handleSave(event) {
        event.preventDefault();
        
        const authors = props.author.split(", ");
        
        setState(true);

        const newBook = {
            title: props.bookName,
            author: authors,
            link: props.link,
            info: props.info,
            img: props.img
        };

        API.saveBook(newBook)
    }

    function handleDelete(event) {
        event.preventDefault();

        API.deleteBook(props.apiHref)
        .then( () => {
            props.loadBooks();
        });
    }

    return (
        <div className="card">
            <div className="row">
                <div className="card-content">
                    <span id="bookName" className="col s6 card-title grey-text text-darken-4"><a href={props.apiHref}>{props.bookName}</a></span>
                    <button onClick={handleDelete} className={"waves-effect waves-light btn " + props.search} type="button"><i className="fas fa-times right"></i></button>{" "}
                    <a href={props.link} target="_blank" rel="noopener noreferrer"><button className={"waves-effect waves-light btn " + props.search} type="button"><i className="fas fa-eye right"></i></button></a>
                    <button onClick={handleSave} disabled={state} id={props.search} className="waves-effect waves-light btn" type="button"><i className="fas fa-archive right"></i></button>
                    <div id="author" className="col s8">Written By: {props.author}</div>  
                </div>
            </div>
            <div className="row"><p className="col s12"><a href={props.link} target="_blank" rel="noopener noreferrer">More Info</a></p></div>
            <div className="row">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="col s6 l6" src={props.img} alt="visuals"/>
                    <p className="col s10 l8 push-s1">{props.info}</p>
                </div>
            </div>
        </div>
    );
}

export default BookCard;