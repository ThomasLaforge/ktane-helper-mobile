import ButtonGame from "./screens/Games/ButtonGame";
import Passwords from "./screens/Games/Passwords";
import ComplexStrings from "./screens/Games/ComplexStrings";
import { MazeGame } from "./modules/Maze";
import { KnobGame } from "./modules/Knob";
import WITF from "./screens/Games/WhoIsTheFirstGame";

export const GAMES = {
    Passwords: {
        image: require('../assets/GamesLogos/Passwords.png'),
        screen: Passwords
    },
    ButtonGame: {
        image: require('../assets/GamesLogos/ButtonGame.png'),
        screen: ButtonGame
    },
    ComplexStrings: {
        image: require('../assets/GamesLogos/ComplexStrings.png'),
        screen: ComplexStrings
    },
    Memory: {
        image: require('../assets/GamesLogos/Memory.png'),
    },
    Simon: {
        image: require('../assets/GamesLogos/Simon.png'),
    },
    Symbols: {
        image: require('../assets/GamesLogos/Symbols.png'),
    },
    Knob: {
        image: require('../assets/GamesLogos/Knob.png'),
        screen: KnobGame
    },
    Maze: {
        image: require('../assets/GamesLogos/Maze.png'),
        screen: MazeGame
    },
    Morse: {
        image: require('../assets/GamesLogos/Morse.png'),
    },
    Strings: {
        image: require('../assets/GamesLogos/Strings.png'),
    },
    StringsSequence: {
        image: require('../assets/GamesLogos/StringsSequence.png'),
    },
    WhoIsTheFirst: {
        image: require('../assets/GamesLogos/WhoIsTheFirst.png'),
        screen: WITF
    }
}