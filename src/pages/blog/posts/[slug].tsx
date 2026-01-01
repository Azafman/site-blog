import { useRouter } from "next/router"

export default function PostPage () {
    const router = useRouter();
    const slug = router.query.slug as string;

    //slug = '123123213'
    //url = http://localhost:3000/blog/posts/123123213

    return <h1 className="text-zinc-800">
        Slug: {slug}
    </h1>
}