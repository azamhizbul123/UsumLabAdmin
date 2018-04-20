import React from "react";
import { render } from "react-dom";
import {Switch, Route, BrowserRouter as  Router,NavLink,BR } from "react-router-dom";
import {DashBoardAdmin} from "./components/DashBoardAdmin";
import {Root} from "./components/Root";
import {coba} from "./components/testing/coba";
import {Dashboard} from "./components/Page/Dashboard";
import {NumberSocialMediaData} from "./components/Page/NumberOfSocialMedia/NumberSocialMediaData";
import {NumberNewsMediaData} from "./components/Page/NumberOfSocialMedia/NumberNewsMediaData";
import {PeakPointSocialMedia} from "./components/Page/PeakPoint/PeakPointSocialMedia";
import {PeakPointNews} from "./components/Page/PeakPoint/PeakPointNews";
import {test} from "./components/Page/Testing/test";
import {DashboardHome} from "./components/Page/DashboardHome/DashboardHome";
import {NewsPortal} from "./components/Page/SourceManagement/NewsPortal";
import {SourceSocialMedia} from "./components/Page/SourceManagement/SourceSocialMedia";
import {SourceEcommerce} from "./components/Page/SourceManagement/SourceEcommerce";
import {GmailPortal} from "./components/Page/SourceManagement/GmailPortal";
import {AllAgentSocialMedia} from "./components/Page/AgentManagement/AllAgentSocialMedia";
import {ConditionAgentSocialMedia} from "./components/Page/AgentManagement/ConditionAgentSocialMedia";
import {AllAgentNewsPortal} from "./components/Page/AgentManagement/AllAgentNewsPortal";
import {AllAgentGmail} from "./components/Page/AgentManagement/AllAgentGmail";
import {ConditionGmail} from "./components/Page/AgentManagement/ConditionGmail";
import {AllAgentEcommerce} from "./components/Page/AgentManagement/AllAgentEcommerce";
import {ConditionAgentEcommerce} from "./components/Page/AgentManagement/ConditionAgentEcommerce";
import {ConditionAgentNewsPortal} from "./components/Page/AgentManagement/ConditionAgentNewsPortal";
import {TestData, testdata} from "./components/Page/SourceManagement/testdata";
import {TableTesting} from "./components/Page/SourceManagement/TableTesting";
import {testingLoadData} from "./components/Page/SourceManagement/testingLoadData";





export class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path={"/tbl"} component={testingLoadData}/>
                    <Route path={"/tst"} component={testdata}/>
                    <Route path={"/allagentecommerce"} component={AllAgentEcommerce}/>
                    <Route path={"/conditionecommerce"} component={ConditionAgentEcommerce}/>
                    <Route path={"/allagentgmail"} component={AllAgentGmail}/>
                    <Route path={"/conditiongmail"} component={ConditionGmail}/>
                    <Route path={"/allagentnewsportal"} component={AllAgentNewsPortal}/>
                    <Route path={"/conditionnews"} component={ConditionAgentNewsPortal}/>
                    <Route path={"/Configuration"} component={ConditionAgentSocialMedia}/>
                    <Route path={"/allagentsocialmedia"} component={AllAgentSocialMedia}/>
                    <Route path={"/GmailPortal"} component={GmailPortal}/>
                    <Route path={"/ECommercePortal"} component={SourceEcommerce}/>
                    <Route path={"/SocialMediaPortal"} component={SourceSocialMedia}/>
                    <Route path={"/NewsPortal"} component={NewsPortal}/>
                    <Route path={"/home"} component={DashboardHome}/>
                    <Route path={"/peaknews"} component={PeakPointNews}/>
                    <Route path={"/peaksocial"} component={PeakPointSocialMedia}/>
                    <Route path={"/numbernews"} component={NumberNewsMediaData}/>
                    <Route path={"/numbersocial"} component={NumberSocialMediaData}/>
                    <Route path={"/dashboard"} component={DashboardHome}/>
                    <Route exact path={"/"} component={DashboardHome}/>
                    <Route  path={"/"} component={Root}/>
                </div>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));