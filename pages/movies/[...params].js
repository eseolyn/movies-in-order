import Seo from "@/components/Seo";

export default function Detail({ params, results }) {
    const [title, id] = params || [];
    console.log(results);
    return (
        <div className="container">
            <Seo title={title} />
            <div className="movie">
                <div className="movie__column">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
                    />
                </div>
                <div className="movie__column">
                    <h1>{title}</h1>
                    <p>{results.release_date}</p>
                    <p>⭐️{results.vote_average}</p>
                    <ul>
                        {results.genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <button>
                        <a href={`${results.homepage}`}>homepage</a>
                    </button>
                </div>
            </div>
            <div className="summary">{results.overview}</div>
            <style jsx>{`
                .container {
                    margin: 20px 30px;
                }
                .movie {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                }

                .movie__column img {
                    width: 260px;
                    height: auto;
                }

                .summary {
                    margin-top: 20px;
                }
            `}</style>
        </div>
    );
}

export async function getServerSideProps({ params: { params } }) {
    const [title, id] = params;
    const results = await (
        await fetch(`http://localhost:3000/api/movies/${id}`)
    ).json();
    return { props: { params, results } };
}
