export const initialState = {
    game: {
        pot: 0,
    },
    hand: {
        playerId: 0,
        cards: [], //01H == Ace of Hearts, 05D == 5 of Diamonds, 12S = Queen of spades
    },
    players: [
        {
            id: 0,
            dealer: false,
        },
    ],
    cards: {
        '01C': 'Ace of Clubs',
        '02C': 'Two of Clubs',
        '03C': 'Two of Clubs',
        '04C': 'Three of Clubs',
        '05C': 'Four of Clubs',
        '06C': 'Five of Clubs',
        '07C': 'Six of Clubs',
        '08C': 'Seven of Clubs',
        '09C': 'Eight of Clubs',
        '10C': 'Nine of Clubs',
        '11C': 'Ten of Clubs',
        '12C': 'Jack of Clubs',
        '13C': 'Queen of Clubs',
        '14C': 'King of Clubs',
        '01D': 'Ace of Diamonds',
        '02D': 'Two of Diamonds',
        '03D': 'Two of Diamonds',
        '04D': 'Three of Diamonds',
        '05D': 'Four of Diamonds',
        '06D': 'Five of Diamonds',
        '07D': 'Six of Diamonds',
        '08D': 'Seven of Diamonds',
        '09D': 'Eight of Diamonds',
        '10D': 'Nine of Diamonds',
        '11D': 'Ten of Diamonds',
        '12D': 'Jack of Diamonds',
        '13D': 'Queen of Diamonds',
        '14D': 'King of Diamonds',
        '01H': 'Ace of Hearts',
        '02H': 'Two of Hearts',
        '03H': 'Two of Hearts',
        '04H': 'Three of Hearts',
        '05H': 'Four of Hearts',
        '06H': 'Five of Hearts',
        '07H': 'Six of Hearts',
        '08H': 'Seven of Hearts',
        '09H': 'Eight of Hearts',
        '10H': 'Nine of Hearts',
        '11H': 'Ten of Hearts',
        '12H': 'Jack of Hearts',
        '13H': 'Queen of Hearts',
        '14H': 'King of Hearts',
        '01S': 'Ace of Spades',
        '02S': 'Two of Spades',
        '03S': 'Two of Spades',
        '04S': 'Three of Spades',
        '05S': 'Four of Spades',
        '06S': 'Five of Spades',
        '07S': 'Six of Spades',
        '08S': 'Seven of Spades',
        '09S': 'Eight of Spades',
        '10S': 'Nine of Spades',
        '11S': 'Ten of Spades',
        '12S': 'Jack of Spades',
        '13S': 'Queen of Spades',
        '14S': 'King of Spades',
    }
};