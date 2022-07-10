export const useGetDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  if (minutes > 10) {
    `0${minutes}`;
  }
  const now = year + "/" + month + "/" + date + "/" + hours + ":" + minutes;

  console.log("now", now);

  return { now };
};
