import React, { Component } from "react";
import "./work.css";

class Work extends Component {
  state = {};

  returnLink = () => {
    if (this.props.link !== null) {
      return (
        <a
          href={this.props.link}
          rel="noreferrer"
          target="_blank"
          className={"caption_link " + this.props.classTranslate}
        >
          Voir le projet
        </a>
      );
    }
  };

  render() {
    return (
      <div className="container">
        <figure className="work_container">
          <img className={this.props.classScale} src={this.props.img} alt={this.props.title} />
          <figcaption className="caption_container">
            <h5 className={"caption_title " + this.props.classTranslate}>{this.props.title}</h5>
            <p className={"caption_desc " + this.props.classTranslate}>{this.props.description}</p>
            {this.returnLink()}
            <p className={"caption_category " + this.props.classTranslate}>{this.props.category}</p>
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default Work;
