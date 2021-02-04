import React, { Component } from "react";
import "./AllWorks.css";

class AllWorks extends Component {
  state = {};

  triangleColor = () => {
    if (this.props.category === "Développement") return " #e94447";
    else if (this.props.category === "Web") return " #839eff";
    else if (this.props.category === "Graphisme") return " #8bff44";
  };

  render() {
    return (
      <React.Fragment>
        <a
          className={this.props.classProjects}
          href="#works"
          onClick={() => {
            this.props.triggerWorkClass(this.props.id);
          }}
          style={{ backgroundImage: `url(${this.props.img})` }}
        >
          <span className="triangle" style={{ borderTopColor: this.triangleColor() }} />
        </a>
      </React.Fragment>
    );
  }
}

export default AllWorks;
