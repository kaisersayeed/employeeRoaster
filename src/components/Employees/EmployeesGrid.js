import React from "react";

class EmployeesGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = id => {
    this.props.handleOnClick(id);
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
      </div>
    );
  }
}

export default EmployeesGrid;
