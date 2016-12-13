// Boogle Lama Blanford-fox
function boggle() {
    var xo_random = [];
    var panjang = 4;
    for (var i = 0; i < panjang; i++) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        for (var j = 0; j < 8; j++) {
          text = possible.charAt(Math.floor(Math.random() * possible.length));
          xo_random.push(text)
        }
    }
    var letter_gird = [];
    var i, chunk = 4;
    for(i=0;i<xo_random.length;i+=chunk){
       letter_gird.push(xo_random.slice(i,i+=chunk))
     }
    return letter_gird
}

console.log(boggle());
