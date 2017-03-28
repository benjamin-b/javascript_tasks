var data = [];
var name = document.getElementById('name');
var maths = document.getElementById('maths');
var physics = document.getElementById('physics');
var chemistry = document.getElementById('chemistry');

var showData = document.getElementById('showDetails');

var getValue = function(){
    var nameValue, mathsMark, physicsMark, chemistryMark;
    nameValue = name.value;
    mathsMark = maths.value;
    physicsMark = physics.value;
    chemistryMark = chemistry.value;
    data.push({
        nameValue: nameValue,
        mathsMark: mathsMark,
        physicsMark: physicsMark,
        chemistryMark: chemistryMark
    });
};

var showResult = function(){
    name.value = "";
    maths.value = "";
    physics.value = "";
    chemistry.value = "";
    
};


var constructTable = function () {
    var html = "<table>", "<tbody>";
    console.log(data);
    html += "<tbody>";
    data.forEach(function (item)) {
        html += "<tr>";
        html += "<td>" + item.nameValue "</td>"
        html += "<td>" + item.mathsMark "</td>"
        html += "<td>" + item.physicsMark "</td>"
        html += "<td>" + item.chemistryMark "</td>"
        html += < /tr>;
    });
    html += "<tbody>", "</table>";
    return html;
};