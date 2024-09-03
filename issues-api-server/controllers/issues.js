import { v4 as uuid } from "uuid";

// Hardcoded issues
let issues = [
  { id: 1, title: "Issue 1", description: "Description of issue 1" },
  { id: 2, title: "Issue 2", description: "Description of issue 2" },
];

// Get all issues
export const getIssues = (req, res) => {
  console.log(`Current Issues: ${issues}`);

  res.json(issues);
};

// Create a new issue
export const createIssue = (req, res) => {
  const newIssue = {
    title: req.body.title,
    description: req.body.description,
  };

  issues.push({ ...newIssue, id: uuid() });

  console.log(`Issue [${newIssue.title}] added to the list.`);
  res.status(201).json(newIssue);
};

// Get a single issue by ID
export const getIssue = (req, res) => {
  const issue = issues.find((i) => i.id === parseInt(req.params.id));
  if (!issue) return res.status(404).send("Issue not found");
  res.json(issue);
};

// Delete an issue
export const deleteIssue = (req, res) => {
  const issueIndex = issues.findIndex((i) => i.id === parseInt(req.params.id));
  if (issueIndex === -1) return res.status(404).send("Issue not found");

  const deletedIssue = issues.splice(issueIndex, 1);
  console.log(`Issue with id ${req.params.id} has been deleted`);
  res.json(deletedIssue);
};

// Update an issue
export const updateIssue = (req, res) => {
  const issue = issues.find((i) => i.id === parseInt(req.params.id));
  if (!issue) return res.status(404).send("Issue not found");

  issue.title = req.body.title;
  issue.description = req.body.description;

  console.log(
    `title has been updated to ${req.body.title}.description has been updated to ${req.body.description}`
  );

  res.json(issue);
};
