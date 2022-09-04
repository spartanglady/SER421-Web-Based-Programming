
// 1. Rename the green “Go Fetch!” button at the end of the search bar at the bottom of the page to “Search!”
document.getElementsByClassName("txt")[0].innerHTML="Search!"

// 2. Output to the console the number of listitem <li> tags in the page
document.getElementsByTagName("li")

// 3. Output to the console the value in the search bar (you must get this from the search bar not anywhere else on the page)
document.getElementById("q").value

// 4. Make the dog in the lower right corner go away
const dogImage = document.getElementsByTagName("img")[0]
dogImage.remove()
