import React from "react";


const  NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;

    return (
    <div className="my-4">
        <div  className="card h-100" >
            <img src={!imageUrl? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVmq5PPe_ymOhZiNmG5YEO6Z5JmRvn84-McA&s" : imageUrl}  className="card-img-top" alt="..."/>
            <div  className="card-body d-flex flex-column">
                <h5  className="card-title">{title}...  <span className="position-absolute top-0 start-100  translate-middle z-1 badge rounded-pill bg-danger">{source.length > 7 ? source.slice(0, 8) + "..." : source}</span></h5>
                <p  className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author? author: "Unknown"} on  {new Date(date).toLocaleString('en-us',{
                                                                                                                    day: "2-digit",
                                                                                                                    month: 'short',
                                                                                                                    year: 'numeric',
                                                                                                                    hour: '2-digit',
                                                                                                                    minute: '2-digit',
                                                                                                                    hour12: true})}</small></p>
                <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read More </a>
            </div>
        </div>
    </div>
    );
  
}

export default NewsItem;
