interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string; // URL
  episode: string[]; // Array of URLs
  url: string; // URL
  created: string; // ISO string format
}

interface Info {
  count: number;
  next: null | string;
  pages: number;
  prev: null | string;
}

interface AllCharacterResponse {
  info: Info
  results: Character[]
}
