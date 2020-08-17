import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  actAddHostRequest,
  actGetHostRequest,
  actUpdateHostRequest 
} from "./../../actions/Hosts";

class HostActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtUserName: "",
      txtEmail: "",
      txtPhone: "",
    };
  }

  componentDidMount() {
    var { match } = this.props
    if (match || "") {
      var id = Number(match.params.id);
      const host = this.props.hosts.data.forEach(host =>
        host.id === id ? this.setState({
        id: host.id,
        txtName: host.name,
        txtUserName: host.username,
        txtEmail: host.email,
        txtPhone: host.phone
      }): null)
      if (host) {
        this.setState({
          id,
          txtName: host.name,
          txtUserName: host.username,
          txtEmail: host.email,
          txtPhone: host.phone 
        })
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.hostItemEditing) {
      var { hostItemEditing } = nextProps;
      this.setState({
        id: hostItemEditing.id,
        txtName: hostItemEditing.name,
        txtUserName: hostItemEditing.username,
        txtEmail: hostItemEditing.email,
        txtPhone: hostItemEditing.phone
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
    var { id, txtName, txtUserName, txtEmail, txtPhone } = this.state;
    var { history } = this.props;
    var host = {
      id: id,
      name: txtName,
      username: txtUserName,
      email: txtEmail,
      phone: txtPhone
    }
    if (id === Number(this.props.match.params.id)) { //update product by id
      this.props.onUpdateHost(host);
    } else { //add new product by id
      this.props.onAddHost(host);
    }
    history.goBack();
  }

  goBack = () =>{
    this.props.history.goBack();
  }

  render() {
    var { txtName, txtUserName, txtEmail, txtPhone } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>FullName:</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName || ""}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>UserName:</label>
            <input
              type="text"
              className="form-control"
              name="txtUserName"
              value={txtUserName || ""}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              name="txtEmail"
              value={txtEmail || ""}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="number"
              className="form-control"
              name="txtPhone"
              value={txtPhone || ""}
              onChange={this.onChange}
            />
          </div>

          <Link to="/host-list" className="btn btn-danger mr-10" onClick={this.goBack}>Cancel</Link>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hosts: state.hosts,
    hostItemEditing: state.hostItemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddHost: (host) => {
      dispatch(actAddHostRequest(host)); // add data
    },
    onEditHost: (id) => {
      dispatch(actGetHostRequest(id)); // show data
    },
    onUpdateHost: (host) => {
      dispatch(actUpdateHostRequest(host)); // // update data
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HostActionPage);