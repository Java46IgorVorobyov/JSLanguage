const ar = ['lmn', 'd', 'd', 'lmn', 'a', 'lmn', 'a', 'bc'];

function Occurrences(array) {

const res = ar.reduce((acc, rec) => {
    const res = {};
    return (typeof acc[rec] !== 'undefined') ? { ...acc, [rec]: acc[rec] + 1 } : { ...acc, [rec]: 1 };
}, {});
return res;
}

function displayOccurrences(array) {

const res = Occurrences(array);

Object.entries(res).sort((e1, e2) => {
    const res = e2[1] - e1[1];
    return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
}).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
}

displayOccurrences(ar);

const whoIsTheWizard = [
    {username: "John Snow", type: 'maggle'},
    {username: "John Snow", type: 'maggle'},
    {username: "Harry Potter", type: 'wizard'},
    {username: "Ronald Weasley", type: 'wizard'},
    {username: "Misha Mavashi", type: 'maggle'},
    {username: "Severus Snape", type: 'wizard'},
    {username: "Rubeus Hagrid", type: 'wizard'},
    {username: "Jimmy", type: 'maggle'},
    {username: "Justin Bieber", type: 'maggle'},
];

const result = Object.entries(whoIsTheWizard.reduce((acc, { type }) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
}, {}));

console.log(result);
