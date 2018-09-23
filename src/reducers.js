import { combineReducers } from "redux";
import CompanyInfoReducer from "./components/CompanyInfo/CompanyInfoReducer";

export default combineReducers({
  companyInfo: CompanyInfoReducer
});
