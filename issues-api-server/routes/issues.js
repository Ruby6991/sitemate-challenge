import express from "express";

import {
  getIssues,
  createIssue,
  getIssue,
  deleteIssue,
  updateIssue,
} from "../controllers/issues.js";

const router = express.Router();

router.get("/", getIssues);

router.post("/", createIssue);

router.get("/:id", getIssue);

router.delete("/:id", deleteIssue);

router.put("/:id", updateIssue);

export default router;
