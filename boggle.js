//Uji Coba Model Baru
function boggle() {
    var gird = [];
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    possible = possible.split("")
    for (var i = 0; i < 4; i++) {
        var arr1 = [];
        for (var j = 0; j < 4; j++) {
            var acak = Math.floor(Math.random() * possible.length);
            arr1.push(possible[acak])
            possible.slice(j, 1)
        }
        gird.push(arr1)
    }
    return gird;
}

console.log(boggle());
