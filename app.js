var Fathers = [];
var Mothers = [];

father = () => {
    console.log("####################");
    console.log("Fathers");
    for (let i = 0; i < 2; i++) {
        console.log(i + 1);
        let dad = [];
        for (let j = 0; j < 4; j++) {
            dad[j] = Math.floor(Math.random() * 2);
        }
        Fathers[i] = dad;
        console.log(" -")
        console.log("|" + Fathers[i] + "|");

    }
}
mother = () => {
    console.log("####################");
    console.log("Mothers")
    for (let i = 0; i < 2; i++) {
        console.log(i + 1);
        let mom = [];
        for (let j = 0; j < 4; j++) {
            mom[j] = Math.floor(Math.random() * 2);
        }
        Mothers[i] = mom;
        console.log(" -")
        console.log("|" + Mothers[i] + "|");
    }
}
son = () => {
    console.log("####################");
    console.log("Son")
    for (let o = 0; o < 2; o++) {
        let alf = Math.floor(Math.random() * Fathers.length )
        let alm = Math.floor(Math.random() * Fathers.length )
        let Father = Fathers[alf];
        let Mother = Mothers[alm];
        console.log("Cruce entre Padre "+ alf + " Madre "+alm);
        var son = [Father[0], Father[1], Mother[2], Mother[3]];
        
        for (let i = 0; i < 4; i++) {
            console.log(" -");
            console.log("|" + son[i] + "|");
        }
    }

}

father();
mother();
son();