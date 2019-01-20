import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux";
import orderBy from "lodash/orderBy";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import "./App.css";
import Table from "./Table";
import { getTableData ,editTableData,removeTableData} from './actions/tableAction';

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class App extends Component {
  state = {
    data: [],
    editIdx: -1,
    columnToSort: "",
    sortDirection: "desc"
  };

  componentWillMount() {
    this.props.getTableData();
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      data:nextProps.tableData
    })
    if(nextProps.editData.ReturnCode === 0){
      NotificationManager.success(nextProps.editData.ReturnMessage);
    }
    if(nextProps.deleteData.ReturnCode === 0){
      NotificationManager.success(nextProps.deleteData.ReturnMessage);
    }
  }

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
    this.props.removeTableData(i);
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleSave = (i, x) => {
    this.setState(state => ({
      data: state.data.map((row, j) => (j === i ? x : row))
    }));
    this.stopEditing();
    this.props.editTableData(x);
  };

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {this.props.Loading && <CircularProgress />}
          <NotificationContainer/>
          <Table
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleSave={this.handleSave}
            columnToSort={this.state.columnToSort}
            sortDirection={this.state.sortDirection}
            data={orderBy(
              this.state.data,
              this.state.columnToSort,
              this.state.sortDirection
            )}
            header={[
              {
                name: "First name",
                prop: "firstName"
              },
              {
                name: "Last name",
                prop: "lastName"
              },
              {
                name: "Username",
                prop: "username"
              },
              {
                name: "Email",
                prop: "email"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ tableReducer }) => {
  const { tableData, editData,deleteData,Loading } = tableReducer;
  return { tableData, editData,deleteData,Loading };
};

export default connect(
  mapStateToProps,
  {
    getTableData,
    editTableData,
    removeTableData
  }
)(App);
