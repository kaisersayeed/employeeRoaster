import React from "react";
import EmployeeModal from "./EmployeeModal";
import EmployeeCard from "./EmployeeCard";

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
    this.props.handleOnClick(-1);
  };
  renderEmployees = () => {
    const { employees, selectedEmployeeId } = this.props;
    return employees.map(employee => {
      const selectedStyle = selectedEmployeeId === employee.id ? 'selected' : {};
      return (
        <div role="button"
          onClick={() => this.handleOnClick(employee.id)}
          className="col-md-4 employee"
          key={employee.id}
        >
          <EmployeeCard employee={employee} selectedStyle={selectedStyle}/>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="content">
        <div className="row">
          <p className="col-md-12 border-bottom-grey"> Our Employees </p>
        </div>
        <div className="row employees">
          {this.renderEmployees()}
        </div>
        <EmployeeModal show={this.state.show} onClose={this.onClose} />
      </div>
    );
  }
}

export default EmployeesGrid;
