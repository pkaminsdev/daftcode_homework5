module.exports = function(num = 0, start, inverse)
{   
    if(typeof start !== "number" || start <= 0 ) start = 1;
    if(typeof inverse !== "boolean") inverse = false;
    if(num <= 0 || typeof num !== "number" || !Number.isSafeInteger(num)) return undefined;

    let ret = [0, 1];
    if(num == 1) return ret.slice(0, 1);

    for(let i=2; i<num + start - 1; i++)
    {
        ret = [...ret, ret[i-1]+ret[i-2]];
    }

    ret = ret.slice(start - 1, num + start - 1);

    if(inverse) return ret.reverse();
    return ret;
}