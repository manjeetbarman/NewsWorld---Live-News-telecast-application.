import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{ marginBottom: '20px' }}>
          <img src={!imageUrl?"https://www.zdnet.com/a/img/resize/f13ed1f2094f72dd30f9ac92280babe1ed7f6e79/2024/03/28/bab54f61-5901-48ba-b60a-af5914658f78/dsc00151.jpg?auto=webp&fit=crop&height=675&width=1200": imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
