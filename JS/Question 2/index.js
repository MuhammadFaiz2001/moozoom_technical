function asyncExample (callback) {
    let data = 1;

    data++;

    callback(data);
}


function useAsyncExample () {
    let result = [];

    asyncExample(function (data) {
        result.push(data);
    })
}


useAsyncExample();
