var GameScore = Parse.Object.extend("GameScore", {
    init: function (username,score) {
        this.set("score", score);
        this.set("username",username);
        return this;
    }
});

function createGameScoreObject() {
    return new GameScore();
}


export default {createGameScoreObject};
