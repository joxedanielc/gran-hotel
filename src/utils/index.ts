const getTimezone = () => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return timeZone;
};

export const localDateTimeToUTC = (localDateTime: string) => {
  const [date, time] = localDateTime.split("T");
  const formattedDate = new Date(`${date}T${time}`);
  const utcDateTime = formattedDate.toLocaleString("en-US", {
    timeZone: getTimezone(),
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const [utcDate, utcTime] = utcDateTime.split(", ");
  return `${utcDate.split("/").reverse().join("-")}T${utcTime}`;
};
