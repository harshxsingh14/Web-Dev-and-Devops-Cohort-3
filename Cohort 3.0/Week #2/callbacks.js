function hello(callback){
    name1 = "harsh";
    callback(name1);
}

function goodbye(name1){
    console.log(`goodbye ${name1}`);
}

hello(goodbye);