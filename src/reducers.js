import { combineReducers } from "redux";
import CompanyInfoReducer from "./components/CompanyInfo/CompanyInfoReducer";
import EmployeeReducer from "./components/Employees/EmployeesReducer";

export default combineReducers({
  companyInfo: CompanyInfoReducer,
  employees: EmployeeReducer
});
