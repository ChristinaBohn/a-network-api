// Time format helper
const formatTime = (timestamp) => {
  
    const date = new Date(timestamp);
  
    let hour = date.getHours();
    let minute = date.getMinutes();
    hour > 12 ? (hour -= 12) : (hour = hour);
  
    return `${hour}:${minute}`;
  };
  
  module.exports = formatTime;