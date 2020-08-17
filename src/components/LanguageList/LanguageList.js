import React, { Component } from "react";
import LanguageItem from "../LanguageItem/LanguageItem";
import { connect } from "react-redux";
import { actFetchLanguagesRequest, actDeleteLanguageRequest } from "./../../actions/Languages";

class LanguageList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language_Ids: []
    };
  }

  componentDidMount() {
    this.props.fetchAllLanguages();
  }

  onDelete = (id) => {
    this.props.onDeleteLanguage(id);
  }

  handleOnSelect = id => {
    const { language_Ids } = this.state
    if (language_Ids.includes(id)) {
      this.setState({ // Xoa 1 phan tu trong mot mang
        language_Ids: [...language_Ids.filter(element => element !== id)]
      });
    } else {
      this.setState({ // Them 1 phan tu trong mot mang
        language_Ids: [...language_Ids, id]
      });
    }
  }

  showLanguages(languages) {
    var result = null;
    if (languages) {
      if (languages.length > 0) {
        languages = languages.sort((a, b) => b.id - a.id); // sap xep theo value gi, cu the o day la id
        result = languages.map((language, index) => {
          return (
            <LanguageItem
              onSelect={this.handleOnSelect}
              key={index}
              language={language}
              index={index}
              checked={this.state.language_Ids.includes(language.id)} //de truyen t/tinh cho the input vao ProductItem
              onDelete={this.onDelete}
            />
          );
        });
      }
    }
    return result;
  }

  handleOnDeleteSelectedIds = () => {
    const { language_Ids } = this.state
    language_Ids.forEach(language_Id => {
      this.props.onDeleteCity(language_Id)
    });
  }
  
  render() {
    const { languages } = this.props;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">LIST LANGUAGES</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th></th>
                <th>No.</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.showLanguages(languages.data)}
            </tbody>
          </table>
          <button
            onClick={this.handleOnDeleteSelectedIds}
            type="button"
            className="btn btn-danger btn-delete">Delete</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllLanguages: () => {
      dispatch(actFetchLanguagesRequest());
    },
    onDeleteLanguage: (id) => {
      dispatch(actDeleteLanguageRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageList);
