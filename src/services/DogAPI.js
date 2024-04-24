const dogAPI = {
  url: "https://dog.ceo/api/breeds/image/random/",

  async loadImages(n = 1) {
    if (n > 50) {
      n = 50;
    }
    let response = await fetch(this.url + n);
    let data = await response.json();

    if (data.status == 'success') {
        return data.message;
    }
    console.error('Error in class DogAPI.js . Received status from api was not "success"')
    return [];
  },
};

export default dogAPI;
