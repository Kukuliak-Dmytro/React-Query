export type AlbumType = {
    id: number;
    userId: number;
    title: string;
}
export type AlbumListType = AlbumType[]
export type PhotoType={
    albumId: number;
    id: number;
    title:string;
    url: string;
    thumbnailUrl: string;
}