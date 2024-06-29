
document.getElementById('btn').onclick = function(){
    for (let N = 1; N <= 10; N++) {
   
        document.write(N);
    }
    
}

document.getElementById('btnCheck').onclick = function(){
    let one = 0 ;
    for( let N = 0; N <= 100; N++){
        one += N; 
    }

    document.write(one);
}
