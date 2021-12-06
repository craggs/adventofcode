
{
    const input = await Deno.readTextFile('input.txt');

    const X = 0;
    const Y = 1;

    const coords = input.split('\n').map(s => 
    {
        const parts = s.split(' -> ');
        return {
            start: parts[0].split(',').map(Number),
            finish: parts[1].split(',').map(Number)
        }
    });

    const filteredCoords = coords.filter(c => c.start[X] === c.finish[X] || c.start[Y] === c.finish[Y]);

    const populatedPoints: { [id: string] : number; } = {};

    for (let line of filteredCoords) {

        let x = line.start[X];
        let y = line.start[Y];

        let key = `${x},${y}`;
        if (populatedPoints[key] === undefined) {
            populatedPoints[key] = 0;
        }

        populatedPoints[key]++;

        while (x != line.finish[X] || y != line.finish[Y])  {

            if (x < line.finish[X]) {
                x++;
            } else if (x > line.finish[X]) {
                x--;
            }
            if (y < line.finish[Y]) {
                y++;
            } else if (y > line.finish[Y]) {
                y--;
            }

            key = `${x},${y}`;
            if (populatedPoints[key] === undefined) {
                populatedPoints[key] = 0;
            }

            populatedPoints[key]++;

        }
    }

    let multiHitCounter = 0;

    for (let key of Object.keys(populatedPoints)) {
        if (populatedPoints[key] > 1) {
            multiHitCounter++;
        }
    }

    console.log(multiHitCounter);

}