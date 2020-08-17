import React, { Component } from "react";
import HostItem from "../HostItem/HostItem";
import { connect } from "react-redux";
import { actFetchHostsRequest, actDeleteHostRequest } from "./../../actions/Hosts";

class HostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      host_Ids: []
    };
  }

  componentDidMount() {
    this.props.fetchAllHosts();
  }

  onDelete = (id) => {
    this.props.onDeleteHost(id);
  }

  handleOnSelect = id => {
    const { host_Ids } = this.state
    if (host_Ids.includes(id)) {
      this.setState({ // Xoa 1 phan tu trong mot mang
        host_Ids: [...host_Ids.filter(element => element !== id)]
      });
    } else {
      this.setState({ // Them 1 phan tu trong mot mang
        host_Ids: [...host_Ids, id]
      });
    }
  }

  showHosts(hosts) {
    var result = null;
    if (hosts) {
      if (hosts.length > 0) {
        hosts = hosts.sort((a, b) => b.id - a.id); // sap xep theo value gi, cu the o day la id
        result = hosts.map((host, index) => {
          return (
            <HostItem
              onSelect={this.handleOnSelect}
              key={index}
              host={host}
              index={index}
              checked={this.state.host_Ids.includes(host.id)} //de truyen t/tinh cho the input vao ProductItem
              onDelete={this.onDelete}
            />
          );
        });
      }
    }
    return result;
  }

  handleOnDeleteSelectedIds = () => {
    const { host_Ids } = this.state
    host_Ids.forEach(host_Id => {
      this.props.onDeleteUser(host_Id);
    });
  }
  
  render() {
    const { hosts } = this.props;
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
              {this.showHosts(hosts.data)}
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
    hosts: state.hosts
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllHosts: () => {
      dispatch(actFetchHostsRequest());
    },
    onDeleteHost: (id) => {
      dispatch(actDeleteHostRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostList);
