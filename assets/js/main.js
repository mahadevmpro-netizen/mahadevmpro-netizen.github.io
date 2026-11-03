// Click any image inside a <button class="zoom"> to open it larger. No libraries needed.
(function () {
  var buttons = document.querySelectorAll("button.zoom");
  if (!buttons.length || typeof HTMLDialogElement === "undefined") return;

  var dlg = document.createElement("dialog");
  dlg.className = "lb";
  dlg.setAttribute("aria-label", "Enlarged image");
  dlg.innerHTML = '<button type="button" aria-label="Close enlarged image">Close</button><img alt=""><p></p>';
  document.body.appendChild(dlg);
  var big = dlg.querySelector("img");
  var cap = dlg.querySelector("p");

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var small = b.querySelector("img");
      big.src = b.getAttribute("data-large") || small.src;
      big.alt = small.alt;
      cap.textContent = small.alt;
      dlg.showModal();
    });
  });
  dlg.querySelector("button").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
})();
