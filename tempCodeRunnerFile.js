const ar = ['lmn', 'd', 'd', 'lmn', 'a', 'lmn', 'a', 'bc'];

function Occurrences(array) {
    const count = ar.reduce( (tally, sym) => {
        tally[sym] = (tally[sym] || 0) + 1 ;
        return tally;
      } , {});
}
Occurrences(ar);