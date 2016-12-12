$(function(){
  $.ajax({
    url: "http://api.ideiadoluiz.com.br/gyukaku/public/generalData",
    success: function(response) {
      // $("#tableLocationBody")
      //   .append("<tr><td>"+ response.locations[0].id
      //         + "</td><td>"+ response.locations[0].location
      //         + "</td></tr>");
      //
      // $("#tableLocationBody")
      //   .append("<tr><td>"+ response.locations[1].id
      //         + "</td><td>"+ response.locations[1].location
      //         + "</td></tr>");

      var i = 0;
      while(i < response.locations.length) {
        var myLocation = response.locations[i];
        var myHtml =
            "<tr>" +
               "<td>" +
                  myLocation.id +
               "</td>"+
               "<td>" +
                  myLocation.location +
               "</td>"+
             "</tr>";

        $("#tableLocationBody").append(myHtml);
        i = i + 1;
      }
    },
    error: function(err) {
      alert("error: " + err);
    },
  });

  $.ajax({
    url: "http://api.ideiadoluiz.com.br/postit/",
    success: function(response) {
       var importedSVGRootElement = document.importNode(response.documentElement,true);
      //append the imported SVG root element to the appropriate HTML element
      $("#wow").append(importedSVGRootElement);
    }
  });

});
