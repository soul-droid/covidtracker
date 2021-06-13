let country_list = [

    { name: 'Malaysia', code: 'MY' },

];

// SELECT SEARCH COUNTRY ELEMENTS
const search_country_element = document.querySelector(".search-country");
const country_list_element = document.querySelector(".country-list");
const chang_country_btn = document.querySelector(".change-country");
const close_list_btn = document.querySelector(".close");
const input = document.getElementById('search-input')

// CREATE TE COUNTRY LIST
function createCountryList() {
    const num_countries = country_list.length;

    let i = 0, ul_list_id;

    country_list.forEach((country, index) => {
        if (index % Math.ceil(num_countries / num_of_ul_lists) == 0) {
            ul_list_id = `list-${i}`;
            country_list_element.innerHTML += `<ul id='${ul_list_id}'></ul>`;
            i++;
        }

        document.getElementById(`${ul_list_id}`).innerHTML += `
            <li onclick="fetchData('${country.name}')" id="${country.name}">
            ${country.name}
            </li>
        `;
    })
}

let num_of_ul_lists = 3;
createCountryList();

// SHOW/HIDE THE COUTRY LIST ON CLICK EVENT
chang_country_btn.addEventListener("click", function () {
    input.value = "";
    resetCountryList();
    search_country_element.classList.toggle("hide");
    search_country_element.classList.add("fadeIn");
});

close_list_btn.addEventListener("click", function () {
    search_country_element.classList.toggle("hide");
});

country_list_element.addEventListener("click", function () {
    search_country_element.classList.toggle("hide");
});

// COUNTRY FILTER
/* input event fires up whenever the value of the input changes */
input.addEventListener("input", function () {
    let value = input.value.toUpperCase();

    country_list.forEach(country => {
        if (country.name.toUpperCase().startsWith(value)) {
            document.getElementById(country.name).classList.remove("hide");
        } else {
            document.getElementById(country.name).classList.add("hide");
        }
    })
})

// RESET COUNTRY LIST (SHOW ALL THE COUNTRIES )
function resetCountryList() {
    country_list.forEach(country => {
        document.getElementById(country.name).classList.remove("hide");
    })
}