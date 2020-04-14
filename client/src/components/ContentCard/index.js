import React, { useEffect, useState } from "react";
import ElemContainer from "../ElemContainer";
import BookCard from "../BookCard";
import { Input, FormBtn } from "../Form";
import API from "../../utils/API";
import "./style.css";

// props: subtitle, search: true or false.

function ContentCard(props) {

    const [books, setBooks] = useState([]);

    const [formObject, setFormObject] = useState({});

    const search = [];

    useEffect(() => {
        if (props.search === "false") {
            loadBooks();
        }
    }, [])

    function loadBooks() {
        API.getBooks()
        .then( (book) => setBooks(book.data))
        .catch( (err) => console.log(err));
    }

    function handleInputChange(event) {
        const { value } = event.target;
        setFormObject({ book: value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        API.searchBook(formObject.book)
        .then( (books) => {
            books.data.items.forEach( (book) => {   
                search.push({
                    _id: book.id,
                    title: book.volumeInfo.title,
                    author: book.volumeInfo.authors,
                    info: book.volumeInfo.description,
                    link: book.volumeInfo.infoLink,    
                    img: book.volumeInfo.imageLinks.smallThumbnail
                });
            });
            setBooks(search);
        })
        .catch( (err) => console.log("Sorry your book might be blocked in your country. " + err));
    }

    return (
        <ElemContainer addClasses="elemContainer col s12">
            <h4>{props.subtitle}</h4>
            <form className={"row " + props.search}>
                <Input onChange={handleInputChange}
                    name="book"
                    addClasses="col s6 push-s3"
                />
                <FormBtn disabled={!formObject.book}
                    onClick={handleFormSubmit}
                    addClasses="col s3"
                >
                    Search
                </FormBtn>
            </form>
            {books.length ? (
                <div>
                    {books.map( (book) => {
                        let authorList = "";
                        if (book.author) {
                            book.author.forEach( (author) => {
                                authorList += author + ", ";
                            });
                            authorList = authorList.replace(/(, )$/,"");
                        } else {
                            authorList = "Unkown."
                        }
                        return (
                            <BookCard key={book._id}
                            apiHref={book._id}
                            bookName={book.title}
                            author={authorList}
                            link={book.link}
                            info={book.info}
                            img={book.img}
                            search={props.search}
                            loadBooks={loadBooks}
                            />
                        );
                    })}
                </div>
            ) : (<div><h3 id={props.search}>No Books Saved.</h3></div>)}
        </ElemContainer>
    );
}

export default ContentCard;