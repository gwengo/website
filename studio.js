// Your Instagram. Fill these two in, then save.
var HANDLE = "";   // example: "yourname"
var POSTS = [];    // newest first, example: ["https://www.instagram.com/p/ABC123/"]

(function () {
  var grid = document.getElementById("studio-grid");
  if (!grid) return;
  var link = document.getElementById("studio-link");
  if (HANDLE) {
    link.href = "https://www.instagram.com/" + HANDLE + "/";
    link.textContent = "Follow along on Instagram: @" + HANDLE;
  }
  POSTS.slice(0, 6).forEach(function (url) {
    var m = url.match(/instagram\.com\/(?:[^\/]+\/)?(p|reel)\/([\w-]+)/);
    if (!m) return;
    var f = document.createElement("iframe");
    f.src = "https://www.instagram.com/" + m[1] + "/" + m[2] + "/embed/";
    f.title = "Instagram post";
    f.loading = "lazy";
    grid.appendChild(f);
  });
  if (!grid.children.length) {
    for (var i = 1; i <= 6; i++) {
      var d = document.createElement("div");
      d.className = "placeholder";
      d.textContent = "[collage " + i + "]";
      grid.appendChild(d);
    }
  }
})();
