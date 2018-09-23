import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import {formatDate} from "../../utils/helper";

class EmployeeModal extends React.Component {
  render() {
    const { employee, show, onClose } = this.props;
    return employee ? (
      <div className="static-modal">
        <Modal show={show}>
        <Button className="modal-close" onClick={onClose}>X</Button>
          <div className="modal-info">
            <div className="modal-content-left">
             <img src={employee.avatar}/>
             <p>{employee.jobTitle}</p>
             <p>{employee.age}</p>
             <p>{formatDate(employee.dateJoined)}</p>
            </div>
            <div className="modal-content-right">
              <p>{employee.firstName} {employee.lastName}</p>
              <hr/>
              <p>{employee.bio}</p>
            </div>
          </div>
        </Modal>
      </div>
    ) : null;
  }
}

const mapStateToProps = ({ employees }) => {
  return {
    employee: employees.selectedEmployee
  };
};

export default connect(
  mapStateToProps,
  null
)(EmployeeModal);
