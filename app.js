import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp } from "@phenomic/preset-react-app/lib/client";
import Head from "react-helmet";
import { ProjectList, InProgressList, Footer } from "./template.js";
import "./style.css";

const Home = () => (
  <div id="wrapper">

    <Head>
      <meta charset="utf-8"/>
      <meta http-equiv="x-ua-compatible" content="ie=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <title>Zach Krall</title>
      <meta name="description" content="" />
    </Head>

    <header>
      <h1>Zach Krall</h1>
    </header>

    <div id="projects" className="projectWrapper">
      <ProjectList/>
    </div>

    <div id="inprogress" className="projectWrapper">
    <h1 className="noFlex">In-Progress</h1>
      <InProgressList/>
    </div>

    <Footer/>
  </div>
);

const PageError = ({ error }) => {
  const status = (error && error.status) || 404;
  const message = error && status !== 404 ? error.statusText : "Page Not Found";

  return (
    <div id="404">
      <Head>
        <title>{message} - Zach Krall</title>
      </Head>
      <h1 style={{margin:'4rem'}}>{message}</h1>
    </div>
  );
};

export default createApp(() => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="*" component={PageError} />
  </Router>
));
