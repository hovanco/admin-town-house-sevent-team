import React, { Component } from "react";
import CityItem from "../CityItem/CityItem";
import { connect } from "react-redux";
import { actFetchCitysRequest, actDeleteCityRequest } from "./../../actions/City";

class CityList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city_Ids: []
    };
  }

  componentDidMount() {
    this.props.fetchAllCitys();
  }

  onDelete = (id) => {
    this.props.onDeleteCity(id);
  }

  handleOnSelect = id => {
    const { city_Ids } = this.state
    if (city_Ids.includes(id)) {
      this.setState({ // delete 1 element in array store
        city_Ids: [...city_Ids.filter(element => element !== id)]
      });
    } else {
      this.setState({ // add 1 element in array store
        city_Ids: [...city_Ids, id]
      });
    }
  }

  showCitys(citys) {
    var result = null;
    if (citys) {
      if (citys.length > 0) {
        citys = citys.sort((a, b) => b.id - a.id); // sort by value? => sort by id
        result = citys.map((city, index) => {
          return (
            <CityItem
              onSelect={this.handleOnSelect}
              key={index}
              city={city}
              index={index}
              checked={this.state.city_Ids.includes(city.id)} //props attribute for input tag in ProductItem
              onDelete={this.onDelete}
            />
          );
        });
      }
    }
    return result;
  }

  handleOnDeleteSelectedIds = () => {
    const { city_Ids } = this.state
    city_Ids.forEach(city_Id => {
      this.props.onDeleteCity(city_Id)
    });
  }
  
  render() {
    const { citys } = this.props;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">LIST CITY</h3>
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
              {this.showCitys(citys.data)}
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
    citys: state.citys
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllCitys: () => {
      dispatch(actFetchCitysRequest());
    },
    onDeleteCity: (id) => {
      dispatch(actDeleteCityRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
