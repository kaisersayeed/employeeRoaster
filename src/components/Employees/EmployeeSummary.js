import React from "react";

const EmployeeCard = props => {
  const { firstName, lastName, bio } = props.employee;
  return (
    <div className="bio">
      <p>{firstName} {lastName}</p>
      <p>{`${bio.substring(0, 100)} ...`}</p>
    </div>
  )
};
export default EmployeeCard;
