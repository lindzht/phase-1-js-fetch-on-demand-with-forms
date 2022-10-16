// Add event listeners to capture form data and override a form's default behavior
// Fetch data based on what the user types into that form
// Display that data on the page


const init = () => {
    //FORM ADD EVENT LISTENER 
    const form = document.querySelector("form");
    
    //FORM EVENT LISTENER
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const requestedID = event.target.searchByID.value;
        
        //CALL FETCH DATA 
        fetchData(requestedID);

        //RESET FORM
        form.reset();
    });

    //FETCH DATA 
    function fetchData (requestedID){

        fetch(`http://localhost:3000/movies/${requestedID}`)
        .then(response => response.json())
        .then( movie => {
            const htmlElementH4 = document.querySelector("section#movieDetails h4");
            const htmlElementP = document.querySelector("p");

            //ADD TO DOM
            const movieTitle = document.createElement("p");
            const movieSummary = document.createElement("p");

            htmlElementH4.innerText = movie.title;
            htmlElementP.innerText = movie.summary;
        })
    } 
}

document.addEventListener('DOMContentLoaded', init);
