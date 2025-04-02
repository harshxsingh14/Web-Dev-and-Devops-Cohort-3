function sum(n){
    sum = 0;
    for(i=0;i<=n;i++){
        sum = sum + i;
    }
    return sum;
}

const ans = sum(20);
console.log(`This is long method answer`,ans);

function sum2(n){
    return n*(n+1)/2;
}

const ans2 = sum2(10);
console.log(`This is DSA method answer`, ans2);



