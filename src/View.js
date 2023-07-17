const view = (() => {
  const showResults = (weatherObject) => {
    const welcome = document.querySelector('.welcome');
    welcome.classList.add('inactive');
    const content = document.querySelector('.info');
    content.classList.add('active');
    const locationTitle = document.getElementById('location-title');
    locationTitle.textContent = weatherObject.name;
    const regionTitle = document.getElementById('region-title');
    regionTitle.textContent = weatherObject.region;
    const icon = document.getElementById('icon');
    icon.src = weatherObject.icon;
    const condition = document.getElementById('condition');
    condition.textContent = weatherObject.condition;

    const temp = document.getElementById('temp');
    temp.textContent = weatherObject.temp;
    const feels = document.getElementById('feel');
    feels.textContent = `Feels like ${weatherObject.feelslike}`;
  };

  return { showResults };
})();

export default view;
