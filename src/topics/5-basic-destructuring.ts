
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}


/* const {song, songDuration} = audioPlayer;
const {author} = audioPlayer.details;

console.log('Song: ' + song);
console.log('Duration: ' + songDuration);
console.log('Author: ' + author); */
const [,,p] = ['Goku', 'Trunks', 'Vegeta'];

console.error('El personaje es: ', p || 'No hay en esta posición.');

export {}