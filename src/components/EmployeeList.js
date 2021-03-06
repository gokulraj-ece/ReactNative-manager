import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    // works only with array of objects, but firebase returns objects
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => { // returned obj stuffed into array
    return { ...val, uid }; // { shift: 'Monday', name: 'S', id: 'assd'};
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
