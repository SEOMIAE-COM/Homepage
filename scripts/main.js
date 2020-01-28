/*
Variable definitions
*/
var setupUI = null;

/*
Function definitions
*/
function main() {
    console.log("Script - Main has been called")

    setupUI();
}

/*
Assign value to pre-defined variables
*/
setupUI = function () {
    console.log("UI setup");
    
    // highlight current page link
    const pagePaths = ["/kr/about-the-author/", "/kr/stories/"]
    const pathname = location.pathname;

    const currentPageIndex = pagePaths.indexOf(pathname);

    if (currentPageIndex == -1) {
        // DO NOTHING
        console.log("page - unidentified pathname");
    }
    else {
        const listItems = document.querySelectorAll(".site_navigation_listItem");
        listItems[currentPageIndex].classList.add("selected");
    }
}

/*
main called
*/
main();