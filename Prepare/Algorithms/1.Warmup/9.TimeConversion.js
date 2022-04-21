function timeConversion(s) {
  let time = s.match(/\d{2}/g);

  if (time[0] === "12") time[0] = "00";
  if (s.indexOf("PM") > -1) time[0] = parseInt(time[0]) + 12;

  return time.join(":");
}