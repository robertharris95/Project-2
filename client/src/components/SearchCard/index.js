import React, { useState } from "react";
import ElemContainer from "../ElemContainer";
import BookCard from "../BookCard";
import { Input, FormBtn } from "../Form";
import API from "../../utils/API";
import "./style.css";

// props: subtitle.

function SearchCard(props) {

    const [books, setBooks] = useState([]);

    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { value } = event.target;
        setFormObject({ book: value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        API.searchBook(formObject.book)
        .then( (books) => console.log(books))
    }

    return (
        <ElemContainer addClasses="elemContainer col s12">
            <h4>{props.subtitle}</h4>
            <form>
                <Input onChange={handleInputChange}
                    name="book"
                    placeholder="Book Title"
                />
                <FormBtn disabled={!formObject.book}
                    onClick={handleFormSubmit}
                >
                    Search
                </FormBtn>
            </form>
            {books.length ? (
                <div>
                    {books.map( (book) => {
                        return (
                            <BookCard key={book._id}
                            apiHref={"/books/" + book._id}
                            bookName={book.title}
                            link={book.author}
                            info={book.synopsis}
                            />
                        );
                    })}
                </div>
            ) : (<h3>No Results.</h3>)}
        </ElemContainer>
    );
}

export default SearchCard;