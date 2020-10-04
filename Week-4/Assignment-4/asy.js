function delayedResultPromise(n1, n2, delayTime) {
    var sum= n1+n2;
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(sum)
        }, delayTime)
    });
    };
    delayedResultPromise(4, 5 , 3000).then(console.log)

    async function main(n1,n2,delayTime) {

        let result= await delayedResultPromise(n1, n2, delayTime);
        console.log(result);
        };
        main(2,5,3500) // result will be shown in the console after <delayTime> seconds