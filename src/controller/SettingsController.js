class SettingsController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('colorUpdate', (event) => {
            if (event.player === 1) {
                model.getPlayerOne().setColor(event.color);
            } else {
                model.getPlayerTwo().setColor(event.color);
            }
        });

        view.on('starterUpdate', (playerValue) => {
            model.setStartingTurn(playerValue);
        });

        view.on('difficultyUpdate', (difficulty) => {
            model.setDifficulty(difficulty);
        });

        view.on('botUpdate', (enable) => {
            model.toggleBot();
        });

        view.on('restartClick', () => model.start());
    }
}

export default SettingsController;
