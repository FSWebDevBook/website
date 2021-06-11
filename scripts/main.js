window.onload = function () {
    let ref = window.location.search.substr(1);
    if (ref in refmap) {
        location.href = refmap[ref];
    } else if (ref !== "") {
        document.getElementById("nFound").style.display = "block";
    }
}