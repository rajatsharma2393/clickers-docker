let clicksData = {};

async function recordClicks() {
  let date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let key = hours + ":" + minutes;
  let count = clicksData[key] ? clicksData[key] + 1 : 1;
  clicksData[key] = count;
  return {
    success: true
  };
}

async function getClicks() {
  return { success: true, clicks: clicksData };
}

module.exports = {
  recordClicks,
  getClicks
};
