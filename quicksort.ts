const quicksort = (() => {
    const cache = new Map() // memorization cache

    //partition function
    const partition = (pivot, arr) => [
        arr.filter(x=> x <= pivot),
        arr.filter(x=> x > pivot)
    ];

    //recursive quicksort implementation
    const quicksortHelper = (arr) => {
        const key = JSON.stringify(arr);
        if (cache.has(key))
            return cache.get(key);

        if (arr.length <= 1)
            return arr;

        const pivot = arr[0], rest = arr.slice(1);
        const [smaller, larger] = partition(pivot, rest);
        const result = [...quicksortHelper(smaller), pivot, ...quicksortHelper(larger)];
        cache.set(key, result); // store result in cache
        return result;
    };

    return (arr) => quicksortHelper(arr);
})();

//testing
const array = [10, 7, 8, 9, 1, 5];
console.log('Sorted Array:', quicksort(array));