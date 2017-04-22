function companyBotStrategy(trainingData) {
    var a = 0;
    var b = 0;
    for(var i = 0; i<trainingData.length;i++){
        if(trainingData[i][1] == 1){
            a = a+trainingData[i][0];
            b++;
        }
    }
    console.log(a);
    console.log(b);
    console.log(a/b);
    if(b == 0){
        b = 1;
    }
    a = a*1.0/b;
    return a;
}
