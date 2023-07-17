export default class API {
  static key = 'cdd3d59615214b25bba33931231707';

  static async requestCurrent(location) {
    const requestURL = `https://api.weatherapi.com/v1/current.json?key=${API.key}&q=${location}`;
    console.log(requestURL);
    try {
      const data = await fetch(requestURL, { mode: 'cors' });
      if (!data.ok) {
        throw new Error('Location not found.');
      }
      const jsonData = await data.json();
      const processedData = API.processData(jsonData);
      return processedData;
    } catch (error) {
      alert(error);
    }
    return null;
  }

  static processData(dataObject) {
    console.log(dataObject);
    const { current, location } = dataObject;
    const { region, name } = location;

    const condition = current.condition.text;
    const { icon } = current.condition;
    const temp = current.temp_f;
    const feelslike = current.feelslike_f;

    return {
      name, region, condition, temp, feelslike, icon,
    };
  }
}
