window.theme = {};
window.game = {};
game.time = 120;
game.hiddenCount = 3;
game.pages = [
    {
        name: "shelf",
        left: 37,
        top: 26,
        width: 10,
        height: 34,
        objects: [
            {
                name: "snake",
                height: 10,
                left: 65.8,
                top: 77,
                width: 5.5
            },
            {
                name: "horse",
                height: 34,
                left: 60.2,
                top: 27.3,
                width: 4

            },
            {
                name: "parrot",
                height: 10,
                left: 73,
                top: 30,
                width: 3
            }
        ]
    }
];


function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function getRandom(min, max) {
    var n = Math.floor(Math.random() * (max - min) + min);
    return n;
}