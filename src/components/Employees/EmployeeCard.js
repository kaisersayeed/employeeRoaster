import React from "react";
import Avatar from "../shared/Avatar";
import EmployeeSummary from "./EmployeeSummary";

const EmployeeCard = props => {
  const { selectedStyle, employee } = props;
  return employee ? (
    <div className={`card ${selectedStyle}`}>
      <Avatar imgSrc={employee.avatar} />
      <EmployeeSummary employee={employee} />
    </div>
  ) : null;
};
export default EmployeeCard;
