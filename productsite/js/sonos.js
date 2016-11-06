$(document).ready(function () {
    console.log("ready!");

    $('#scroll-om-te-beginnen').addClass("pulse");

    $("#pointOne").click(function () {
        //alert( "Op li geklikt" );
        ToonKenmerk("pointOne");
    });


    $("#pointTwo").click(function () {
        //alert( "Op li geklikt" );
        ToonKenmerk("pointTwo");
    });

    $("#pointThree").click(function () {
        //alert( "Op li geklikt" );
        ToonKenmerk("pointThree");
    });

    $("#pointFour").click(function () {
        //alert( "Op li geklikt" );
        ToonKenmerk("pointFour");
    });

    $("#pointFive").click(function () {
        //alert( "Op li geklikt" );
        ToonKenmerk("pointFive");
    });


});

function ToonKenmerk(kenmerk) {
    $.ajax({
        url: "kenmerken.json",
        //force to handle it as text
        dataType: "text", success: function (data) {
            //data downloaded so we call parseJSON function
            //and pass downloaded data
            var json = $.parseJSON(data);
            //now json variable contains data in json format
            //let's display a few items
            switch (kenmerk) {
                case "pointOne":
                    $('#results').html('<article id="kenmerk_art"><h3>' + json.kenmerken[0].titel + '</h3><p>' + json.kenmerken[0].paragraaf + '</p></article>');
                    break;
                case "pointTwo":
                    $('#results').html('<article id="kenmerk_art"><h3>' + json.kenmerken[1].titel + '</h3><p>' + json.kenmerken[1].paragraaf + '</p></article>');
                    break;
                case "pointThree":
                    $('#results').html('<article id="kenmerk_art"><h3>' + json.kenmerken[2].titel + '</h3><p>' + json.kenmerken[2].paragraaf + '</p></article>');
                    break;
                case "pointFour":
                    $('#results').html('<article id="kenmerk_art"><h3>' + json.kenmerken[3].titel + '</h3><p>' + json.kenmerken[3].paragraaf + '</p></article>');
                    break;
                case "pointFive":
                    $('#results').html('<article id="kenmerk_art"><h3>' + json.kenmerken[4].titel + '</h3><p>' + json.kenmerken[4].paragraaf + '</p></article>');
                    break;
            }
        }
    })
}



