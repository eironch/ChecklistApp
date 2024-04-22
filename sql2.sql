CREATE TABLE IF NOT EXISTS student_info(
	student_num int PRIMARY KEY,
	student_name varchar(50),
	student_address varchar(100),
	admission_date date,
	contact_num varchar(20),
	adviser_name varchar(50)
);

CREATE TABLE IF NOT EXISTS instructor_info(
	instructor_id int PRIMARY KEY AUTO_INCREMENT,
	instructor_name varchar(50)
);

CREATE TABLE IF NOT EXISTS course_info(
	course_code varchar(10) PRIMARY KEY,
	course_title varchar(60),
	course_year int(1),
	course_sem int(1),
	credit_unit_lec int(1),
	credit_unit_lab int(1),
	contact_hrs_lec  int(1),
	contact_hrs_lab int(1),
	prerequisite varchar(50)
);
    
CREATE TABLE IF NOT EXISTS student_records(
	student_num int,
	course_code varchar(10),
	year_taken int(1),
	sem_taken int(1),
	final_grade  varchar(10),
	instructor_id int,
	FOREIGN KEY (instructor_id) REFERENCES instructor_info(instructor_id),
	FOREIGN KEY (student_num) REFERENCES student_info(student_num),
	FOREIGN KEY (course_code) REFERENCES course_info(course_code)
);