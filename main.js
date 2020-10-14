data = [
    {username:"Burger Snow", score:0},
    {username:"耶比我要社服", score:0},
    {username:"系女邊", score:0},
    {username:"WYT", score:0},
    {username:"(°▽°)", score:0},
    {username:"彩虹獨角獸", score:0},
    {username:"Kelly", score:0},
    {username:"兀兀", score:0},
    {username:"鄭雅文", score:0},
    {username:"Aleph_0", score:0},
    {username:"Star", score:0},
    {username:"傅傳偉", score:0},
    {username:"林蓁", score:0},
    {username:"卡比", score:0},
    {username:"光光", score:0},
    {username:"Kelly", score:0},
    {username:"Ray", score:0},
    {username:"好", score:0},
    {username:"溺水的魚", score:0},
    {username:"‎·ࡇ· ", score:0},
];
data.sort(function(a,b){return b.score-a.score});
console.log(document.getElementsByClassName("table_dao")[0]);
var meow = setInterval(Update(),1000);

function Update(){
    console.log(document.getElementById("table"));
    node = document.getElementById("table_to_append");

    console.log(node);
    while(node.children.length > 1){
        node.removeChild(node.children[1]);
    }
    for(let i = 0; i < data.length; i++){
        row = document.createElement("tr");
        user = document.createElement("td");
        score = document.createElement("td");
        user.innerHTML = data[i].username;
        score.innerHTML = data[i].score;
        row.appendChild(user);
        row.appendChild(score);
        node.appendChild(row);
    }
}
