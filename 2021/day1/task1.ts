
{
    const input = await Deno.readTextFile('input.txt');

    const numbers = input.split('\n').map(Number);

    let counter = 0;

    for (let i=1; i<numbers.length; i++) {

        if (numbers[i] > numbers[i-1]) {
            counter++;
        }
    }

    console.log(counter);
}