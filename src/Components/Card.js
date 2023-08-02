import React from "react";
const Card = ({book}) => {


    console.log(book)
    return (
        <>

            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail; 
                    console.log(thumbnail)
                    if (thumbnail!==undefined)
                    {
                        return (

                            <div className="card"  >
                                <img src={thumbnail} alt="" />
    
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
