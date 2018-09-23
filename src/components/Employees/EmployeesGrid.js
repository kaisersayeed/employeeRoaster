import React from "react";
import EmployeeModal from "./EmployeeModal";

class EmployeesGrid extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleOnClick = id => {
    this.setState({
      show: true
    });
    this.props.handleOnClick(id);
  };

  onClose = () => {
    this.setState({
      show: false
    });
  };
  renderEmployees = () => {
    const { employees, selectedEmployeeId } = this.props;
    return employees.map(employee => {
      const selectedStyle =
          selectedEmployeeId === employee.id
              ? {
            backgroundColor: "red"
          }
              : {};
      return (
          <div
      role="button"
      onClick={() => this.handleOnClick(employee.id)}
      className="col-md-4 employee"
      style={selectedStyle}
      key={employee.id}
      >
      <div className="row">
          <div className="col-md-6">
          <img src={employee.avatar} />
      </div>
      <div className="col-md-6">
          {employee.firstName} {employee.lastName}
      <p>{employee.bio.substring(0, 15)}</p>
      </div>
      </div>
      </div>
      );
    });
  };
  render() {
    return (
        <div className="employees">
        <div className="row">
        <p className="col-md-12"> Our Employees </p>
    </div>
    <div className="row">{this.renderEmployees()}</div>
    <EmployeeModal show={this.state.show} onClose={this.onClose} />
  </div>
  );
  }
}

export default EmployeesGrid;
