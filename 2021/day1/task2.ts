
{
    const input = await Deno.readTextFile('input.txt');

    const numbers = input.split('\n').map(Number);

    let counter = 0;

    var previous = numbers[0] + numbers[1] + numbers[2];

    for (let i=2; i<numbers.length-1; i++) {

        const current = numbers[i-1] + numbers[i] + numbers[i+1];

        if (current > previous) {
            counter++;
        }

        previous = current;
    }

    console.log(counter);
}