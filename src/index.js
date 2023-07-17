import view from './View';
import API from './API';

const form = document.getElementById('locationSearch');
const search = document.getElementById('location');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = await API.requestCurrent(search.value);
  if (data) {
    view.showResults(data);
  }
});
