let año:any[]=new Array();
for (let index = 0; index < año.length; index++) {
   año[index]=Number(prompt("Ingrese año"));

  if ((año[index]%4===0)&&(año[index]%100===0)&&(año[index]%400===0)) {
    año[index]=366;
    console.log(año[index]); 
  } else {
   año[index]=365;
   console.log(año[index]); 
  }
  
}




let mes:any=new Array(12);

let indicemes:number[]=new Array(1);

for (let index = 0; index < indicemes.length; index++) {
  indicemes[index]=Number(prompt("Ingresa mes"));
  for (let index = 0; index < mes.length; index++) {

   mes = [1, 2, 3, 4, 5,6,7,8,9,10,11,12];
 indicemes = mes.reduce((a, b) => a + b, 0);

console.log(indicemes);

    if (mes[index]===4||mes[index]===6||mes[index]===9||mes[index]===11) {
      mes=30;
    
    
    
    } else if(mes[index]===1||mes[index]===3||mes[index]===5||mes[index]===7||mes[index]===8||mes[index]===10||mes[index]===12) {
      mes=31;
      
      
    
    }else if(mes[index]===2&&año[index]===366){
          mes=29;
        
     
    
    }else  { 
    mes=28;
    
    }
    
  }
  
}

 








