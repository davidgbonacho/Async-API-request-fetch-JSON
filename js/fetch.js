
function makeCall() {

    // create object with params
    const params = {
        param1: 'value1',
        param2: 'value2',
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(params)/* ,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        } */
    }
   
    fetch('php/service.php', options)
        .then(response => response.json())
        .then(value => document.getElementById("res").innerHTML = runObject(value))
        .catch(err => console.warn('Error: ', err));

}


// note the recursive jic included here
function runObject(object) {

    let content = '';
    for (var key in object) {
        if (typeof object[key] === 'object') {
            content += runObject(object[key]);
        } else {
            content += key + ' ' + object[key] + ' ';
        }
    }

    return content;
}






