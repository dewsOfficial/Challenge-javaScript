function domainType(domains) {
    var myArray = [];
    for(var i = 0; i<domains.length; i++){
        for(var j = domains[i].length-1; j>0; j--){
            if(domains[i].charAt(j).localeCompare(".") == 0){
                if(domains[i].charAt(j+1).localeCompare("o") == 0){
                    console.log(domains[i]);
                    myArray.push("organization");
                    break;
                }
                if(domains[i].charAt(j+1).localeCompare("c") == 0){
                    myArray.push("commercial");
                    break;
                }
                if(domains[i].charAt(j+1).localeCompare("n") == 0){
                    myArray.push("network");
                    break;
                }
                if(domains[i].charAt(j+1).localeCompare("i") == 0){
                    myArray.push("information");
                    break;
                }
            }
        }
    }
    return myArray;
}
