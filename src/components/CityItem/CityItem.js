import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CityItem extends Component {
  onDelete = (id) => {
    if (confirm("ban muon xoa?")) {//eslint-disable-line
      this.props.onDelete(id)
    }
  }

  onSelectCity = id => {
    this.props.onSelect(id)
  }

  render() {
    var { city, index } = this.props;
    return (
      <tr>
        <td>
          <input type="checkbox"
            className=""
            checked={this.props.checked}
            onChange={() => this.onSelectCity(city.id)}
          />
        </td>
        <td>{index + 1}</td>
        <td>{city.name}</td>
        <td>
          <Link to={`/city/${city.id}/edit`} className="btn btn-warning mr-10">Update</Link>
        </td>
      </tr>
    );
  }
}

export default CityItem;
