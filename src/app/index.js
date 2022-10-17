import $ from "jquery";
import MVPPlayer from "./script.js";

const mvpPlayersData = [
    {
        platinum: 101000,
        nickname: "FissureVoid",
        maxSurvivalHours: 13.4,
        maxDefenseRounds: 14,
        image: "images/VoidFissure.webp"
    },
    {
        platinum: 105000,
        nickname: "JohnProdman",
        maxSurvivalHours: 6.7,
        maxDefenseRounds: 7,
        image: "images/JohnProdman.webp"
    },
    {
        platinum: 87080,
        nickname: "EveEVe",
        maxSurvivalHours: 2.4,
        maxDefenseRounds: 18,
        image: "images/EveEve.webp"
    },
    {
        platinum: 121000,
        nickname: "PPPPlays",
        maxSurvivalHours: 7.7,
        maxDefenseRounds: 12,
        image: "images/PPLays.webp"
    },
    {
        platinum: 75000,
        nickname: "PandaSóPanda",
        maxSurvivalHours: 14.1,
        maxDefenseRounds: 10,
        image: "images/pandaplays.webp"
    },
];

const mvpPlayers = mvpPlayersData.map(player => new MVPPlayer(
    player.platinum,
    player.nickname,
    player.maxSurvivalHours,
    player.maxDefenseRounds,
    player.image
));


mvpPlayers.map(mvpPlayer => {
    $("#cardsDiv").append(`
    <div class="col">
      <div class="card">
        <img src='${mvpPlayer.getImage()}' class="card-img-top img-fluid" alt='${mvpPlayer.getNickname()}'>
        <div class="card-body">
          <h4 class="card-title">${mvpPlayer.getNickname()}</h4>
          <div class="fw-bold">
            <span class="text-success">Dinheiro: </span> ${mvpPlayer.getPlatinumInReais()}
          </div>
          <div class="fw-bold">
            <span class="text-success">Sobrevivência: </span> ${mvpPlayer.getMaxSurvivalHours()}
          </div>
          <div class="fw-bold">
            <span class="text-success">Defesa: </span> ${mvpPlayer.getMaxDefenseRounds()}
          </div>
        </div>
      </div>
    </div>
    `);
});
