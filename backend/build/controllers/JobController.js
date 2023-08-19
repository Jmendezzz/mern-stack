import Job from '../models/JobModel.js';
export class JobController {
    id = 2;
    jobs = [];
    async getAllJobs(req, res) {
        const jobs = await Job.find({});
        res.json(jobs);
    }
    async getJobById(req, res) {
        const { id } = req.params;
        try {
            const job = await Job.findById(id);
            res.status(200).json(job);
        }
        catch (error) {
            return res.status(404).json({ message: `No Job founded with id: ${id}` });
        }
    }
    async createJob(req, res) {
        const job = req.body;
        try {
            const jobStored = await Job.create(job);
            res.status(201).json({ msg: "Job added succesfully!", jobStored });
        }
        catch (error) {
            res.status(500).send('Something went wrong');
        }
    }
    async updateJob(req, res) {
        const { id } = req.params;
        const dataUpdated = req.body;
        console.log(dataUpdated);
        try {
            const jobUpdated = await Job.findByIdAndUpdate(id, dataUpdated, {
                new: true
            });
            res.status(200).json(jobUpdated);
        }
        catch (error) {
            console.log(error);
            res.status(400).send("Please send a valid job id");
        }
    }
    async deleteJob(req, res) {
        const { id } = req.params;
        try {
            const removedJob = Job.findByIdAndDelete(id);
            res.status(200).json(removedJob);
        }
        catch (error) {
            res.status(400).send("Please send a valid job id");
        }
    }
}
