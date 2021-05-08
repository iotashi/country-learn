// get the country details to display
function get_details(country_name){

    let selected_country = countries.filter((country) => country_name === country["name"])[0];
    document.getElementById("display_details").style.display = "block !important";


    document.getElementById("flag").src = selected_country["flag"];
    document.getElementById("country-name").innerHTML = selected_country["name"];
    document.getElementById("country-region").innerHTML = selected_country["region"];
    document.getElementById("country-subregion").innerHTML = selected_country["subregion"];

    document.getElementById("country-capital").innerHTML = "Capital: " + selected_country["capital"];
    document.getElementById("country-population").innerHTML = "Population: " + selected_country["population"];
    document.getElementById("country-currency").innerHTML = "Currency: " + selected_country["currencies"][0]["name"] + "( " + selected_country["currencies"][0]["symbol"] + " )";
    document.getElementById("country-language").innerHTML = "Language: " + selected_country["languages"][0]["name"];
    document.getElementById("country-timezone").innerHTML = "Timezone: " + selected_country["timezones"][0];
    document.getElementById("country-latitude").innerHTML = "Latitude: " + selected_country["latlng"][0];
    document.getElementById("country-longitude").innerHTML = "Longitude: " + selected_country["latlng"][1];
    document.getElementById("country-border").innerHTML = "Border: " + selected_country["borders"];
}

// get the country from search input
function get_country(){
    let input_value = document.getElementById("search").value;
    let filtered_countries = countries.filter((country) => country["name"].toLowerCase().startsWith(input_value.toLowerCase()) === true);
    countries = filtered_countries;
}
