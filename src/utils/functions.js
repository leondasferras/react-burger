export const formattedDate = (dateToFormat) => {
  const date = new Date();
  const orderDate = new Date(dateToFormat);
  const hours = orderDate.getHours();
  let minutes = orderDate.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  date.setHours(0, 0, 0, 0);
  orderDate.setHours(0, 0, 0, 0);
  const difference = (date - orderDate) / (24 * 60 * 60 * 1000);
  let timePrefix;
  if (difference === 0) timePrefix = "Сегодня";
  else if (difference === 1) timePrefix = "Вчера";
  else timePrefix = difference + "дней назад";
  const timeZone = orderDate.getTimezoneOffset() / 60;

  return (
    timePrefix +
    ", " +
    hours +
    ":" +
    minutes +
    " i-GMT" +
    (timeZone > 0 ? timeZone : "+" + timeZone * -1)
  );
};