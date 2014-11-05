window.theme = {};
window.game = {};
game.time = 120;
game.hiddenCount = 10;
game.pages = [
    {
        name: "shelf",
        left: 39,
        top: 15,
        width: 7,
        height: 23,
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
    },
    {
        name: "painting",
        left: 9,
        top: 12,
        width: 12,
        height: 22,
        objects: [
            {
                name: "drum",
                height: 7,
                left: 20.8,
                top: 27,
                width: 3.7
            },
            {
                name: "shield",
                height: 3,
                left: 24.5,
                top: 52,
                width: 2

            },
            {
                name: "cage",
                height: 3,
                left: 38.3,
                top: 56.5,
                width: 1.4
            }
        ]
    },
    {
        name: "dead-body",
        left: 15,
        top: 48,
        width: 25,
        height: 10,
        objects: [
            {
                name: "rose",
                height: 6,
                left: 61.8,
                top: 83,
                width: 5.5
            },
            {
                name: "blood-palm",
                height: 12,
                left: 65.2,
                top: 61.3,
                width: 30

            },
            {
                name: "iktara",
                height: 34,
                left: 65,
                top: 13.3,
                width: 9

            }
        ]
    },
    {
        name: "curtain",
        left: 67.5,
        top: 8,
        width: 10,
        height: 34,
        objects: [
            {
                name: "gold-fish",
                height: 15,
                left: 54.5,
                top: 30.8,
                width: 9
            }
        ]
    }
];


function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
