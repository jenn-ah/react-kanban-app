export const LOAD_CARDS = 'LOAD_CARDS';

export const loadCards = (cards) => {
    return {
        type: LOAD_CARDS,
        cards: cards
    }
}