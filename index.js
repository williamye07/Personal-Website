window.onload = function() {
    document.getElementById("nav_bar").scrollIntoView();
}

function aboutView() {
    let e = document.getElementById("about_view");
    SmoothVerticalScrolling(e, 275, "top");
}

function projectView() {
    let e = document.getElementById("project_view");
    SmoothVerticalScrolling(e, 275, "top");
}

function contactView() {
    let e = document.getElementById("contactTitle");
    SmoothVerticalScrolling(e, 275, "top");
}

function openResume() {
    window.open("williamye_3B_Resume_fullstack.pdf")
    // window.location.href = "williamye_4A_Resume_fullstack.pdf"
}

function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if (where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}

