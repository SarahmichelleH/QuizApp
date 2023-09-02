import SideBar from "../UI/SideBar";
import styles from "../Dashboard/AddQuiz.module.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
function CourseAdder() {
  let navigate = useNavigate();
  const attributes = [
    {
      name: "Course",
      link: "/coursePage",
    },
    {
      name: "Cart",
      link: "/Cart",
    },
    {
      name: "Profile",
      link: "/Profile",
    },

    {
      name: "Notification",
      link: "/",
    },
  ];
  const enteredCourseName = useRef();
  const enteredCourseId = useRef();
  const enteredCourseDescription = useRef();
  const [invalid, setInvalid] = useState(false);
  const [msg, setMsg] = useState("");

  function clearInvalid() {
    setInvalid(false);
    console.log("from clear");
  }

  function CourseAddHandler(event) {
    event.preventDefault();

    const courseName = enteredCourseName.current.value;
    const courseId = enteredCourseId.current.value;
    const courseDescription = enteredCourseDescription.current.value;

    const url = "http://localhost:3001/addcourse?";
    const params = {
      courseid: courseId,
      coursename: courseName,
      coursedescription: courseDescription
    };
    console.log(url + new URLSearchParams(params));

    fetch(url + new URLSearchParams(params), {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.auth) {
          navigate("/cour");
        } else {
          alert("couldn't add course");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  
}
  return (
    <>
      <SideBar attributeList={attributes} />
      <div className={styles["formbold-main-wrapper"]}>
        <div className={styles["formbold-form-wrapper"]}>
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className={styles["formbold-input-flex"]}>
              <div>
                <input
                  type="text"
                  name="courseName"
                  ref = {enteredCourseName}
                  id="courseName"
                  placeholder="Neural Networks"
                  className={styles["formbold-form-input"]}
                />
                <label
                  for="courseName"
                  className={styles["formbold-form-label"]}
                >
                  {" "}
                  Course Name{" "}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  name="courseID"
                  ref = {enteredCourseId}
                  id="courseID"
                  placeholder="c2"
                  className={styles["formbold-form-label"]}
                />
                <label for="courseID" className={styles["formbold-form-label"]}>
                  {" "}
                  Course ID{" "}
                </label>
              </div>
            </div>

            <div className={styles["formbold-textarea"]}>
              <textarea
                rows="6"
                name="message"
                ref = {enteredCourseDescription}
                id="message"
                placeholder="Write your message..."
                className={styles["formbold-form-input"]}
              ></textarea>
              <label for="message" className={styles["formbold-form-label"]}>
                {" "}
                Description{" "}
              </label>
            </div>
            <button className={styles["formbold-btn"]} onClick={CourseAddHandler}>Add Course</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CourseAdder;
