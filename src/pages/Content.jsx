const posts = [
    {
        id: 1,
        titolo: "Introduzione a JavaScript",
        descrizione: "Scopri le basi di JavaScript, il linguaggio di programmazione per il web."
    },
    {
        id: 2,
        titolo: "CSS per principianti",
        descrizione: "Impara come stilizzare le tue pagine web con CSS."
    },
    {
        id: 3,
        titolo: "Guida a HTML5",
        descrizione: "Una panoramica delle nuove funzionalità di HTML5 per creare pagine web moderne."
    },
    {
        id: 4,
        titolo: "Sviluppo Web Responsive",
        descrizione: "Come rendere i tuoi siti web accessibili su tutti i dispositivi."
    },
    {
        id: 5,
        titolo: "Introduzione a Node.js",
        descrizione: "Inizia a sviluppare applicazioni lato server con Node.js."
    }
];

// import { posts } from '../posts'


export default function Content() {
    return (
        <>
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
        </>
    )
}