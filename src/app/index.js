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

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function () {
    $(".like").click(function () {
        const likeContext = $(this);
        const deslikeContext = $($(this).parent().children()[1]);

        let dataLike = likeContext.data("like");
        let dataDeslike = deslikeContext.data("deslike");

        if (likeContext.find(".like-button").hasClass("text-primary")){
            dataLike -= 1;
            likeContext.find(".like-button").removeClass("text-primary");
            likeContext.find(".like-button").addClass("text-secondary");
        }
        else {
            dataLike += 1;
            if (deslikeContext.find(".deslike-button").hasClass("text-primary")) {
                deslikeContext.find(".deslike-button").removeClass("text-primary");
                deslikeContext.find(".deslike-button").addClass("text-secondary");
                dataDeslike -= 1;
            }
            likeContext.find(".like-button").removeClass("text-secondary");
            likeContext.find(".like-button").addClass("text-primary");
        }

        likeContext.data("like", dataLike);
        deslikeContext.data("deslike", dataDeslike);
        likeContext.find(".like-count").text(dataLike);
        deslikeContext.find(".dislike-count").text(dataDeslike);
    });

    $(".dislike").click(function () {
        const likeContext = $($(this).parent().children()[0]);
        const deslikeContext = $(this);

        let dataLike = likeContext.data("like");
        let dataDeslike = deslikeContext.data("deslike");

        if (deslikeContext.find(".deslike-button").hasClass("text-primary")){
            dataDeslike -= 1;
            deslikeContext.find(".deslike-button").removeClass("text-primary");
            deslikeContext.find(".deslike-button").addClass("text-secondary");
        }
        else {
            dataDeslike += 1;
            if (likeContext.find(".like-button").hasClass("text-primary")) {
                likeContext.find(".like-button").removeClass("text-primary");
                likeContext.find(".like-button").addClass("text-secondary");
                dataLike -= 1;
            }
            deslikeContext.find(".deslike-button").removeClass("text-secondary");
            deslikeContext.find(".deslike-button").addClass("text-primary");
        }

        likeContext.data("like", dataLike);
        deslikeContext.data("deslike", dataDeslike);
        likeContext.find(".like-count").text(dataLike);
        deslikeContext.find(".dislike-count").text(dataDeslike);
    });
});

mvpPlayers.map(mvpPlayer => {
    const randomLike = getRandomArbitrary(0, 20);
    const randomDeslike = getRandomArbitrary(0, 20);
    $("#cardsDiv").append(`
    <div class="col">
      <div class="card">
        <img src='${mvpPlayer.getImage()}' class="card-img-top img-fluid" alt='${mvpPlayer.getNickname()}'>
        <div class="card-body">
          <h4 class="card-title">${mvpPlayer.getNickname()}</h4>
          <div class="container"> 
            <a class="like btn text-decoration-none" data-like="${randomLike}">
              <span class="like-count">${randomLike}</span>
              <i class="like-button fas fa-thumbs-up text-secondary"></i>
            </a>
            <a class="dislike btn text-decoration-none" data-deslike="${randomDeslike}">
              <i class="deslike-button fas fa-thumbs-down text-secondary"></i>
              <span class="dislike-count">${randomDeslike}</span>
            </a>
          </div>
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
