const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then(
    // (res) => {
    // return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
    // }
    checkResponse
  );
}

function deleteItem(id) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function addItem({ name, weather, imageUrl }) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    }),
  }).then(checkResponse);
}

function checkResponse(res) {
  if (res.ok) {
    console.log("cargo", res);
    return res.json();
  } else {
    return Promise.reject(`Error ${res.status}`);
  }
}

export { getItems, deleteItem, addItem, checkResponse };
