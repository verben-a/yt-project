var Youtube = function(videoId, videoUrl, videoTitle) {
    this.videoId = videoId;
    this.videoUrl = videoUrl;
    this.videoTitle = videoTitle;
}
    // something in common (papa/mama)
    // var Video = function(){}

// // spoilt ones: sasha, marina, etc.
// var Vimeo = function(){}
// var Youtbe = function(){}
// /other ideas?
// prototypal method: 

Youtube.prototype.generateHTML = function() {
    // What is "this"?
    return "<a href='https://www.youtube.com/watch?v=" + this.videoId + "'><img src=\"" + this.videoUrl + "\" style=\"default\"" + "</a><br><h3>" + this.videoTitle + "</h3>"
}



$(document).ready(function() {

    // what properties
    // - videoId
    // - url
    // - title
    // define the Youtube object :-)

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
                console.log(item);
                    // instantiating or creating a new object for Youtube
                var youtubeVideo = new Youtube(item.id.videoId, item.snippet.thumbnails.medium.url, item.snippet.title);                
                // $(".results").append("<a href='https://www.youtube.com/watch?v=" + youtube.videoId + "'><img src=\"" + youtube.videoUrl + "\" style=\"default\"" + "</a><br><h3>" + youtube.videoTitle + "</h3>");
                $('.results').append(youtubeVideo.generateHTML());
            });

        }).fail(function(data) {

        });


    });
});
