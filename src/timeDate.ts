const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();

export const now = [
  year + "/" + month + "/" + date + "/" + hours + ":" + minutes,
];
