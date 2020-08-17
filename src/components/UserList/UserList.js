import React, { Component } from "react";
import UserItem from "../UserItem/UserItem";
import { connect } from "react-redux";
import { actFetchUsersRequest, actDeleteUserRequest } from "./../../actions/Users";

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_Ids: []
    };
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  onDelete = (id) => {
    this.props.onDeleteUser(id);
  }

  handleOnSelect = id => {
    const { user_Ids } = this.state;
    if (user_Ids.includes(id)) {
      this.setState({ // delete 1 element in array store
        user_Ids: [...user_Ids.filter(element => element !== id)]
      });
    } else {
      this.setState({ // add 1 element in array store
        user_Ids: [...user_Ids, id]
      });
    }
  }

  showUsers(users) {
    var result = null;
    if (users) {
      if (users.length > 0) {
        users = users.sort((a, b) => b.id - a.id); // sort by value?, => sort by id
        result = users.map((user, index) => {
          return (
            <UserItem
              onSelect={this.handleOnSelect}
              key={index}
              user={user}
              index={index}
              checked={this.state.user_Ids.includes(user.id)} //props atttribute for input tag to ProductItem
              onDelete={this.onDelete}
            />
          );
        });
      }
    }
    return result;
  }

  handleOnDeleteSelectedIds = () => {
    const { user_Ids } = this.state;
    user_Ids.forEach(user_Id => {
      this.props.onDeleteUser(user_Id);
    });
  }
  
  render() {
    const { users } = this.props;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">LIST USER</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th></th>
                <th>No.</th>
                <th>FullName</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.showUsers(users.data)}
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
    users: state.users
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllUsers: () => {
      dispatch(actFetchUsersRequest());
    },
    onDeleteUser: (id) => {
      dispatch(actDeleteUserRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
