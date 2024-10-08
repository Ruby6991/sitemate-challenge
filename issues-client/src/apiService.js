const API_URL = "http://localhost:5000/api/issues";

export async function getIssues() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function getIssue(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function createIssue(issue) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(issue),
  });
  return response.json();
}

export async function updateIssue(id, issue) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(issue),
  });
  return response.json();
}

export async function deleteIssue(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
