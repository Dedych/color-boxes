export const getColor = () => {
  return new Promise((resolve, reject) => {
    var url = "http://colormind.io/api/";
    var data = {
      model: "default",
    };

    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200) {
          var palette = JSON.parse(http.responseText).result;
          resolve(palette);
        } else {
          reject("Ошибка запроса: " + http.statusText);
        }
      }
    };

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  });
};
