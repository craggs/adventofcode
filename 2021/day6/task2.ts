
{
    const input = await Deno.readTextFile('input.txt');

    const numbers = input.split(',').map(Number);

    const counters = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i=0; i<numbers.length; i++) {
        counters[numbers[i]]++;
    }

    for (let i=0; i<256; i++) {

        const day0fish = counters[0];

        for (let j=0; j<=8; j++) {
            counters[j] = counters[j+1];
        }

        // day0 fish go to day6
        counters[6] += day0fish;

        // day0 fish also add new fish to day8
        counters[8] = day0fish;
    }

    console.log(counters.reduce((a, b) => a + b));
}