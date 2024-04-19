pc.app.on("Game:PlayerJoin", (state) => {
    if (state) {
        for (let i = 2; i <= pc.app.root.findByName("Game").findByName("PlayerHolder").children.length - 1; i++) {
            pc.app.root.findByName('PlayerHolder').children[i].script.enemy.setCharacterSkin(pc.app.root.findByName('PlayerHolder').children[i].script.enemy.skin, "Default", pc.app.root.findByName('PlayerHolder').children[i].script.enemy.danceName);
        }
    }
})