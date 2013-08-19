keyboard
========

CSS keyboard


Usage

    <script src="keyboard.js"></script>
    <script>
        var k = new Keyboard();
        k.pressButton("a"); // highlite "a"
        k.pressButton("A"); // highlite "shift + a"
        k.pressButton("ctrl").pressButton("a", true); // ^ + a
    </script>