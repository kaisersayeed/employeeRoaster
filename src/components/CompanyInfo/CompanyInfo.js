import React from "react";
import {formatDate} from "../../utils/helper";

const CompanyInfo = props => {
  return props.companyInfo.companyEst ? (
    <div className="header">
      <div className="row">
        <h1 className="col-md-12"> {props.companyInfo.companyName} </h1>
      </div>
      <div className="row">
        <div className="col-md-10">{props.companyInfo.companyMotto}</div>
        <div className="col-md-2">{`Since ${formatDate(props.companyInfo.companyEst)}`}</div>
      </div>
    </div>
  ): null;
};
export default CompanyInfo;
