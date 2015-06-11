(function () {

  var peekElement = document.querySelector("#peek");

  // Check existence of peek element
  if (!peekElement) {
    return false;
  } else {
    // Listener Class
    var Listener = function (target, eventHandler) {
      this.target = new RegExp(target, "i");
      this.queue = "";
      this.eventHandler = eventHandler;
      this.compare = function () {
        if (this.queue.match(this.target)) {
          this.queue = "";
          this.eventHandler();
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

    // Access peekStatus with localStorage
    if (!localStorage.getItem("peekStatus")) {
      localStorage.setItem("peekStatus", "none");
    }

    // Give born a Listener object
    var peekListener = new Listener(target, handler);
    peekElement.style.display = localStorage.getItem("peekStatus");

    // Add listener for window
    window.addEventListener("keydown", function (e) {
      peekListener.queue = peekListener.queue.concat(String.fromCharCode(e.keyCode));
      peekListener.compare();
    });
  }

})();
