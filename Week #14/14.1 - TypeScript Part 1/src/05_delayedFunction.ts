function delayedCall(anotherFn: () => void) {
    setTimeout(anotherFn, 1000);
}

function log() {
    console.log("Hello"); 
}

delayedCall(log); 