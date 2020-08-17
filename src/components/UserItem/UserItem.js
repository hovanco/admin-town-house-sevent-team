import React, { Component } from "react";
import { Link } from 'react-router-dom';

class UserItem extends Component {
  onDelete = (id) => {
    if (confirm("ban muon xoa?")) {//eslint-disable-line
      this.props.onDelete(id);
    }
  }

  onSelectUser = id => {
    this.props.onSelect(id);
  }
  
  render() {
    var { user, index } = this.props;
    return (
      <tr>
        <td>
          <input type="checkbox"
            className=""
            checked={this.props.checked}
            onChange={() => this.onSelectUser(user.id)}
          />
        </td>
        <td>{index + 1}</td>
        <td>{user.fullName}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
          <Link to={`/user/${user.id}/edit`} className="btn btn-warning mr-10">Update</Link>
        </td>
      </tr>
    )
  }
}

export default UserItem;
