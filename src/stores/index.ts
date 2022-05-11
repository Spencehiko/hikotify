import { defineStore } from "pinia";
import albums from "@/datas/albums.json";
import artists from "@/datas/artists.json";
import songs from "@/datas/songs.json";

interface Artist {
    id: number;
    name: string;
}
interface Album {
    id: number;
    artistId: number;
    name: string;
    image: string;
    year: number;
    isFavorite: boolean;
}

interface Song {
    id: number;
    albumId: number;
    albumName?: string | any;
    title: string;
    duration: number;
    isLiked: boolean;
    songPath: string;
}

export const useStore = defineStore({
    id: "store",
    state: () => ({
        albums: albums as Album[],
        artists: artists as Artist[],
        songs: songs as Song[],
        sortBy: "title" as string,
        searchBy: "" as string,
    }),
    getters: {
        albumsOfArtist(artistId): Album[] {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return (this as any).albums.filter(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (album: Album) => album.artistId === (artistId as any)
            );
        },
        favoriteAlbums(): Album[] {
            return this.albums.filter((album: Album) => album.isFavorite);
        },
        songsWithAlbumName(): Song[] {
            let filteredSongs = this.songs
                .map((element) => ({
                    ...element,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    albumName: (this as any).getAlbumName(element.albumId),
                }))
                .sort((a, b) => {
                    if (this.sortBy === "title") {
                        return a.title.localeCompare(b.title);
                    }
                    if (this.sortBy === "album") {
                        return a.albumName.localeCompare(b.albumName);
                    }
                    if (this.sortBy === "duration") {
                        return b.duration - a.duration;
                    }
                    return 0;
                });
            if (this.searchBy.trim() !== "") {
                filteredSongs = filteredSongs.filter((song) => {
                    return song.title
                        .toLowerCase()
                        .includes(this.searchBy.toLowerCase());
                });
            }
            return filteredSongs;
        },
        likedSongs(): Song[] {
            return this.songsWithAlbumName.filter((song: Song) => song.isLiked);
        },
    },
    actions: {
        getAlbumName(albumId: number): string {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const album = (this as any).albums.find(
                (album: Album) => album.id === (albumId as number)
            );
            return album ? album.name : "";
        },
        convertDuration(duration: number): string {
            const minutes = Math.floor(duration / 60);
            const minutesText = minutes < 10 ? `0${minutes}` : minutes;
            const seconds = duration % 60;
            const secondsText = seconds < 10 ? `0${seconds}` : seconds;
            return `${minutesText}:${secondsText}`;
        },
        revertLike(songId: number): void {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const song = (this as any).songs.find(
                (song: Song) => song.id === (songId as number)
            );
            if (song) {
                song.isLiked = !song.isLiked;
            }
        },
    },
    persist: true,
});
