import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    


    const capitalizerLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    
    const updateNews = async  () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5e8345078d5b4353aed43897ba769606&page=${page}&pageSize=${props.pageSize}` 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(50)
        let parsedData = await data.json();
        props.setProgress(70)
        // console.log(data);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalArticles)
        setLoading(false)
        
        props.setProgress(100)
    }
    useEffect(() => {
        document.title = `NewsMonkey-${capitalizerLetter(props.category)}`
      updateNews()
    }, []);
    
    // handlePreClick = async() => {
    //     setPage(page-1)
    //     updateNews()
    // }
    //  handleNextClick = async () => {
    //     setPage(page+1)
    //     updateNews()
    // }

    const fetchMoreData = async() => {
        
        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5e8345078d5b4353aed43897ba769606&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(data);
        setArticles( [...articles, ...parsedData.articles])
        setTotalResults(parsedData.totalResults)         
      };

  

    let totalPage = Math.ceil(totalResults/props.pageSize);

    return (

    <>
        <h1 className="text-center " style={{marginTop: '80px'}}>NewsMonkey - Top {capitalizerLetter(props.category)} Headlines </h1>
        {loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          >
            <div className="container">
            <div className="row">
                {articles.map((e)=>{
                    return <div className="col-md-4"  key={e.url}>
                    <NewsItem title={e.title ? e.title.slice(0, 45) : ""} description={`${e.description ? e.description.slice(0, 70) : ""}...`} imageUrl={e.urlToImage} newsUrl={e.url}
                                    author={e.author} date={e.publishedAt} source={e.source.name}/>
                </div>
                })}
            
            </div>
            </div>
        </InfiniteScroll>

    </>
    );
  
} 


News.defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'General'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
    
}

export default News;


{/* <div className="container d-flex justify-content-evenly">
            <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePreClick}> &larr;Previous</button>
            <button disabled={this.state.page >= totalPage} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
