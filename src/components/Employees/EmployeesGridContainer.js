import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmployees, setSelectedEmployee } from "./EmployeesActions";
import EmployeesGrid from "./EmployeesGrid";
import { getSelectedEmployeeId } from "./EmployeeSelectors";

class EmployeesGridContainer extends Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    return (
      <EmployeesGrid
        employees={this.props.employees}
        selectedEmployeeId={this.props.selectedEmployeeId}
        handleOnClick={this.props.setSelectedEmployee}
      />
    );
  }
}

const mapStateToProps = ({ employees }) => {
  return {
    employees: employees.list,
    selectedEmployeeId: getSelectedEmployeeId(employees.selectedEmployee)
  };
};

export default connect(
  mapStateToProps,
  { fetchEmployees, setSelectedEmployee }
)(EmployeesGridContainer);
