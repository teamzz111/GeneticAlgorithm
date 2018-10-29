var Father = [];
var Mother = [];
father = () =>{
    console.log("Father");
    for(let i = 0; i < 4; i++){
        let dad = Father[i] = Math.floor(Math.random()*2);
        console.log(dad);
    }
}
mother = () =>{
    console.log("Mother")
    for(let i = 0; i < 4; i++){
        let mom = Mother[i] = Math.floor(Math.random()*2);
        console.log(mom);
    }
}
son = () =>{
    var son = [Mother[2], Father[1]];
    console.log("Son")
    for(let i = 0; i < 2; i++){
        console.log(son[i]);
    }    
}

mother();
father();
son();