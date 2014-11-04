window.theme = {};

var objects = [
    {
        name: "Beer",
        img: "",
        silhouette: "",
        click: "",
        top: "45%",
        left: "45%"
    },
    {
        name: "Beer",
        img: "",
        silhouette: "",
        click: "",
        top: "41%",
        left: "25%"
    },
    {
        name: "Beer",
        img: "",
        silhouette: "",
        click: "",
        top: "33%",
        left: "69%"
    },
    {
        name: "Beer",
        img: "",
        silhouette: "",
        click: "",
        top: "50%",
        left: "12%"
    },
    {
        name: "Beer",
        img: "",
        silhouette: "",
        click: "",
        top: "18%",
        left: "25%"
    },
    {
        name: "Beer",
        img: "",
        silhouette: "",
        click: "",
        top: "80%",
        left: "60%"
    },
    {
        name: "Beer",
        img: "",
        silhouette: "",
        click: "",
        top: "49%",
        left: "10%"
    },
    {
        name: "Beer",
        img: "",
        silhouette: "",
        click: "",
        top: "10%",
        left: "5%"
    },
    {
        name: "Beer",
        img: "",
        silhouette: "",
        click: "",
        top: "4%",
        left: "75%"
    },
    {
        name: "Beer",
        img: "",
        silhouette: "",
        click: "",
        top: "35",
        left: "13%"
    },
]


function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function getRandom(min, max) {
    var n = Math.floor(Math.random() * (max-min) + min);
    return n;
}