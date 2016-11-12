$(document).ready(function() {



    $("form").submit(function(event) {
        event.preventDefault();

        //prepare the request
        var request = {
            part: "snippet",
            q: $("#search").val(),
            key: "AIzaSyDtVCBq96FsRaLCDibG_hNVMvJg_hwEMf4"
        };
        // console.log(request);
        $.getJSON("https://www.googleapis.com/youtube/v3/search", request).done(function(results) {
            $.each(results.items, function(index, item) {
                $(".results").append(item.snippet.thumbnails.medium.url + "<br>" + item.snippet.title);
            });

        }).fail(function(data) {

        });
    });
});

// request.execute(function(response) {
//     var str = JSON.stringify(response.result);
//     $('#search-container').html('<pre>' + str + '</pre>');
//   });


//execute the request
// request.execute(function(response) {
//   var results = response.result;
//   $.each(results.items, function(index,item) {
//     console.log(item);
//   });


// function init(){
//   gapi.client.setApiKey("AIzaSyDtVCBq96FsRaLCDibG_hNVMvJg_hwEMf4");
//   gapi.client.load("youtube", "v3", function() {
//     //yt api is ready
//   });
// }
