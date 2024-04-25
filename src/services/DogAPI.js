const url = "https://dog.ceo/api/breeds/image/random/";

const loadImages = async (n = 1) => {
  if (n > 50) {
    n = 50;
  }
  let response = await fetch(url + n);
  let data = await response.json();

  if (data.status == "success") {
    return data.message;
  }
  console.error(
    'Error in class DogAPI.js . Received status from api was not "success"'
  );
  return [];
};

export default {
  url,
  loadImages,
};
