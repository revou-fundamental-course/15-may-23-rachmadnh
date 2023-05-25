function hitungLuas() {
    var sisiLuas = document.getElementById("sisi-luas").value;
    var res = Number() * Number();

    document.getElementsByClassName("result-luas").style.visibility="hidden"
    console.log(sisiLuas);
    document.getElementById("output-luas").innerHTML = '<span>'+sisiLuas+'</span>';
}