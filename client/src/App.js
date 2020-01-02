import React from "react";
import "./App.css";
import logo from "./logo.png";
import "./bootstrap.min.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import { Link } from "react-router-dom";

const client = new ApolloClient({
  uri: "/graphql" // where we sending our requests to
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Link to="/">
            <img
              src={logo}
              alt="SpaceX"
              style={{ width: 300, display: "block", margin: "auto" }}
            />{" "}
          </Link>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
