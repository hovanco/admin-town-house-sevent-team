import React, { Component } from "react";
import { Link } from 'react-router-dom';

class RoomTypeItem extends Component {
  onDelete = (id) => {
    if (confirm("ban muon xoa?")) {//eslint-disable-line
      this.props.onDelete(id)
    }
  }

  onSelectRoomType = id => {
    this.props.onSelect(id)
  }

  render() {
    var { room_type, index } = this.props;
    return (
      <tr>
        <td>
          <input type="checkbox"
            className=""
            checked={this.props.checked} // get ckecked from props of ProductList
            onChange={() => this.onSelectRoomType(room_type.id)} />
        </td>
        <td>{index + 1}</td>
        <td>{room_type.name}</td>
        <td>{room_type.description}</td>
        <td>
          <Link to={`/roomtype/${room_type.id}/edit`} className="btn btn-warning mr-10">Update</Link>
        </td>
      </tr>
    );
  }
}

export default RoomTypeItem;
