

const GetFullDateTime = (start_date) => {
  const showDate = new Date(start_date);
  const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let hours = showDate.getHours();
  const ampm = hours >= 12 ? "pm" : "am" ;
  hours = hours % 12;
  hours = hours ? hours : 12;
  let minutes = showDate.getMinutes();
  minutes = minutes < 10 ? '0'+minutes : minutes;
  const getFullDate = `${weekDays[showDate.getDay()]} ${months[showDate.getMonth()]} ${showDate.getDate()}, ${showDate.getFullYear()}, ${hours}:${minutes}${ampm}`;
  return getFullDate;
};

export default GetFullDateTime;
