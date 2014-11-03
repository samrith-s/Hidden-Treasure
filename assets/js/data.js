window.theme = {};

var item = [
    {
        name: "Dagger",
        img: "Dagger",
        silhouette: "",
        click: "",
        top: "",
        left: ""
    },
    {
        name: "Hookah",
        img: "Hookah",
        silhouette: "",
        click: "",
        top: "",
        left: ""
    },
    {
        name: "Elephant",
        img: "Elephant",
        silhouette: "",
        click: "",
        top: "",
        left: ""
    },
    {
        name: "Chest",
        img: "Chest",
        silhouette: "",
        click: "",
        top: "",
        left: ""
    },
    {
        name: "Vase",
        img: "Vase",
        silhouette: "",
        click: "",
        top: "",
        left: ""
    },
    {
        name: "Painting",
        img: "Painting",
        silhouette: "",
        click: "",
        top: "",
        left: ""
    },
    {
        name: "Book",
        img: "Book",
        silhouette: "",
        click: "",
        top: "",
        left: ""
    },
    {
        name: "Horse",
        img: "Horse",
        silhouette: "",
        click: "",
        top: "",
        left: ""
    },
    {
        name: "Rings",
        img: "Rings",
        silhouette: "",
        click: "",
        top: "",
        left: ""
    },
    {
        name: "Statue",
        img: "Statue",
        silhouette: "",
        click: "",
        top: "",
        left: ""
    }
]


function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function getRandom(min, max) {
    var n = Math.floor(Math.random() * (max-min) + min);
    return n;
}