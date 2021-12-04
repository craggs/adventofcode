
{
    const input = await Deno.readTextFile('input.txt');

    let numbers = input.split('\n');

    const func = function(x: string, y: string): number {

        let filteredNumbers = numbers;

        for (let i=0; i<12; i++) {

            let totalOnes = 0;
            const averageInputCount = filteredNumbers.length / 2;
    
            for (let j=0; j<filteredNumbers.length; j++) {
                if (filteredNumbers[j][i] == '1') {
                    totalOnes++;
                }
            }
    
            filteredNumbers = filteredNumbers.filter(n => n[i] == (totalOnes >= averageInputCount ? x : y) );

            if (filteredNumbers.length == 1) {
                break;
            }
        }
        return parseInt(filteredNumbers[0], 2);
    }

    const oxygen = func('1', '0');
    const co2 = func('0', '1');

    console.log(oxygen * co2);
}