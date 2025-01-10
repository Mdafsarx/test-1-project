import axios from "axios";
type postData = {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export default function page({ data }: { data: postData }) {
    return (
        <div className="flex items-center justify-center min-h-screen px-6 md:px-0">
            <div className="text-center max-w-96 space-y-2 bg-[#FFE4C4] p-5 rounded-xl">
                <h4 className="text-xl font-bold">{data?.title}</h4>
                <p><span className="font-bold">body:</span> {data?.body}</p>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await axios(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.data;

    const paths = posts.map((post: {
        id: number
    }) => ({
        params: { id: post.id.toString() },
    }));

    return {
        paths,
        fallback: true,
    };
}


export const getStaticProps = (
    async ({ params }: { params: { id: string } }) => {
        const res = await axios(`https://jsonplaceholder.typicode.com/posts/${params?.id}`)
        const data = await res.data;
        console.log(data)
        return {
            props: { data }
        }
    }
)
