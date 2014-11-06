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
                height: 12,
                left: 64.8,
                top: 75.5,
                width: 7
            },
            {
                name: "horse",
                height: 10,
                left: 59.6,
                top: 27.3,
                width: 5

            },
            {
                name: "parrot",
                height: 10,
                left: 72.5,
                top: 29.5,
                width: 4
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
                height: 5,
                left: 24,
                top: 51.2,
                width: 3

            },
            {
                name: "cage",
                height: 7,
                left: 38.3,
                top: 52.5,
                width: 4
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
                height: 7,
                left: 62.6,
                top: 84,
                width: 4
            },
            {
                name: "stain",
                height: 24,
                left: 73.2,
                top: 52.3,
                width: 19

            },
            {
                name: "iktara",
                height: 10,
                left: 66,
                top: 14.3,
                width: 6

            }
        ]
    },
    {
        name: "curtain",
        left: 67.5,
        top: 20,
        width: 10,
        height: 15,
        objects: [
            {
                name: "goldfish",
                height: 15,
                left: 54.5,
                top: 30.8,
                width: 9
            }
        ]
    },
    {
        name: "bed",
        left: 55.5,
        top: 40,
        width: 24,
        height: 16,
        objects: [
            {
                name: "talwar",
                height: 15,
                left: 17.5,
                top: 43.8,
                width: 9
            }
        ]
    },
    {
        name: "book",
        left: 49,
        top: 65,
        width: 12,
        height: 7,
        objects: [
            {
                name: "pawn",
                height: 6,
                left: 16.8,
                top: 63,
                width: 10
            },
            {
                name: "dilrubat",
                height: 10,
                left: 70.2,
                top: 32.3,
                width: 10

            },
            {
                name: "peacock",
                height: 34,
                left: 56,
                top: 43.3,
                width: 9

            }
        ]
    },
    {
        name: "chest",
        left: 9,
        top: 34,
        width: 21,
        height: 11,
        objects: [
            {
                name: "comb",
                height: 10,
                left: 65.8,
                top: 59,
                width: 6
            },
            {
                name: "eagle",
                height: 10,
                left: 49.5,
                top: 47,
                width: 6

            },
            {
                name: "bull",
                height: 310,
                left: 45.5,
                top: 15.8,
                width: 6
            }
        ]
    }
];


function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
