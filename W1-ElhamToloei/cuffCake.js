var cake = [1, 3, 4, 2];
var students = 3;
function minCost(cake, numOfStu) {
    var minCash = 0;
    if (numOfStu === 1)
        for (var j = 0; j < cake.length - 1; j++) {
            minCash = cake[j] > cake[j + 1] ? cake[j] : cake[j + 1];
        }
    else if (numOfStu === 2) {
        minCash = cake[0] > cake[cake.length - 1] ? cake[0] : cake[cake.length - 1];
    }
    else
        for (var j = 0; j < cake.length - 1; j++) {
            minCash = cake[0] < cake[j + 1] ? cake[0] : cake[j + 1];
        }
    return minCash;
}
console.log(minCost(cake, students));
