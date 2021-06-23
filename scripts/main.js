window.onload = function () {
    let ref = window.location.search.substr(1);
    if (ref in refmap) {
        document.getElementById("redirect").style.display = "block";
        document.getElementById("refId").textContent = ref;
        location.href = refmap[ref];
    } else if (ref !== "") {
        document.getElementById("nFound").style.display = "block";
    }
}