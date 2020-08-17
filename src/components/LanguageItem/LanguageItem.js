import React, { Component } from "react";
import { Link } from 'react-router-dom';

class LanguageItem extends Component {
  onDelete = (id) => {
    if (confirm("ban muon xoa?")) {//eslint-disable-line
      this.props.onDelete(id)
    }
  }

  onSelectLanguage = id => {
    this.props.onSelect(id)
  }

  render() {
    var { language, index } = this.props;
    return (
      <tr>
        <td>
          <input type="checkbox"
            className=""
            checked={this.props.checked}
            onChange={() => this.onSelectLanguage(language.id)}
          />
        </td>
        <td>{index + 1}</td>
        <td>{language.name}</td>
        <td>
          <Link to={`/language/${language.id}/edit`} className="btn btn-warning mr-10">Update</Link>
        </td>
      </tr>
    );
  }
}

export default LanguageItem;
