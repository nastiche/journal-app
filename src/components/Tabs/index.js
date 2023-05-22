import React from "react";
import "./Tabs.css";

export function Tabs() {
  return <><div className="tabs-container">
    
    <div className="tab"><button className="tab-name tab-name--active">All entries</button><p className="tabs-badge tabs-badge--active">3</p></div>


  <div className="tab"><button className="tab-name">Favorites</button><p className="tabs-badge">1</p></div>
    </div></>;
}
