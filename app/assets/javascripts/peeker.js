(function (window, document, undefined) {

  // Find peek element
  var peekElement = document.querySelector("#peek");

  // Check existence of peek element
  if (!peekElement)
    return false;

  // Listener Class
  var Listener = function (target, handler) {
    this.target = new RegExp(target, "i");
    this.queue = "";
    this.handler = handler;
    this.compare = function () {
      if (this.queue.match(this.target)) {
        this.queue = "";
        this.handler();
      }
    };
  };

  // Target
  var target = "peek";

  // Handler
  var handler = function () {
    peekElement.style.display = (localStorage.getItem("peekStatus") == "none") ? "block" : "none";
    localStorage.setItem("peekStatus", peekElement.style.display);
  };

  // Set peekStatus with localStorage
  if (!localStorage.getItem("peekStatus"))
    localStorage.setItem("peekStatus", "none");

  // Give born to a Listener object
  var peekListener = new Listener(target, handler);
  peekElement.style.display = localStorage.getItem("peekStatus");

  // Hook listener on window
  window.addEventListener("keydown", function (e) {
    peekListener.queue = peekListener.queue.concat(String.fromCharCode(e.keyCode));
    peekListener.compare();
  });

})(window, document);
