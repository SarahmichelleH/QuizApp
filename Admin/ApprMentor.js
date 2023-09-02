import React, { useState } from 'react';
import ApprItem from './Appritem';
import styles from './apprmentor.module.css';
import SideBar from '../UI/SideBar';
const ApprMentor = () => {
  const [mentors] = useState([
    { id: 1, name: 'Anjali B' },
    { id: 2, name: 'Abhilasha M' },
    { id: 3, name: 'Naina N' },
    { id: 4, name: 'Meenakshi' },
    { id: 5, name: 'Ramya' },
    { id: 6, name: 'Joshita' },
  ]);
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
  const [approvedMentors, setApprovedMentors] = useState([]);
  const [discardedMentors, setDiscardedMentors] = useState([]);

  const handleApprove = (mentorId) => {
    const mentor = mentors.find((mentor) => mentor.id === mentorId);
    if (mentor) {
      setApprovedMentors((prevMentors) => [...prevMentors, mentor]);
    }
    setDiscardedMentors((prevMentors) => prevMentors.filter((mentor) => mentor.id !== mentorId));
  };

  const handleDiscard = (mentorId) => {
    const mentor = mentors.find((mentor) => mentor.id === mentorId);
    if (mentor) {
      setDiscardedMentors((prevMentors) => [...prevMentors, mentor]);
    }
  };

  return (
    <>
    <SideBar attributeList={attributes} />
    <div className={styles.container}>
      <h2 className={styles.title}>Approve Mentors</h2>
      {mentors && mentors.length > 0 ? (
        mentors.map((mentor) => (
          <ApprItem
            key={mentor.id}
            mentor={mentor}
            handleApprove={handleApprove}
            handleDiscard={handleDiscard}
            approved={approvedMentors.some((approvedMentor) => approvedMentor.id === mentor.id)}
            discarded={discardedMentors.some((discardedMentor) => discardedMentor.id === mentor.id)}
          />
        ))
      ) : (
        <p>No mentor requests to display.</p>
      )}
    </div>
    </>
  );
};

export default ApprMentor;
