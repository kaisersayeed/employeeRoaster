import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCompanyInfo } from "./CompanyInfoActions";
import CompanyInfo from "./CompanyInfo";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCompanyInfo();
  }

  render() {
    return <CompanyInfo companyInfo={this.props.companyInfo} />;
  }
}

const mapStateToProps = ({ companyInfo }) => {
  return { companyInfo };
};

export default connect(
  mapStateToProps,
  { fetchCompanyInfo }
)(HeaderContainer);
