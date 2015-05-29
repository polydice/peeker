// Use localStorage to save peek status
if (!localStorage.getItem("peek_status")){
  localStorage.setItem("peek_status", "none");
}

// Add listener for window
window.addEventListener("keydown", function(e){
  peek_listener.queue = peek_listener.queue.concat(String.fromCharCode(e.keyCode));
  peek_listener.compare();
});

// Listener Class
var Listener = function(target, event_handler){
  this.target = new RegExp(target, "i");
  this.queue = new String("");
  this.event_handler = event_handler;

  // Compare with target and queue
  this.compare = function(){
    if (this.queue.match(this.target)) {
      this.refresh_queue();
      this.event_handler();
    }
  }

  // Refresh queue
  this.refresh_queue = function(){
    this.queue = new String("");
  }
};

// Toggle toggle
var peek_toggler = function(mode){
  peek_element.style.display = (localStorage["peek_status"] == "none") ? "block" : "none";
  localStorage["peek_status"] = peek.style.display;
}

// Initialize peek status with localStorage
var peek_initialize = function(){
  if (document.getElementById("peek")){
    peek_element = document.getElementById("peek");
    peek_element.style.display = localStorage.getItem("peek_status");
  }else{
    setTimeout(peek_initialize, 15);
  }
}

var peek_element;
var peek_listener = new Listener("peek", peek_toggler);
peek_initialize();
