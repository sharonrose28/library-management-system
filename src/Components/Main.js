import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{

    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
  

    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            console.log("hello");
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDtO4YggPjPQLn_OAiwQ7PDDS78AULBpsQ'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>


        <div className="header">
            <div className="row1">
                <h1>
                    Library Management System
                </h1>

            </div>
            <div className="row2">

                <div className="search">
                    <input type="text" placeholder="Enter your Book Name and Click Enter"
                    value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchBook}

                    />
                    <button><i class="fa fa-search"></i></button>
                    
                </div>

                <img src="./images/books.png" alt=""/>

                <h4>Discover the latest Books Here</h4>

            </div>
        </div>

        <div className="container">
                <Card book={bookData}/>
        </div> 
        </>
    )
}
export default Main;
