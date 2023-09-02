import React from 'react';
import styles from "./AdminDash.module.css";
import Graph from "../Dashboard/Graph";
import SideBar from "../UI/SideBar";
import UsersReach from "./UsersReach";

function Aanalytics() {
  const url = sessionStorage.getItem("role")
  console.log(url);
  const attributes = [
    {
      name: "Analytics",
      link: "/Aanalytics",
    },
    {
      name: "Mentor Management",
      link: "/ApprMentor",
    },
    
    {
      name: "Course Management",
      link: "/AddCourse",
    },
    {
      name: "Notifications",
      link: "/Anotifications",
    },
    {
      name: "Profile",
      link: "/Profile",
    },
    {
      name: "Home",
      link: `/${url}`,
    },
  ];


  return (
    <>
      <div className={styles.body}>
        <SideBar attributeList={attributes} />
        
        <div className={styles.graphContainer}>
          <div className={styles.graphWrapper}>
            <UsersReach className={styles.graph} />
          </div>
          <div className={styles.graphWrapper}>
            <Graph className={styles.graph} />

          </div>
         
        </div>
        <br></br><br></br><br></br><br></br> <br></br>   <br></br><br></br><br></br><br></br> <br></br>   <br></br><br></br><br></br><br></br>       
      </div>
    </>
  );
}

export default Aanalytics;
