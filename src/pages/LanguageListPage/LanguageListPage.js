import React, { Component } from "react";
import LanguageList from "./../../components/LanguageList/LanguageList";
import { Link } from "react-router-dom";

class LanguageListPage extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/language/add" className="btn btn-success mb-10">Add New Language</Link>
        <LanguageList />
      </div>
    );
  }
}

export default LanguageListPage;