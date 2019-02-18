import * as fromEmotes from './emotes';

const emotes = fromEmotes.emotes;

describe('Emotes state', function () {

    it('should be defined', function () {
        expect(emotes).toBeDefined();
    });

    it('should define the default state', function () {
        const defaultState = {
            emotesById: {},
            allIds: [],
        };
        expect(emotes()).toMatchObject(defaultState);
    });

    it('should add an emote', function () {
        const initState = emotes();
        const action = fromEmotes.addEmote('chart1', '2018-12-14', 'HAPPY');
        const newState = emotes(initState, action);
        expect(newState).toMatchSnapshot();
    });

    it('should update an emote', function () {
        const initState = emotes();
        const addAction = fromEmotes.addEmote('chart1', '2018-12-14', 'HAPPY');
        const testState = emotes(initState, addAction);
        const testAction = fromEmotes.updateEmote('chart1_2018-12-14', 'SAD');
        expect(emotes(testState, testAction)).toMatchSnapshot();
    });

    it('should remove an emote', function () {
        const initState = emotes();
        const addAction1 = fromEmotes.addEmote('chart1', '2018-12-14', 'HAPPY');
        const addAction2 = fromEmotes.addEmote('chart1', '2018-12-15', 'SAD');
        const addAction3 = fromEmotes.addEmote('chart2', '2018-12-14', 'SAD');
        const testState = emotes(emotes(emotes(initState, addAction1), addAction2), addAction3);
        const testAction = fromEmotes.removeEmote('chart1_2018-12-15');
        expect(emotes(testState, testAction)).toMatchSnapshot();
    });
});