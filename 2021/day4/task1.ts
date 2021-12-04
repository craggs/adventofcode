
{
    const input = await Deno.readTextFile('input.txt');

    const lines = input.split('\n');

    const numbers = lines[0].split(',').map(Number);

    const boards = [];

    let currentBoard = []

    for (let i=1; i++; i<lines.length) {
        if ((i - 1) % 6 == 0) {
            boards.push(currentBoard);
            currentBoard = [];
            continue;
        }
            
        if (lines[i] == undefined) {
            break;
        }
        currentBoard.push(lines[i].split(' ').filter(x => x).map(Number));
    }

    let winner = false;

    for (const draw of numbers) {
        for (const board of boards) {

            for (let i=0; i<board.length; i++) {

                for (let j=0; j<5; j++) {
                    if (board[i][j] == draw) {
                        board[i][j] = 0;

                        if (board[i].every(x => x == 0) || [board[0][j], board[1][j], board[2][j], board[3][j], board[4][j]].every(x => x == 0)) {
                            console.log('WINNER');
                            winner = true;

                            const sum = [...board[0], ...board[1], ...board[2], ...board[3], ...board[4]].reduce((a, b) => a + b);

                            console.log(sum * draw);
                        }

                        i = 100;
                        j = 100;

                    }
                }
            }

            if (winner) {
                break;
            }
        }

        if (winner) {
            break;
        }
    }

}