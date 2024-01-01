const refreshDone = document.cookie.includes("refreshDone=true");


if (!refreshDone) {
    console.log("refreshDone (1) ===> ", refreshDone);
    console.log("refreshDone (2) ===> ", document.cookie);

    document.cookie = "user=John";
    console.log("refreshDone (3) ===> ", document.cookie);

    let name = "my name";
    let value = "John Smith"
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    console.log("refreshDone (4) ===> ", document.cookie);
    
    // document.cookie = "refreshDone=true; max-age=" + 365 * 24 * 60 * 60;
    document.cookie = "refreshDone=true; max-age=" + 5;
    console.log("refreshDone (5) ===> ", document.cookie);

    window.location.reload(true);
} else {
    console.log("Not refreshDone (0) ===> ", refreshDone);
    console.log("Not refreshDone (0) ===> ", document.cookie);
}

document.getElementById("temp").textContent = document.cookie;
