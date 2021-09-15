import { Switch, Route } from "react-router";

import "./App.css";
import Layout from "./components/UI/Layout";
import PersonalServiceAgreement from "./pages/PersonalServiceAgreement";

function App() {
  



  return (
    <Layout>
      <Switch>
        <Route path={"/welcome"} exact>
          {/* <AllContractedPlayers modalIsClosed={modalIsClosed} /> */}
        </Route>

        <Route path={"/personal-service-agreement"} exact>
          <PersonalServiceAgreement />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
