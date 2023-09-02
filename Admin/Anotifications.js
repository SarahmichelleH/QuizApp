import React from 'react';
import styles from "./AdminDash.module.css";
import SideBar from "../UI/SideBar";
import NotificationsList from "../appnotifications/appnotif";

function Anotifications() {
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
  ];

  return (
    <>
    <div className={styles.body}>
      <SideBar attributeList = {attributes} />
      <div className={styles.container}>
      <br></br>
      

      <div className={styles.star}>
      <NotificationsList ></NotificationsList>     
      </div>
      </div>
      </div>
    </>
  );
}

export default Anotifications;