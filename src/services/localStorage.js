export const setLocalStorage = ({ name, value }) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getLocalStorage = name => {
  const storage = JSON.parse(localStorage.getItem(name));

  return storage;
};

export const removeLocalStorage = name => {
  localStorage.removeItem(name);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
