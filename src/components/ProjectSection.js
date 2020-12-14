import React from 'react';

function ProjectSection () {

  const sectionStyle = {
    backgroundColor: "white",
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: "2rem",
    marginBottom: "2rem"
  }

  const cardSection = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "white",
  }

  const cardStyle = {
    backgroundColor: "white",
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    color: "#282c34",
    padding: "1rem",
    width: "18vw",
    margin: "1.5rem",
    borderRadius: "8px",
    boxShadow: "2px 2px 12px 6px #eeeeee"
  }

  return (
    <section style={sectionStyle}>
      <h2>Recent Projects</h2>
      <div style={cardSection}>
        <div style={cardStyle}>
          <h3>AvyUpskill</h3>
        </div>
        <div style={cardStyle}>
          <h3>Gift Giver</h3>
        </div>
        <div style={cardStyle}>
          <h3>TLBuildworks</h3>
        </div>
        <div style={cardStyle}>
          <h3>Pack List</h3>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;