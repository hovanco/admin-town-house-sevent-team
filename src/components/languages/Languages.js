import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import LanguageList from "../LanguageList/LanguageList";
import { Link } from "react-router-dom";

class Languages extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/language/add" className="btn btn-success mb-10">Add New Language</Link>
          <LanguageList />
        </div>
      </>
    );
  }
}

export default Languages;
