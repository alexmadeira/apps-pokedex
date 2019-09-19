export const setLocalStorage = ({ name, value, expiry }) => {
  const now = new Date().getTime();
  const expiryTime = expiry + now;

  localStorage.setItem(name, JSON.stringify({ value, expiryTime }));
};

export const getLocalStorage = name => {
  const now = new Date().getTime();
  const storage = JSON.parse(localStorage.getItem(name));

  if (!storage) {
    return false;
  }

  if (now > storage.expiryTime) {
    localStorage.clear();
    return false;
  }
  return storage.value;
};
