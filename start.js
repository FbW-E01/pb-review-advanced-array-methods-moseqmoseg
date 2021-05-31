///1
const array1 = [{
        name: "Kaitlin",
        URL: "https://www.latlmes.com/breaking/chuckhslkfjkl-1",
        number: 1,
    },
    {
        name: "Kaitlin",
        URL: "https://www.latlmes.com/breaking/chuckhslkfjkl-1",
        number: 2,
    },
    {
        name: "Kaitlin",
        URL: "https://www.latlmes.com/breaking/chuckhslkfjkl-1",
        number: 3,
    },
    {
        name: "Kaitlin",
        URL: "https://www.latlmes.com/breaking/chuckhslkfjkl-1",
        number: 4,
    },
    {
        name: "Alexanne",
        URL: "//www.latlmes.com/breaking/chuckhslkfjkl-1",
        number: 5,
    },
    {
        name: "Stacy",
        URL: "https://www.latlmes.com/breaking/chuckhslkfjkl-1",
        number: 6,
    },
    {
        name: "tito",
        URL: "https://www.latlmes.com/breaking/chuckhslkfjkl-1",
        number: 8,
    },
    {
        name: "Donato",
        URL: "https://www.latlmes.com/breaking/chuckhslkfjkl-1",
        number: 7,
    },
    {
        name: "Mallory",
        URL: "https://www.latlmes.com/breaking/chuckhslkfjkl-1",
        number: 9,
    },
    {
        name: "Winnifred",
        URL: "//www.latlmes.com/breaking/chuckhslkfjkl-1",
        number: 10,
    },
];
///2
const justNames = array1.map((object) => object.name);
console.log(justNames);

///3

array1.forEach(function(object) {
    if (object.URL.slice(0, 4) === `http`) {
        console.log(object.URL);
    } else {
        console.log(`Invalid URL for ${object.name}`);
    }
});

///4
array1.sort(() => Math.random() - 0.5);
console.log(array1);
///5
array1.sort(function(a, b) {
    return a.number - b.number;
});
console.log(array1);
///6
array1.sort((a, b) => b.number - a.number);
console.log(array1);
///7

const names = array1.map((x) => x.name);
const joinedNames = names.join(` , `)
const finalString = joinedNames.replace(/,(?=[^,]*$)/, " and ");
console.log(finalString);