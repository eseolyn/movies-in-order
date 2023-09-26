const API_KEY = process.env.API_KEY;

module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/test/:path*",
                destination: "/dest/:path*",
                permanent: false,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: "/api/movies",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
            },
            {
                // Make the names in source and destination the same
                source: "/api/movies/:id",
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
            },
        ];
    },
};
