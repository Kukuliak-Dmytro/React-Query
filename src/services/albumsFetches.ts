
import { AlbumType, AlbumListType } from "../types/Albums";
import { QueryKey } from "@tanstack/react-query";
export default async function fetchAlbums(): Promise<AlbumListType> {
    const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", requestOptions);
        const result: AlbumListType = await response.json();
        // console.log("Fetch successfull: ", result)
        return result;
    }
    catch (error) {
        throw new Error(`Error: ${error}`)
    }
}

export async function fetchAlbum({ queryKey }: { queryKey: QueryKey }): Promise<AlbumType> {
    const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow"
    };
    const id = queryKey[1]
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, requestOptions);
        const result: AlbumType = await response.json();
        // console.log("Fetch successfull: ", result)
        return result;
    }
    catch (error) {
        throw new Error(`Error: ${error}`)
    }
}

export async function editAlbum({post} : {post:AlbumType} ) {
    const requestOptions: RequestInit = {
        method: "PUT",
        redirect: "follow",
        body: JSON.stringify({ title: post.title })

    };
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/`, requestOptions);
        const result: AlbumType[] = await response.json();
        // console.log("Edit successfull: ", result)
        return result;
    }
    catch (error) {
        throw new Error(`Error: ${error}`)
    }

}

export async function deleteAlbum({ queryKey }: { queryKey: QueryKey }): Promise<AlbumType> {
    const requestOptions: RequestInit = {
        method: "DELETE",
        redirect: "follow"
    };
    const id = queryKey[1]
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, requestOptions);
        const result: AlbumType = await response.json();
        // note: json placeholder api does not return a copy of deleted object
        // console.log("Delete successfull: ", result)
        return result;
    }
    catch (error) {
        throw new Error(`Error: ${error}`)
    }
}