import styles from "./AdminDash.module.css";
import Card from "../UI/Card";
import SideBar from "../UI/SideBar";
import AdmGraph from "./admin_bargraph";
import Card2 from "../UI/Card2";
import { useNavigate } from 'react-router-dom';
function AdminDash() {
  const navigate = useNavigate();
  const url = sessionStorage.getItem("role")
  const name = sessionStorage.getItem("username")
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
    {name:"Logout",
  link: "/"}
    
  ];
  return (
    <>
      <div className={styles.body}>
        <SideBar attributeList={attributes} />
        <div className="name"><h2><br></br>
        

        welcome back {name}!</h2></div>
        

        <div className={styles.cardWrapper}>
          <br></br>
          <br></br>
        <br></br>
        <br></br>

          <Card2 heading="Number of Students" count={500} />
          <Card2 heading="Number of Mentors" count={50} />
          <Card2 heading="Number of Courses" count={10} />
          
<br></br>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <AdmGraph/>
        

        <div className={styles.cardWrapper}>
        <Card className={styles.add}>
          <p onClick={() => navigate('/AddCourse')}>Add Course</p>
        </Card>
        <Card className={styles.add}>
          <p onClick={() => navigate('/ApprMentor')}>Approve Mentor</p>
        </Card>
      </div>
      </div>
    </>
  );
}

export default AdminDash;
