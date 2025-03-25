import Link from "next/link";
import type { PostItem } from "../types";

interface Props {
    category: string
    posts: PostItem[]
}

const PostItemList = ({category, posts}: Props) => {
    return (
        <div>
            <h2>{category}</h2>
            <div>
                
                {
                  posts.map((post, id) => (
                    <Link href={`/${post.id}`}
                key={id}>{post.title}</Link>
                  ))
                }
              
        
            </div>
        </div>
    )
}

export default PostItemList