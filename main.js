data = [
    {username:"Burger Snow", score:30},
    {username:"耶比我要社服", score:20},
    {username:"WYT", score:0},
    {username:"(°▽°)", score:55},
    {username:"彩虹獨角獸", score:40},
    {username:"Kelly", score:40},
    {username:"兀兀", score:70},
    {username:"鄭雅文", score:50},
    {username:"Aleph_0", score:0},
    {username:"Star", score:20},
    {username:"傅傳偉", score:65},
    {username:"林蓁", score:40},
    {username:"卡比", score:20},
    {username:"光光", score:20},
    {username:"Ray", score:20},
    {username:"好", score:0},
    {username:"溺水的魚", score:40},
    {username:"‎·ࡇ· ", score:50},
    {username:"Ac", score:70},
    {username:"系女邊", score:60},
    {username:"陳俊霖", score:35},
    {username:"1", score:20},
    {username:"陳儀斌", score:30},
    {username:"鞠敦揚", score:10},
    {username:"周倢瀅", score:20},
    {username:"PY", score:0},
    {username:"吳映廷", score:55},
    {username:"周庭宇", score:30},
    {username:"黃慈", score:20},
    {username:"終於會一題", score:10}
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
