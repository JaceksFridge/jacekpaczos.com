import React from 'react';

const CourseSection = ({ courses = [] }) => {

  const coursesList = courses.map((course, index) => (
    <li className="block" data-aos="fade-up" key={index}>

      <a href={course.courseurl}>
        <div className="card-top">
          <div className="card-left">
            {course.teacher === 'Coursera' && (
              <div className="card-logo coursera"></div>
            )}
            {course.teacher === 'Google' && (
              <div className="card-logo google"></div>
            )}
            {course.teacher === 'Meta' && (
              <div className="card-logo meta"></div>
            )}
            {course.teacher === 'Codecademy' && (
              <div className="card-logo codecademy"></div>
            )}
          </div>
          <div className="card-right">
            <h4 className="card-title">{course.title}</h4>
            <h6 className="card-teacher">{course.teacher}</h6>
            <div>
              <div className="card-checkmark"></div>
              <h6 className="card-date">Completed on {course.date}</h6>
            </div>
            <div>
              <div className="card-star"></div>
              <h6 className="card-grade">{course.grade}</h6>
            </div>
          </div>
        </div>
      </a>
      <a href={course.certificate}>
        <div className="card-bottom">
          <div className="card-open"></div>
          <p>View Course</p>
        </div>
      </a>

    </li>
  ))




  return (
    <div className="course-section">
      <div className="courses-title">
        <h3>Courses</h3>
        <div className="courses-title-line"></div>
      </div>
      <div className="section_line"></div>
      <ul>{coursesList}</ul>
    </div>
  )
}

export default CourseSection;
