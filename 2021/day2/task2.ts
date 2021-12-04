
{
    const input = await Deno.readTextFile('input.txt');

    const commands: {direction: string, value: number}[] = input.split('\n').map(s => s.split(' ')).map(x => ({direction: x[0], value: +x[1]}));

    let aim = 0;
    let horizonal = 0;
    let depth = 0;

    for (const command of commands) {
        
        switch (command.direction) {
            case 'forward':
                horizonal += command.value;
                depth += (aim * command.value);
                break;
            case 'up':
                aim -= command.value;
                break;
            case 'down':
                aim += command.value;
                break;
        }
    }

    console.log(horizonal * depth);
}