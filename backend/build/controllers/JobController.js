export class JobController {
    //Jobs
    static id = 0;
    static jobs = [
        {
            id: this.id++,
            company: "apple",
            position: "front-end",
        },
        {
            id: this.id++,
            company: "amazon",
            position: "back-end",
        },
        {
            id: this.id++,
            company: "microsoft",
            position: "lua-developer",
        }
    ];
    static async getAllJobs(req, res) {
        res.json(this.jobs);
    }
    static async getJobById(req, res) {
        const { id } = req.params;
        const job = this.jobs.find((job => job.id === parseInt(id)));
        if (!job) {
            return res.status(404).json({ message: `No Job founded with id: ${id}` });
        }
        res.status(200).json(job);
    }
    static async createJob(req, res) {
        const job = req.body;
        if (!job.company || !job.position) {
            res.status(400).send("Please fill the job's company and position");
            return;
        }
        job.id = this.id++;
        this.jobs.push(job);
        res.status(201).send('Job added succesfully!');
    }
    static async updateJob(req, res) {
        const { id } = req.params;
        const job = this.jobs.find(job => job.id == parseInt(id));
        if (!job) {
            res.status(400).send("Please send a valid job id");
            return;
        }
        const jobUpdated = req.body;
        if (!jobUpdated.company || !jobUpdated.position) {
            res.status(400).send("Please fill the job's company and position");
            return;
        }
        job.company = jobUpdated.company;
        job.position = jobUpdated.position;
        res.status(200).json(job);
    }
    static async deleteJob(req, res) {
        const { id } = req.params;
        const job = this.jobs.find(job => job.id == parseInt(id));
        if (!job) {
            res.status(400).send("Please send a valid job id");
            return;
        }
        this.jobs = this.jobs.filter(job => job.id != parseInt(id));
        res.status(200).send('Job deleted');
    }
}
