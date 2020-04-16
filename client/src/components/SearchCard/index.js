import React, { useState } from "react";
import ListCard from "../ListCard";
import API from "../../utils/API";
// import "./style.css";

// props: subtitle.

function SearchCard(props) {

    const [company, setCompany] = useState([]);

    let compArr = [];

    API.getCompanyList(props.company).then(data => {
        console.log(data.data);
        data.data.forEach( (el) => {
            compArr.push(el);
        });
    });

    console.log(compArr);

    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     API.searchBook(formObject.book)
    //     .then( (books) => console.log(books))
    // }

    return (
        <>
            {compArr.length ? (
                <ul className={props.addClasses}>
                    {compArr.map( (comp) => {
                        return (
                            <ListCard key={comp._id}
                            apiHref={"/company/" + comp._id}
                            companyName={comp.companyName}
                            />
                        );
                    })}
                </ul>
            ) : null}
        </>
    );
}

export default SearchCard;