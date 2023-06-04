import React from "react";
//console.log(book)
const Card = ({book}) => {

    //if (!book || !Array.isArray(book) || book.length===0) {
      //  return <div>No book found</div>; // or return a fallback component
      ///}

    console.log(book)
    return (
        <>

            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let title=item 
                    console.log(thumbnail)

                    if (thumbnail!==undefined)
                    {
                        return (

                            <div className="card"  >
                                <img src="{thumbnail}" alt="" />
    
                                <div className="bottom">
                                    <h3 className="title">
                                    {item.volumeInfo.title}
                                    </h3>
                                    <h5 className="author">
                                    {item.volumeInfo.authors}
                                    </h5>
                                    <h5 className="subject">
                                    {item.volumeInfo.subtitle}
                                    </h5>
                                    <h5 className="publishedDate">
                                    {item.volumeInfo.publishedDate}
                                    </h5>
    
                                </div>
    
                            </div>
    
                        );

                    }

                    return null;
                })

            }

        </>

    );

};
export default Card;