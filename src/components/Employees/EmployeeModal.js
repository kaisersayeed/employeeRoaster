import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";

class EmployeeModal extends React.Component {
  render() {
    const { employee, show, onClose } = this.props;
    return employee ? (
      <div className="static-modal">
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>
              {employee.firstName}
              <Button onClick={onClose}>X</Button>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>One fine body...</Modal.Body>
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
