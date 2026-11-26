// Your Instagram. Fill these two in, then save.
var HANDLE = "cosmerecowboy";
// Leave POSTS empty to show the whole profile.
// To pick posts yourself, add links: ["https://www.instagram.com/p/ABC123/"]
var POSTS = [];

(function () {
  var grid = document.getElementById("studio-grid");
  if (!grid) return;
  function frame(src, title, cls) {
    var f = document.createElement("iframe");
    f.src = src; f.title = title; f.loading = "lazy"; f.className = cls;
    grid.appendChild(f);
  }
  POSTS.slice(0, 6).forEach(function (url) {
    var m = url.match(/instagram\.com\/(?:[^\/]+\/)?(p|reel)\/([\w-]+)/);
    if (!m) return;
    frame("https://www.instagram.com/" + m[1] + "/" + m[2] + "/embed/", "Instagram post", "post");
  });
  if (!grid.children.length && HANDLE) {
    frame("https://www.instagram.com/" + HANDLE + "/embed/", "Instagram profile @" + HANDLE, "profile");
  }
})();
