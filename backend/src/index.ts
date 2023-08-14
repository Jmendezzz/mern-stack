import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

const API_BASE_URL = '/api/v1'

const app = express();

app.use(express.json());

//Jobs
let id = 0;
const jobs = [
  {
    id: id++,
    company: "apple",
    position: "front-end",
  },
  {
    id: id++,
    company: "amazon",
    position: "back-end",
  },
	{
    id: id++,
    company: "microsoft",
    position: "lua-developer",
  },
];

// GET ALL JOBS
app.get(`${API_BASE_URL}/jobs`, (req,res)=>{
	res.json(jobs);
});
// GET JOB BY ID
app.get(`${API_BASE_URL}/jobs/:id`,(req,res)=>{
	const {id}  = req.params;
	const job = jobs.find((job=> job.id  === parseInt(id)));
	if(!job){
		return res.status(404).json({message:`No Job founded with id: ${id}`})
	}
	res.status(200).json(job);
})
// CREATE A JOB
app.post(`${API_BASE_URL}/jobs`, (req,res)=>{

	const job = req.body;

	if( !job.company || !job.position){
		res.status(400).send("Please fill the job's company and position");
		return;
	}
	job.id = id++;
	jobs.push(job);
	res.status(201).send('Job added succesfully!');
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "Data accepted" });
});
app.get("/", (req, res) => {
  res.send("Hello world this is to easy buddy.");
});

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
