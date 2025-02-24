export type PostType = {
    id: number;
    userId: number;
    title: string;
    body: string;
}
export type PostsListType = PostType[]
export type CommentType={
    postId:number;
    name:string;
    email:string
    body:string
}