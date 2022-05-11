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
    name: string;
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
        sortBy: "" as string,
    }),
    getters: {
        albumsOfArtist(artistId): Album[] {
            return (this as any).albums.filter(
                (album: Album) => album.artistId === (artistId as any)
            );
        },
        favoriteAlbums(): Album[] {
            return this.albums.filter((album: Album) => album.isFavorite);
        },
        likedSongs(): Song[] {
            return this.songs.filter((song: Song) => song.isLiked);
        },
    },
    actions: {},
});
