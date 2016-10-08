var getFileData = function(url) {
  $.ajax({
    url: url,
    headers: {
      "Accept": "application/vnd.github.v3.raw"
    }
  }).done(function(data) {
    // var converter = new showdown.Converter({literalMidWordUnderscores: true});
    // var html = converter.makeHtml(data);
    var html = '<img src="https://cdn.rawgit.com/sindresorhus/awesome/master/media/logo.png" class="awesome-logo">';
    html += marked(data);
    $("#content").html(html);
  })
};

$(document).ready(function(){
  $.getJSON("https://api.github.com/repos/venliong/go-awesome/git/trees/HEAD").
    done(function(data){
      for (var i = data.tree.length - 1; i >= 0; i--) {
        if(data.tree[i].path == "README.md") {
          getFileData(data.tree[i].url);
          break;
        }
      };
    });
});
