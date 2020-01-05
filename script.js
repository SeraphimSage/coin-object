let coin = {
    state: 0,
    flip: function () {
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
        this.state = Math.round(Math.random())
        console.log(coin.state)
    },
    toString: function () {
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
        if (this.state == 0) {
            let node = document.createElement("h4");
            let textNode = document.createTextNode("Heads");
            node.appendChild(textNode);
            document.getElementById("headTail").appendChild(node);
        }
        if (this.state == 1) {
            let node = document.createElement("h4");
            let textNode = document.createTextNode("Tails");
            node.appendChild(textNode);
            document.getElementById("headTail").appendChild(node);
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        let output = 0;
        if (this.state == 0) {
            let image = document.createElement("img");
            image.setAttribute("src", "src/heads.png")
            document.getElementById("headTail").appendChild(image);
        }
        if (this.state == 1) {
            let image = document.createElement("img");
            image.setAttribute("src", "src/tails.png")
            document.getElementById("headTail").appendChild(image);
        }
    }
};
function display20Flips() {
    const results = [];
    // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
    for (let i = 0; i < 20; i++) {
        coin.flip();
        coin.toString();
    }
}
function display20Images() {
    const results = [];
    // 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
    for (let i = 0; i < 20; i++) {
        coin.flip();
        coin.toHTML();
    }
}
