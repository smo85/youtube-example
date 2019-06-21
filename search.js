// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyCQ3knNwK0wCQCpvOEq0Jqf_ngCxchNQoc');
}

// Called when the search button is clicked in the html code
function search() {
    var query = document.getElementById('query').value;
    console.log(document.getElementById('query').value);
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: query
    });
    // Send the request to the API server, call the onSearchResponse function when the data is returned
    request.execute(onSearchResponse);
}
// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    const listItems = response.result.items;
    console.log(listItems);
    document.getElementById('response').innerHTML = responseString;
    const responseOutput = document.getElementById('response');
    // console.log(responseString.items.title);
    // var listItems = responseString.items.title;

    var output = '';
    for (let i = 0; i < listItems.length; ++i) {
      const vidTitle = listItems.snippet.title;
      output += '<li>' + vidTitle + '</li>';
    }
    output = '<ul>' + output + '</ul>';
    responseOutput.innerHTML = output;


}
