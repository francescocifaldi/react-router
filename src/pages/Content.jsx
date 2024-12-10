import posts from '../posts.js'

export default function Content() {
    return (
        <div className="container">
            <h1>Content</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h1>{post.titolo}</h1>
                    <p>{post.descrizione}</p>
                </div>
            ))

            }
            <p>Il mio contenuto</p>
        </div>
    )
}