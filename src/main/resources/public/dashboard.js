function loadData () {
    var requestOptions = {
        method: 'GET'
    };
    
    fetch("http://localhost:8080/api/read/", requestOptions)
    .then(response => response.json())
    .then((result) => {
        for ( i=0; i < result.length; i++) {
            var row = document.createElement("tr");
            var data = [
                document.createElement("td"),
                document.createElement("td"),
                document.createElement("td"),
                document.createElement("td"),
                document.createElement("td")
            ];
            
            var recv = [
                result[i]['id'],
                result[i]['name'],
                result[i]['gender'],
                result[i]['dob'],
                result[i]['country'],
            ];
    
            for (var j = 0; j < data.length; j++) {
                data[j].innerHTML = recv[j];
                row.appendChild(data[j]);
            }
    
            document.getElementsByTagName("table")[0].appendChild(row);
        
        }
    })
    .catch(error => alert('error', error));
}

function managerPopup (status) {
    document.getElementById("manage").style.display = status;
}

function deletePopup (status) {
    document.getElementById("delete").style.display = status;
}

function getData () {
    return {
        "id": document.getElementById("id").value,
        "name": document.getElementById("name").value,
        "gender": document.getElementById("gender").value,
        "dob": document.getElementById("dob").value,
        "country": document.getElementById("country").value,
    }
}

function editEmployee () {
    console.log(getData());

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("http://localhost:8080/api/create", {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(getData())
    })
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => alert('error', error));
}

function createEmployee () {
    console.log(getData());

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(getData())
    };

    fetch("http://localhost:8080/api/update", requestOptions)
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => alert('error', error));
}

function removeEmployee () {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };
    
    var toDelete = document.getElementById('del_id').value;

    fetch("http://localhost:8080/api/delete/" + toDelete.toString(), requestOptions)
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => alert('error', error));
}