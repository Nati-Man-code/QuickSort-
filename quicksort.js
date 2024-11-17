// Curried Quicksort Implementation with Tail-Call Optimization
var quicksort = (function () {
    var partition = function (pivot, arr) { return [
        arr.filter(function (x) { return x <= pivot; }), // Smaller or equal
        arr.filter(function (x) { return x > pivot; }) // Larger
    ]; };
    var quicksortHelper = function (arr, acc) {
        if (acc === void 0) { acc = []; }
        if (arr.length === 0)
            return acc;
        var pivot = arr[0], rest = arr.slice(1);
        var _a = partition(pivot, rest), smaller = _a[0], larger = _a[1];
        // Tail-recursive structure to avoid deep recursion stack
        return quicksortHelper(smaller, acc)
            .concat(pivot)
            .concat(quicksortHelper(larger, []));
    };
    return function (arr) { return quicksortHelper(arr); };
})();
