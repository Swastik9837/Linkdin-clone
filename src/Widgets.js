import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Yeah Buddy", "Ronnie Coleman")}
      {newsArticle("Arnold Press", "Arnold Schwarzenegger")}
      {newsArticle("Arjun Yadav", "Biceps crusher")}
      {newsArticle("Swastik Rana", "Chest Crusher")}
      {newsArticle("Eddie STRONGMAN", "500kg Deadlift Record Holder")}
      {newsArticle("Cbum", "2022 Mr Olympia")}
    </div>
  );
}

export default Widgets;
