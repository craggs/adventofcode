
{
    const input = await Deno.readTextFile('input.txt');

    const numbers = input.split('\n');

    const oneCounts = [0,0,0,0,0,0,0,0,0,0,0,0];

    for (const num of numbers) {
        for (let i=0; i<num.length; i++) {
            if (num[i]=='1') {
                oneCounts[i]++;
            }
        }
    }

    const averageInputCount = numbers.length / 2;

    const commonBits = oneCounts.map(x => x > averageInputCount ? 1 : 0);
    const uncommonBits = commonBits.map( x => x == 0 ? 1 : 0);
    
    const gamma = parseInt(commonBits.join(''), 2);
    const epsilon = parseInt(uncommonBits.join(''), 2);

    console.log(gamma);
    console.log(epsilon);

    console.log(gamma * epsilon);
}