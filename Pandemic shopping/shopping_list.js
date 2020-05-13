function grab() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            console.log(response);
            var shopping_list = response.shopping_list;
            console.log(shopping_list[0]['Serial number']);
            var header = [];
            var j = 0;
            for (i in shopping_list[0]) {
                header[j] = i;
                j = j + 1;
            }
            console.log(header);
            console.log(shopping_list.length);
            var q = 0;
            for (a = 0; a < 10; a++) {
                for (var i in [0, 1, 2, 3, 4, 5]) {
                    document.getElementsByTagName('td')[q].innerHTML = shopping_list[a][header[i]];
                    q = q + 1;
                }
            }
        }
    }
    xhttp.open("GET", "shopping_list.json", true);
    xhttp.send();
}
function display(){
    document.getElementById('grocerylist').removeAttribute('hidden',true);
}
var get=document.getElementsByClassName('searchfield');
function find(){
    if(get[0].value==''){
        document.getElementById('lookup').placeholder="Create table first";
    }
}