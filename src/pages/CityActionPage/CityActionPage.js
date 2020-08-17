import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  actAddCityRequest,
  actGetCityRequest,
  actUpdateCityRequest 
} from "./../../actions/City";

class CityActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
    };
  }

  componentDidMount() {
    var { match } = this.props
    if (match || "") {
      var id = Number(match.params.id);
      const city = this.props.citys.data.forEach(city =>
        city.id === id ? this.setState({
        id: city.id,
        txtName: city.name
      }): null)
      if (city) {
        this.setState({
          id,
          txtName: city.name
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.cityItemEditing) {
      var { cityItemEditing } = nextProps;
      this.setState({
        id: cityItemEditing.id,
        txtName: cityItemEditing.name,
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
    var { id, txtName} = this.state;
    var { history } = this.props;
    var city = {
      id: id,
      name: txtName,
    }
    if (id === Number(this.props.match.params.id)) { //update product by id
      this.props.onUpdateCity(city);
    } else { //add new product by id
      this.props.onAddCity(city);
    }
    history.goBack();
  }

  goBack = () =>{ // function of button cancel
    this.props.history.goBack();
  }

  render() {
    var { txtName } = this.state;
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
          <Link to="/city-list" className="btn btn-danger mr-10" onClick={this.goBack}>Cancel</Link>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    citys: state.citys,
    cityItemEditing: state.cityItemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddCity: (city) => {
      dispatch(actAddCityRequest(city)); // add data
    },
    onEditCity: (id) => {
      dispatch(actGetCityRequest(id)); // show data
    },
    onUpdateCity: (city) => {
      dispatch(actUpdateCityRequest(city)); // // update data
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityActionPage);

