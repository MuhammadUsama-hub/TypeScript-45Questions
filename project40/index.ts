let dictionery: { [key: string]: any } = {};

const musicAlbum = (artist: string = 'Atif Aslam', title: string = 'PLs', tracks: number = 0): { [key: string]: any } => {
    dictionery.artist = artist;
    dictionery.title = title;
    dictionery.tracks = tracks;
    return dictionery;
};

console.log(musicAlbum());
console.log(musicAlbum('Waqar', '23rd March Theme', 12));
console.log(musicAlbum('Hader ALi', 'Elections Songs', 10));