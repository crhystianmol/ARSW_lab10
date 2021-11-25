module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    let nth = req.body.nth

    var memoria = {};
    memoria[0]=0;
    memoria[1]=1;
    function fibonacci(n) {
        var sign = n >= 0 ? 1 : -1;
        n = Math.abs(n);

        if(memoria[n] !== undefined)
            return sign*memoria[n];
        return sign*(memoria[n] = fibonacci(n-1)+fibonacci(n-2));
    }

    let answer=fibonacci(nth)

    context.res = {
        body: answer.toString()
    };

}