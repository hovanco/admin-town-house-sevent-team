import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  actAddLanguageRequest,
  actGetLanguageRequest,
  actUpdateLanguageRequest 
} from "./../../actions/Languages";

class LanguageActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match || "") {
      var id = Number(match.params.id);
      const language = this.props.languages.data.forEach(language =>
        language.id === id ? this.setState({
        id: language.id,
        txtName: language.name
      }): null);
      if (language) {
        this.setState({
          id,
          txtName: language.name
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.languageItemEditing) {
      var { languageItemEditing } = nextProps;
      this.setState({
        id: languageItemEditing.id,
        txtName: languageItemEditing.name,
      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  onSave = (e) => {
    e.preventDefault();
    var { id, txtName} = this.state;
    var { history } = this.props;
    var language = {
      id: id,
      name: txtName,
    }
    if (id === Number(this.props.match.params.id)) { //update product by id
      this.props.onUpdateLanguage(language);
    } else { //add new product by id
      this.props.onAddLanguage(language);
    }
    history.goBack();
  }

  goBack = () =>{ // fuction of cancel button
    this.props.history.goBack();
  }

  render() {
    var { txtName } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName || ""}
              onChange={this.onChange}
            />
          </div>
          <Link to="/language-list" className="btn btn-danger mr-10" onClick={this.goBack}>Cancel</Link>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    languageItemEditing: state.languageItemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddLanguage: (language) => {
      dispatch(actAddLanguageRequest(language)); // add data
    },
    onEditLanguage: (id) => {
      dispatch(actGetLanguageRequest(id)); // show data
    },
    onUpdateLanguage: (language) => {
      dispatch(actUpdateLanguageRequest(language)); // // update data
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageActionPage);
