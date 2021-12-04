
{
    const input = await Deno.readTextFile('input.txt');

    const commands = input.split('\n').map(s => s.split(' '));

    const forwards = commands.filter(c => c[0] === 'forward').reduce((sum, current) => sum + Number(current[1]), 0);;
    const up = commands.filter(c => c[0] === 'up').reduce((sum, current) => sum + Number(current[1]), 0);;
    const down = commands.filter(c => c[0] === 'down').reduce((sum, current) => sum + Number(current[1]), 0);;

    console.log(forwards * (down - up));

}