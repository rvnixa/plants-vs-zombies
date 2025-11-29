import {
  BOARD_COLS,
  BOARD_HEIGHT,
  BOARD_ROWS,
  BOARD_WIDTH,
  drawBoardTileStroke,
  TILE_HEIGHT,
  TILE_WIDTH,
  type Board,
} from "./board";
import {
  createFlagZombie,
  createNormalZombie,
  type Zombie,
} from "./entities/zombies";
import {
  createPeashooter,
  createSunflower,
  type Plant,
} from "./entities/plants";
import { type Shot } from "./entities/shots";

type Game = {
  lastTime: number;
  zombies: Zombie[];
  plants: Plant[];
  shots: Shot[];
};

function createGame(): Game {
  const zombies: Zombie[] = [];
  const plants: Plant[] = [];
  const shots: Shot[] = [];

  zombies.push(
    createNormalZombie({
      x: TILE_WIDTH * (BOARD_ROWS - 1),
      y: TILE_HEIGHT * 2,
    }),
    createFlagZombie({
      x: TILE_WIDTH * (BOARD_ROWS - 1),
      y: TILE_HEIGHT * (BOARD_COLS - 1),
    })
  );
  plants.push(
    createSunflower({
      x: 0,
      y: 0,
    }),
    createPeashooter({
      x: TILE_WIDTH * 2,
      y: 0,
    }),
    createPeashooter({
      x: 0,
      y: TILE_HEIGHT * 2,
    }),
    createPeashooter({
      x: 0,
      y: TILE_HEIGHT * (BOARD_COLS - 1),
    })
  );

  return {
    lastTime: 0,
    zombies,
    plants,
    shots,
  };
}

function startGame(game: Game, board: Board) {
  requestAnimationFrame((currentTime) => animateGame(currentTime, game, board));
}

function drawGame(game: Game, board: Board) {
  const { ctx } = board;

  if (ctx === null) {
    return;
  }

  ctx.clearRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);

  drawBoardTileStroke(board);

  for (const zombie of game.zombies) {
    zombie.draw({
      state: zombie.getState(),
      board,
    });
  }
  for (const plant of game.plants) {
    plant.draw({
      state: plant.getState(),
      board,
    });
  }
  for (const shot of game.shots) {
    shot.draw({
      state: shot.getState(),
      board,
    });
  }
}

function updateGame(deltaTime: number, game: Game) {
  for (const zombie of game.zombies) {
    zombie.update({
      deltaTime,
      state: zombie.getState(),
    });
  }
  for (const plant of game.plants) {
    plant.update({
      deltaTime: deltaTime,
      state: plant.getState(),
      game,
    });
  }
  for (const shot of game.shots) {
    shot.update({
      deltaTime: deltaTime,
      state: shot.getState(),
    });
  }
}

function animateGame(currentTime: number, game: Game, board: Board) {
  const deltaTime = currentTime - game.lastTime;

  game.lastTime = currentTime;

  drawGame(game, board);
  updateGame(deltaTime, game);

  requestAnimationFrame((newCurrentTime) =>
    animateGame(newCurrentTime, game, board)
  );
}

export { createGame, startGame };
export type { Game };
