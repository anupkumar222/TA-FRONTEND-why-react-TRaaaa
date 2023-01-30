import data from '../data/data';
import PropTypes from "prop-types";

function Articles(){
    return (
         <section className="articles container">
             <h2 className="center">
                 Articles
             </h2>
             <div className="flex wrap">
                 {data.map((article, index) =>(
                    <Article key={index } {...article} />
                 ))}
             </div>
         </section>
    )
}

function Article(props){
    function getDate(date){
        return new Date(date);
    }
    return (
        <>
        <article className="flex-28">
                     <img width="100%" src={props.urlToImage} alt="Article_img" />
                     <div className="article">
                         <h4 >{props.title}</h4>
                         <h5 >by: {props.author}</h5>
                         <h5 >published on {getDate(props.publishedAt).getDate()}/{getDate(props.publishedAt).getMonth()}/{getDate(props.publishedAt).getFullYear()}</h5>
                         <p>{props.content.slice(0,50)}...</p>
                         <a href={props.url} target="_blank" className="center btn">Learn More</a>
                     </div>
                 </article>
        </>
    )
}

Article.prototype = {
    urlToImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default Articles;