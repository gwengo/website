// Click a framed picture to swap in one that is not on the wall yet.
(function () {
  var all = [["winter","a red cardinal on a snowy branch"],["spring","a hummingbird among blossoms"],["summer","fireflies over a pond with cattails and lilies"],["autumn","a blue jay under maple leaves"],["dove","a bleeding heart dove under bleeding heart flowers"],["owl","a barn owl in front of the moon"],["moth","a pale blue butterfly pinned among sparkles"],["locket","a gold eye locket that blinks"]];
  var frames = [].slice.call(document.querySelectorAll(".frame"));
  frames.forEach(function (f) {
    f.onclick = function () {
      var up = frames.map(function (x) { return x.dataset.pic; });
      var i = all.findIndex(function (p) { return p[0] === f.dataset.pic; });
      for (var k = 1; k < all.length; k++) {
        var p = all[(i + k) % all.length];
        if (up.indexOf(p[0]) < 0) {
          f.dataset.pic = p[0];
          f.querySelector("source").srcset = "frames/" + p[0] + ".png";
          var img = f.querySelector("img");
          img.src = "frames/" + p[0] + ".gif"; img.alt = p[1];
          return;
        }
      }
    };
  });
})();
