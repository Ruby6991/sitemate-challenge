import React, { useState, useEffect } from "react";
import { getIssues, createIssue, updateIssue, deleteIssue } from "./apiService";
import "./styles.css";

function App() {
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState({ title: "", description: "" });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    loadIssues();
  }, []);

  const loadIssues = async () => {
    const data = await getIssues();
    setIssues(data);
  };

  const handleCreateIssue = async () => {
    if (editing) {
      await updateIssue(editing.id, newIssue);
    } else {
      await createIssue(newIssue);
    }
    setNewIssue({ title: "", description: "" });
    setEditing(null);
    loadIssues();
  };

  const handleEdit = (issue) => {
    setNewIssue(issue);
    setEditing(issue);
    loadIssues();
  };

  const handleDelete = async (id) => {
    await deleteIssue(id);
    loadIssues();
  };

  return (
    <div className="container">
      <h1>Issues Tracker</h1>
      <ul className="issue-list">
        {issues.map((issue) => (
          <li className="issue-item" key={issue.id}>
            <span className="issue-title">{issue.title}</span>
            <p>{issue.description}</p>
            <button onClick={() => handleEdit(issue)}>Edit</button>
            <button onClick={() => handleDelete(issue.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={newIssue.title}
          onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newIssue.description}
          onChange={(e) =>
            setNewIssue({ ...newIssue, description: e.target.value })
          }
        />
        <button onClick={handleCreateIssue}>
          {editing ? "Update Issue" : "Create Issue"}
        </button>
      </form>
    </div>
  );
}

export default App;
