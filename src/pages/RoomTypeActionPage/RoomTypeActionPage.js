import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { 
  actAddRoomTypeRequest, 
  actGetRoomTypeRequest,
  actUpdateRoomTypeRequest
} from "./../../actions/RoomTypes";

class RoomTypeActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtDescription: ""
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match || "") {
      var id = Number(match.params.id);
      const room_type = this.props.room_types.data.forEach(room_type =>
        room_type.id === id ? this.setState({
          id: room_type.id,
          txtName: room_type.name,
          txtDescription: room_type.description
        }):null);

      if (room_type) {
        this.setState({
          id,
          txtName: room_type.name,
          txtDescription: room_type.description
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.roomTypeItemEditing) {
      var { roomTypeItemEditing } = nextProps;
      this.setState({
        id: roomTypeItemEditing.id,
        txtName: roomTypeItemEditing.name,
        txtDescription: roomTypeItemEditing.description
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
    var { id, txtName, txtDescription } = this.state;
    var { history } = this.props;
    var room_type = {
      id: id,
      name: txtName,
      description: txtDescription
    }
    if (id=== Number(this.props.match.params.id)) { //update product by id
      this.props.onUpdateRoomType(room_type);
    } else { //add new product by id
      this.props.onAddRoomType(room_type);
    }
    history.goBack();
  }

  goBack = () =>{
    this.props.history.goBack();
  }

  render() {
    var { txtName, txtDescription } = this.state;
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
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              name="txtDescription"
              value={txtDescription || ""}
              onChange={this.onChange}
            />
          </div>
          <Link to="/roomtype-list" className="btn btn-danger mr-10" onClick={this.goBack}>Cancel</Link>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    room_types: state.room_types,
    roomTypeItemEditing: state.roomTypeItemEditing,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddRoomType: (room_type) => {
      dispatch(actAddRoomTypeRequest(room_type)); // add data
    },
    onEditRoomType: (id) => {
      dispatch(actGetRoomTypeRequest(id)); // show data
    },
    onUpdateRoomType: (room_type) => {
      dispatch(actUpdateRoomTypeRequest(room_type)); // // update data
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomTypeActionPage);
