(function() {
  var Keyboard;

  Keyboard = function(source) {
    this.map = {
      "esc": "besc",
      "f1": "bf1",
      "f2": "bf2",
      "f3": "bf3",
      "f4": "bf4",
      "f5": "bf5",
      "f6": "bf6",
      "f7": "bf7",
      "f8": "bf8",
      "f9": "bf9",
      "f10": "bf10",
      "f11": "bf11",
      "f12": "bf12",
      "~": "btilda",
      "-": "bminus",
      "_": "bminus",
      "+": "bplus",
      "=": "bplus",
      "[": "bsqbro",
      "]": "bscbrc",
      ";": "bsemicolon",
      ":": "bsemicolon",
      "'": "bapostrophe",
      "\"": "bapostrophe",
      "enter": "benter",
      ",": "bcomma",
      ".": "bpoint",
      "\\": "bslash",
      "|": "bslash",
      "/": "bslash",
      "?": "bquestion",
      "shift": "bshift",
      "shiftr": "bshiftr",
      "ctrl": "bctrl",
      "win": "bwin",
      "alt": "balt",
      "altr": "baltr",
      "winr": "bwinr",
      "menu": "bmenu",
      "ctrlr": "bctrlr"
    };
    return this;
  };

  Keyboard.prototype.getButtonClass = function(alias) {
    return this.map[alias] || "b" + alias;
  };

  Keyboard.prototype.pressButton = function(button, add) {
    var className, lowerButton, upperButton;

    add = add || false;

    lowerButton = button.toLowerCase();
    upperButton = button.toUpperCase();

    isCaseSensitive = lowerButton !== upperButton;

    if (!add) {
      document.getElementsByClassName("active").removeClass("active");
    }

    className = this.getButtonClass(lowerButton);
    document.getElementsByClassName(className).addClass("active");

    if (isCaseSensitive && button === upperButton) {
      document.getElementsByClassName("bshift").addClass("active");
    }
    return this;
  };

  Element.prototype.addClass = function(c) {
    this.className += " " + c + " ";
    return this;
  };
  NodeList.prototype.addClass = function(c) {
    var el, _i, _len;
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      el = this[_i];
      el.addClass(c);
    }
    return this;
  };

  Element.prototype.removeClass = function(c) {
    var r;
    r = new RegExp("\\s" + c + '\\s?', 'gi');
    this.className = (" " + this.className).replace(r, '');
    if (this.className[0] === ' ') {
      this.className = this.className.substr(1);
    }
    return this;
  };
  NodeList.prototype.removeClass = function(c) {
    var el, _i, _len;
    for (_i = this.length - 1; _i >= 0; _i--) {
      el = this[_i];
      el.removeClass(c);
    }
    return this;
  };

  window.Keyboard = Keyboard;

}).call(this);