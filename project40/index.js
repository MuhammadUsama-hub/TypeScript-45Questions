"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dictionery = {};
const musicAlbum = (artist = 'Atif Aslam', title = 'PLs', tracks = 0) => {
    dictionery.artist = artist;
    dictionery.title = title;
    dictionery.tracks = tracks;
    return dictionery;
};
console.log(musicAlbum());
console.log(musicAlbum('Waqar', '23rd March Theme', 12));
console.log(musicAlbum('Hader ALi', 'Elections Songs', 10));
