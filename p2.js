



 function feladat01(param)
{
    var vegeredmeny=0;
    var temp;
    var hossz=param.length;
    var faktorialis;

    for (i=2;i<hossz+1;i++){
        temp=1;
        faktorialis=1;
        for (j=0;j<i;j++){
            temp=temp*(hossz-j);
        }
        for (o=1;o<i+1;o++){
            faktorialis=faktorialis*o;
        }
        vegeredmeny=vegeredmeny+(temp/faktorialis);
    }

    console.log("Az eredmeny: " + vegeredmeny);

};






