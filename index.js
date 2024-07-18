import * as Carousel from "./Carousel.js";
//import axios from "axios";

// The breed selection input element.
const breedSelect = document.getElementById("breedSelect");
// The information section div element.
const infoDump = document.getElementById("infoDump");
// The progress bar div element.

// Step 0: Store your API key here for reference and easy access.
const API_KEY = "live_uTP2aVL6kUJPYYaUuTy2W2vGjSZRFNKmjs206QhnKHnULIXFFmlac6R7Yu7oFcCR";

/**
 * 1. Create an async function "initialLoad" that does the following:
 * - Retrieve a list of breeds from the cat API using fetch().
 * - Create new <options> for each of these breeds, and append them to breedSelect.
 *  - Each option should have a value attribute equal to the id of the breed.
 *  - Each option should display text equal to the name of the breed.
 * This function should execute immediately.
 */

async function initialLoad(){
  const getCats = await fetch('https://api.thecatapi.com/v1/breeds')
  const catData = await getCats.json();
  for(let i = 0; i < catData.length; i++){
    let breedName = catData[i].name;
    let nameDisplay = document.createElement("option")
    nameDisplay.innerHTML = breedName;
    nameDisplay.setAttribute('id', catData[i].id)
    breedSelect.appendChild(nameDisplay)
  }
}

initialLoad()
/**
 * 2. Create an event handler for breedSelect that does the following:
 * - Retrieve information on the selected breed from the cat API using fetch().
 *  - Make sure your request is receiving multiple array items!
 *  - Check the API documentation if you're only getting a single object.
 * - For each object in the response array, create a new element for the carousel.
 *  - Append each of these new elements to the carousel.
 * - Use the other data you have been given to create an informational section within the infoDump element.
 *  - Be creative with how you create DOM elements and HTML.
 *  - Feel free to edit index.html and styles.css to suit your needs, but be careful!
 *  - Remember that functionality comes first, but user experience and design are important.
 * - Each new selection should clear, re-populate, and restart the Carousel.
 * - Add a call to this function to the end of your initialLoad function above to create the initial carousel.
 */

async function printCatContent() {
  let selectedCat = this.options[this.selectedIndex]
  let selectCatId = selectedCat.id

  const getCatPics = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${selectCatId}&api_key=${API_KEY}`)
  const catPics = await getCatPics.json();

  console.log(catPics)
}

breedSelect.addEventListener(`change`, printCatContent)

/**
 * 3. Fork your own sandbox, creating a new one named "JavaScript Axios Lab."
 */
/**
 * 4. Change all of your fetch() functions to axios!
 * - axios has already been imported for you within index.js.
 * - If you've done everything correctly up to this point, this should be simple.
 * - If it is not simple, take a moment to re-evaluate your original code.
 * - Hint: Axios has the ability to set default headers. Use this to your advantage
 *   by setting a default header with your API key so that you do not have to
 *   send it manually with all of your requests! You can also set a default base URL!
 */
