interface SeriesData {
    name: string;
    seasons: number;
    genres: string[];
}

class Series {
    name: string;
    seasons: number;
    genres: string[];

    constructor(data: SeriesData) {
        this.name = data.name;
        this.seasons = data.seasons;
        this.genres = data.genres;
    }

    getName() {
        return this.name;
    }

    getGenres() {
        return this.genres;
    }
}

class User {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    getId() {
        return this.id;
    }
}

const demian = new User('Demian', 369963);

console.log(demian);