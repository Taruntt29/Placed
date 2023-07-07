export function setToken(token) {
  localStorage.setItem("pplacdtoken", token);
}

export function removeToken() {
  localStorage.removeItem("pplacdtoken");
}
export function clearStorage() {
  localStorage.clear();
}

export function getToken() {
  const token = localStorage.getItem("pplacdtoken");
  if (token) {
    return token;
  } else {
    return null;
  }
}
