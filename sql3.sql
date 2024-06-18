INSERT INTO student_info VALUES (
	202211703,
	'Cheiron S. Candelaria',
	'T.S. Cruz Almanza Dos, Las Piñas City',
	'22/08/22',
	'09319819980',
	null
);

INSERT INTO instructor_info (instructor_name) VALUES 
('MR. ABEJUELA'),
('MS. PICA'),
('MR. CASTILLO'),
('MR. SANTOS'),
('MS. RAMALLOSA'),
('MR. MITRA'),
('MS. MENDOZA'),
('MR. VELUZ'),
('MR. LOZADA'),
('MR. MANOZO'),
('MR. MONTEJAR'),
('MS. DELA CRUZ'),
('MR. ELLO'),
('MR. GIANAN'),
('MS. BATO'),
('MS. SAMBRANO'),
('MR. ONGAYO'),
('MS. PENSON'),
('MR. NATI'),
('MR. BELGICA'),
('MR. DECIPULO'),
('MR. ROSETE'),
('MR. JAMITO'),
('MR. FRANCISCO'),
('MS. CASTILLO'),
('MR. TACATA'),
('MS. ROSTROLLO'),
('MR. DELA CRUZ'),
('MR. GABIONZA');
	
INSERT INTO course_info VALUES (
	'GNED 02',
	'Ethics',
	1,
	1,
	3,
	null,
	3,
	null,
	null
),(
	'GNED 05',
	'Purposive Communication',
	1,
	1,
	3,
	null,
	3,
	null,
	null
),(
	'GNED 11',
	'Kontekstwalisadong Komunikasyon sa Filipino',
	1,
	1,
	3,
	null,
	3,
	null,
	null
),(
	'COSC 50',
	'Discrete Structures 1',
	1,
	1,
	3,
	null,
	3,
	null,
	null
),(
	'DCIT 21',
	'Introduction to Computing',
	1,
	1,
	2,
	1,
	2,
	3,
	null
),(
	'DCIT 22',
	'Computer Programming 1',
	1,
	1,
	1,
	2,
	1,
	6,
	null
),(
	'FITT 1',
	'Movement Enhancement',
	1,
	1,
	2,
	null,
	2,
	null,
	null
),(
	'NSTP 1',
	'National Service Training Program 1',
	1,
	1,
	3,
	null,
	3,
	null,
	null
),(
	'CvSU 101',
	'Institutional Orientation',
	1,
	1,
	1,
	null,
	1,
	null,
	null
);

INSERT INTO course_info VALUES (
	'GNED 01', 
	'Art Appreciation',
	1,
	2,
	3,
	null,
	3,
	null,
	null
),(
	'GNED 03',
	'Mathematics in the Modern World',
	1,
	2,
	3,
	null,
	3,
	null,
	null
),(
	'GNED 06',
	'Science, Technology and Society',
	1,
	2,
	3,
	null,
	3,
	null,
	null
),(
	'GNED 12',
	'Alamat Ng/Sa Filipino',
	1,
	2,
	3,
	null,
	3,
	null,
	'GNED 11'
),(
	'DCIT 23',
	'Computer Programming 2',
	1,
	2,
	1,
	2,
	1,
	6,
	'DCIT 22'
),(
	'ITEC 50',
	'Web Systems and Technologies',
	1,
	2,
	2,
	1,
	2,
	3,
	'DCIT 21'
),(
	'FITT 2',
	'Fitness Exercises',
	1,
	2,
	2,
	null,
	2,
	null,
	'FITT 1'
),(
	'NSTP 2',
	'National Service Training Program 2',
	1,
	2,
	3,
	null,
	3,
	null,
	'NSTP 1'
);

INSERT INTO course_info VALUES (
	'GNED 04',
	'Mga Babasahin Hinggil sa Kasaysayan ng Pilipinas',
	2,
	1,
	3,
	null,
	3,
	null,
	null
),(
	'MATH 1',
	'Analytic Geometry',
	2,
	1,
	3,
	null,
	3,
	null,
	'GNED 03'
),(
	'COSC 55',
	'Discrete Structures 2',
	2,
	1,
	3,
	null,
	3,
	null,
	'COSC 50'
),(
	'COSC 60',
	'Digital Logic Design',
	2,
	1,
	2,
	1,
	2,
	3,
	'COSC 50, DCIT 23'
),(
	'DCIT 50',
	'Object Oriented Programming',
	2,
	1,
	2,
	1,
	2,
	3,
	'DCIT 23'
),(
	'DCIT 24',
	'Information Management',
	2,
	1,
	2,
	1,
	2,
	3,
	'DCIT 23'
),(
	'INSY 50',
	'Fundamentals of Information Systems',
	2,
	1,
	3,
	null,
	3,
	null,
	'DCIT 21'
),(
	'FITT 3',
	'Physical Activities towards Health and Fitness 1',
	2,
	1,
	2,
	null,
	2,
	null,
	'FITT 1'
);

