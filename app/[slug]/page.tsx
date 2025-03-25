import Link from "next/link";
import { getPostData } from "../../lib/posts";

const Post = async ({params}: {params: {slug: string}}) => {

    const postData = await getPostData(params.slug)

    return (
        <div>
            <Link href={"/"}>
            <p>Home</p>
            </Link>
            <p>{postData.date.toString()}</p>

            <article dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
        </div>
    )
}

export default Post