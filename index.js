let searchChar = document.getElementById("searchInput");

searchChar.addEventListener('keyup', Search)

function Search(){
    let username = searchChar.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name')

    for (let counter = 0; counter<allNamesDOMCollection.length; counter++){
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
    
        if (currentName.includes(username)) {
            allNamesDOMCollection[counter].style.display = 'block';
        } else {
            allNamesDOMCollection[counter].style.display = 'none';
        }
    }

   
    
}