INSERT INTO course_info VALUES (
	'GNED 08',
	'Understanding the Self',
	2,
	2,
	3,
	null,
	3,
	null,
	null
),(
	'GNED 14',
	'Panitikang Panlipunan',
	2,
	2,
	3,
	null,
	3,
	null,
	null
),(
	'MATH 2',
	'Calculus',
	2,
	2,
	3,
	null,
	3,
	null,
	'MATH 01'
),(
	'COSC 65',
	'Architecture and Organization',
	2,
	2,
	2,
	1,
	2,
	3,
	'COSC 60'
),(
	'COSC 70',
	'Software Engineering 1',
	2,
	2,
	3,
	null,
	3,
	null,
	'DCIT 50, DCIT 24'
),(
	'DCIT 25',
	'Data Structures and Algorithms',
	2,
	2,
	2,
	1,
	2,
	3,
	'DCIT 23'
),(
	'DCIT 55',
	'Advanced Database Management System',
	2,
	2,
	2,
	1,
	2,
	3,
	'DCIT 24'
),(
	'FITT 4',
	'Physical Activities towards Health and Fitness 2',
	2,
	2,
	2,
	null,
	2,
	null,
	'FITT 1'
);

INSERT INTO course_info VALUES (
	'MATH 3',
	'Linear Algebra',
	3,
	1,
	3,
	null,
	3,
	null,
	'MATH 2'
),(
	'COSC 75',
	'Software Engineering 2',
	3,
	1,
	2,
	1,
	2,
	3,
	'COSC 70'
),(
	'COSC 80',
	'Operating Systems',
	3,
	1,
	2,
	1,
	2,
	3,
	'DCIT 25'
),(
	'COSC 85',
	'Networks and Communication',
	3,
	1,
	2,
	1,
	2,
	3,
	'ITEC 50'
),(
	'COSC 101',
	'CS Elective 1 (Computer Graphics and Visual Computing)',
	3,
	1,
	2,
	1,
	2,
	3,
	'DCIT 23'
),(
	'DCIT 26',
	'Applications Develompent And Emerging Technologies',
	3,
	1,
	2,
	1,
	2,
	3,
	'ITEC 50'
),(
	'DCIT 65',
	'Social and Professional Issues',
	3,
	1,
	3,
	null,
	3,
	null,
	null
);

INSERT INTO course_info VALUES (
	'GNED 09',
	'Life and Works of Rizal',
	3,
	2,
	3,
	null,
	3,
	null,
	'GNED 04'
),(
	'MATH 4',
	'Experimental Statistics',
	3,
	2,
	2,
	1,
	2,
	3,
	'MATH 2'
),(
	'COSC 90',
	'Design and Analysis of Algorithm',
	3,
	2,
	3,
	null,
	3,
	null,
	'DCIT 25'
),(
	'COSC 95',
	'Programming Languages',
	3,
	2,
	3,
	null,
	3,
	null,
	'DCIT 25'
),(
	'COSC 106',
	'CS Elective 2 (Introduction to Game Development)',
	3,
	2,
	2,
	1,
	2,
	3,
	'MATH 3, COSC 101'
),(
	'DCIT 60',
	'Methods of Research',
	3,
	2,
	3,
	null,
	3,
	null,
	'3rd Yr Standing'
),(
	'ITEC 85',
	'Information Assurance and Security',
	3,
	2,
	3,
	null,
	3,
	null,
	'DCIT 24'
),(
	'COSC 199',
	'Practicum (240 hours)',
	5,
	2,
	3,
	null,
	3,
	null,
	'Incoming 4th Yr'
);

INSERT INTO course_info VALUES (
	'ITEC 80',
	'Human Computer Interaction',
	4,
	1,
	1,
	null,
	3,
	null,
	'ITEC 85'
),(
	'COSC 100',
	'Automata Theory and Formal Languages',
	4,
	1,
	3,
	null,
	3,
	null,
	'COSC 90'
),(
	'COSC 105',
	'Intelligent Systems',
	4,
	1,
	2,
	1,
	2,
	3,
	'MATH 4, COSC 55, DCIT 50'
),(
	'COSC 111',
	'CS Elective 3 (Internet of Things)',
	4,
	1,
	2,
	1,
	2,
	3,
	'COSC 60'
),(
	'COSC 200A',
	'Undergraduate Thesis',
	4,
	1,
	3,
	null,
	1,
	null,
	'4th Yr Standing'
);

INSERT INTO course_info VALUES (
	'GNED 07',
	'The Contemporary World',
	4,
	2,
	3,
	null,
	3,
	null,
	null
),(
	'GNED 10',
	'Gender and Society',
	4,
	2,
	3,
	null,
	3,
	null,
	null
),(
	'COSC 110',
	'Numerical and Symbolic Computation',
	4,
	2,
	2,
	1,
	2,
	3,
	'COSC 60'
),(
	'COSC 200B',
	'Undergraduate Thesis II',
	4,
	2,
	3,
	null,
	1,
	null,
	'COSC 200A'
);
