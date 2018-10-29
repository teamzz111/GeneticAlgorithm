var Fathers = [];
var Mothers = [];
var FnewG = [];
var MnewG = [];

father = () => {
    
    for (let i = 0; i < 2; i++) {
        console.log(i + 1);
        let dad = [];
        for (let j = 0; j < 6; j++) {
            dad[j] = Math.floor(Math.random() * 2);
        }
        Fathers[i] = dad;
        
        document.getElementById("padre").innerHTML += "[ " + Fathers[i] + "]<br><br>";
    }
}
mother = () => {
    console.log("####################");
    console.log("Mothers")
    for (let i = 0; i < 2; i++) {
        console.log(i + 1);
        let mom = [];
        for (let j = 0; j < 6; j++) {
            mom[j] = Math.floor(Math.random() * 2);
        }
        Mothers[i] = mom;
    
        document.getElementById("madre").innerHTML += "[ " + Mothers[i] + "]<br><br>";
   }
}
son = () => {
    console.log("####################");
    console.log("Son")
    for (let o = 0; o < 2; o++) {
        let alf = Math.floor(Math.random() * Fathers.length)
        let alm = Math.floor(Math.random() * Mothers.length)
        let Father = Fathers[alf];
        let Mother = Mothers[alm];
        console.log("Cruce entre Padre " + (alf + 1) + " Madre " + (alm + 1));

        var son1 = [Father[0], Father[1], Father[2], Mother[3], Mother[4], Mother[5]];
        var son2 = [Mother[0], Mother[1], Mother[2], Father[3], Father[4], Father[5]];
        if (o == 0) {
            FnewG[0] = son1;
            MnewG[0] = son2;
        } else {
            FnewG[1] = son1;
            MnewG[1] = son2;
        }

        console.log("hijo 1")
        for (let i = 0; i < 6; i++) {
            console.log(" -");
            console.log("|" + son1[i] + "|");
        }
        console.log("hijo 2")
        for (let i = 0; i < 6; i++) {
            console.log(" -");
            console.log("|" + son2[i] + "|");

        }
    }

}

sonG3 = () => {
    console.log("####################");
    console.log("Son generation 3");
    for (let o = 0; o < 2; o++) {
        let alf, alm;
        do{
            alf = Math.floor(Math.random() * FnewG.length)
            alm = Math.floor(Math.random() * MnewG.length)
            
        }
        while(alf == alm);
        let Father = FnewG[alf];
        let Mother = MnewG[alm];
        console.log("Cruce entre Padre " + (alf + 1) + " Madre " + (alm + 1));

        var son1 = [Father[0], Father[1], Father[2], Mother[3], Mother[4], Mother[5]];
        var son2 = [Mother[0], Mother[1], Mother[2], Father[3], Father[4], Father[5]];
        
        console.log("hijo 1")
        for (let i = 0; i < 6; i++) {
            console.log(" -");
            console.log("|" + son1[i] + "|");
        }
        console.log("hijo 2")
        for (let i = 0; i < 6; i++) {
            console.log(" -");
            console.log("|" + son2[i] + "|");

        }
    }

}


father();
mother();
son();
sonG3();