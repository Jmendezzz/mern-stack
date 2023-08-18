import mongoose from "mongoose";
import { JobStatus } from "../enums/JobStatusEnum.js";
import { JobType } from "../enums/JobType.js";

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: Object.values(JobStatus),
      default: JobStatus.PENDING,
    },
    jobType: {
      type: String,
      enum: Object.values(JobType),
      default: JobType.FULL_TIME,
    },
    jobLocation:{
        type:String,
        default:'Armenia'
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Job',JobSchema);
