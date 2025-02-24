import { useSearchParams } from "react-router-dom";

export default function PostPage(){
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    return (
        <div> Welcome to post #{id}</div>
    )
}