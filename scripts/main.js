window.onload = function () {
    let ref = window.location.search.substr(1);
    if (ref in refMap) {
        location.href = refMap[ref];
    }
}