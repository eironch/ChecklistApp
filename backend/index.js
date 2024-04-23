import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

app.use(express.json())
app.use(cors())

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Successfully connected to the database.');
});

app.get("/student_records", (req, res) => {
    const queryParams = req.query;
    const searchQuery = queryParams.searchQuery;
    let query =  `
    SELECT * FROM  student_records
    LEFT JOIN course_info ON student_records.course_code = course_info.course_code
    LEFT JOIN instructor_info ON student_records.instructor_id = instructor_info.instructor_id
    `;
    
    const sqlColumns = {
        year: 'course_info.course_year',
        courseCode: 'course_info.course_code',
        courseTitle: 'course_info.course_title',
        creditUnitLec: 'course_info.credit_unit_lec',
        creditUnitLab: 'course_info.credit_unit_lab',
        contactHrsLec: 'course_info.contact_hrs_lec',
        contactHrsLab: 'course_info.contact_hrs_lab',
        yearTaken: 'student_records.year_taken',
        prerequisite: 'course_info.prerequisite',
        finalGrade: 'student_records.final_grade',
        instructorName: 'instructor_info.instructor_name'
    };

    let conditions = [];
    let parameters = [];

    const hasValue = Object.entries(req.query).some(([key, value]) =>
        key !== "searchQuery" && value === "true" && value !== "false"
    );

    if (searchQuery && !hasValue) {
        Object.values(sqlColumns).forEach(sqlColumn => {
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
            query += `WHERE course_info.course_year LIKE ?`;
            parameters.push(`%${queryParams.year}%`);
        }
    }

    db.query(query, parameters, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


app.listen(8800, () => {
    console.log("Connected to backend!")
})