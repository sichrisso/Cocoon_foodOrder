import React from "react";
import { Link } from "react-router-dom";
import classes from "./welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes.main}>
      <div className={classes.whitespace}></div>
      <div className={classes.container}>
        <h1>Good Food Choice Are Good Health...</h1>
        <p>
          Elevate your dining experience with Cocoon – Where Flavor Meets
          Convenience in Online Food Ordering
        </p>
        <div className="mt-4">
          {/* Use Link for navigation */}
          <Link to="/home" className={classes.mainbtn}>
            Search Menu
          </Link>
        </div>
      </div>

      <div className={classes.row}>
        <section>
          <p style={{ marginBottom: "-15px" }}>40+ </p>
          <p>Customers</p>
        </section>
        <section>
          <p style={{ marginBottom: "-15px" }}>20+ </p>
          <p>Food Options</p>
        </section>
        <section>
          <p style={{ marginBottom: "-15px" }}>10+ </p>
          <p>Drinks & Cocktails</p>
        </section>
        <section>
          <p style={{ marginBottom: "-15px" }}>4+ </p>
          <p>Branches</p>
        </section>
      </div>
    </div>
  );
};

export default Welcome;
