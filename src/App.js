import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "./redux/actions";
import data from "./dummyApiData.json";
import React, { useEffect } from "react";
import StepWizard from "react-step-wizard";
import CoverPage from "./Component/CoverPage";
import CompanyInfo from "./Component/CompanyInfo";
import TeamBlurp from "./Component/TeamBlurp";
import DisciplinePage from "./Component/DisciplinePage";
import LevelPage from "./Component/LevelPage";
import JdFormPage from "./Component/JdFormPage";
import "bootstrap/dist/css/bootstrap.min.css";
import JdPage from "./Component/JdPage";
import "./App.scss";

const App = () => {
  const { usersData, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(data));
  }, []);
  console.log(" App working..", usersData, isLoading);
  return (
    <React.Fragment>
      {isLoading && <div className="loading">Data loading...</div>}
      <StepWizard className="jd-wizard">
        <CoverPage />
        <CompanyInfo />
        <TeamBlurp />
        <DisciplinePage />
        <LevelPage />
        <JdFormPage />
        <JdPage />
      </StepWizard>
    </React.Fragment>
  );
};

export default App;
