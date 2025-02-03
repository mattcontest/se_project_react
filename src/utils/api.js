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
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}

function addItem({ name, weather, imageUrl }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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

export { getItems, deleteItem, addItem };
