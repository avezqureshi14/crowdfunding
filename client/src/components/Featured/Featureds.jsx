import React from "react";
import Featured from "./Featured";

const Featureds = () => {
  return (
    <>
      <div className="MainfundingsCampaigns">
      <div className="featuredfundingsCampaigns">
        <div className="headers_top">
          <h1 style={{textAlign:"start",marginLeft:"2rem"}} >Expired Campaigns</h1>
        </div>
        <div className="cards">
        <Featured/>
        <Featured/>
        <Featured/>
        <Featured/>
        </div>
        </div>
      </div>
    </>
  );
};

export default Featureds;
