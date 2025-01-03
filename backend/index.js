import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
});

app.use(express.json());

app.use(
	cors()
	// {origin: 'https://checklist-app-client.vercel.app',
	// methods: ['GET', 'POST', 'PUT', 'DELETE'],
	// allowedHeaders: ['Content-Type', 'Authorization']}
);

app.get("/", (req, res) => {
	res.json("good mourning.");
});

app.get("/student_info", (req, res) => {
	let query = ` 
    SELECT * FROM student_info
    `;

	db.query(query, (err, data) => {
		if (err) {
			return res.json(err);
		}
        
		return res.json(data);
	});
});

app.get("/student_records", (req, res) => {
	const queryParams = req.query.queryParams;
	const searchQuery = queryParams.searchQuery;
	let offset = req.query.offset;
	let query = `
        LEFT JOIN course_info ON student_records.course_code = course_info.course_code
        LEFT JOIN instructor_info ON student_records.instructor_id = instructor_info.instructor_id
    `;

	const sqlColumns = {
		year: "course_info.course_year",
		courseCode: "course_info.course_code",
		courseTitle: "course_info.course_title",
		creditUnitLec: "course_info.credit_unit_lec",
		creditUnitLab: "course_info.credit_unit_lab",
		contactHrsLec: "course_info.contact_hrs_lec",
		contactHrsLab: "course_info.contact_hrs_lab",
		yearTaken: "student_records.year_taken",
		prerequisite: "course_info.prerequisite",
		finalGrade: "student_records.final_grade",
		instructorName: "instructor_info.instructor_name",
	};

	let conditions = [];
	let parameters = [];

	const hasValue = Object.entries(queryParams).some(
		([key, value]) => key !== "searchQuery" && value === "true" && value !== "false"
	);

	if (searchQuery && !hasValue) {
		Object.values(sqlColumns).forEach((sqlColumn) => {
			conditions.push(`${sqlColumn} LIKE ?`);
			parameters.push(`%${searchQuery}%`);
		});
	} else if (searchQuery) {
		Object.entries(sqlColumns).forEach(([key, sqlColumn]) => {
			if (queryParams[key] === "true") {
				conditions.push(`${sqlColumn} LIKE ?`);
				parameters.push(`%${searchQuery}%`);
			}
		});
	}

	if (conditions.length > 0) {
		query += " WHERE (" + conditions.join(" OR ") + ")";

		if (queryParams.year !== "") {
			query += ` AND course_info.course_year LIKE ?`;
			parameters.push(`%${queryParams.year}%`);
		}
	} else {
		if (queryParams.year !== "") {
			query += ` WHERE course_info.course_year LIKE ?`;
			parameters.push(`%${queryParams.year}%`);
		}
	}

	query += " ORDER BY course_info.course_year ASC, course_info.course_sem ASC";

	const countQuery = "SELECT COUNT(*) AS totalRows FROM student_records" + query;
	pool.query(countQuery, parameters, (err, data) => {
		if (err) return res.json(err);

		const totalRows = data[0].totalRows;
		const maxOffset = Math.ceil(totalRows / 10);

		if (offset * 10 > totalRows) {
			offset = 0;
		}

		query += " LIMIT 10 OFFSET ?";
		parameters.push(offset * 10);

		query = "SELECT * FROM student_records" + query;
		pool.query(query, parameters, (err, data) => {
			if (err) return res.json(err);
			return res.json({ records: data, maxOffset, offset });
		});
	});
});

app.listen(8800, () => {
	console.log("Connected to backend!");
});
