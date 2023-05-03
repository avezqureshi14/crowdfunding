import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <div id="funding" className="MainfundingsCampaigns">
      <div className="fundingsCampaigns">
        <div className="headers_top campaignTOP">
          <h1 style={{textAlign:"start",marginLeft:"-8rem"}} >Currently Active Campaigns</h1>
          <div className="createCampaign">
          <button>Create Campaign</button>
          </div>
        </div>
        <div className="cards">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
