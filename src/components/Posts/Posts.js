import React from 'react';
import './Posts.css';


const Posts = ({ loading, pictureUrls }) => {
    if (loading) {
        return <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
        </div>;
    }

    return (
        <section id="results">
            <div className="container">
                <div className="pictures">
                    {pictureUrls.map(pic => {
                        return <div className="picture" key={pic}>
                            <img src={pic} alt={pic} />
                        </div>;
                    })}
                </div>
            </div>
        </section>
    )
}

export default Posts;