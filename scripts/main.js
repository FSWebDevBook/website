const refMap = {
  "1": "https://google.com",
  "2": "https://youtube.com"
};

window.onload = function () {
    let ref = window.location.search.substr(1);
    if (ref in refMap) {
        location.href = refMap[ref];
    }
}