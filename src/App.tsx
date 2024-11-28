import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { NotMemorizedCard } from "./components/ui/notMemorizedCard";
import { MemorizedCard } from "./components/ui/memorizedCard";
import { useState } from "react";
import { Input } from "./components/ui/input";

function App() {
  const { data, error } = useQuery({
    queryKey: ["exampleMemoCard"],
    queryFn: async (): Promise<AllCharacterResponse> => {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      return await response.json();
    },
  });

  const [filter, setFilter] = useState("");

  if (error) return "Something went wrong";

  return (
    <>
      <label>
        Name{": "}
        <Input
          value={filter}
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
        />
      </label>
      <div className="flex flex-row">
        <div className="flex flex-col gap-3">
          <h1> NOT MOMORIZED</h1>
          <div className="flex flex-row flex-wrap gap-2 justify-center">
            {data?.results
              .slice(0, 9)
              .filter(
                (char) =>
                  filter.length === 0 ||
                  char.name.toLowerCase().includes(filter.toLowerCase()),
              )
              .map((char, key) => (
                <NotMemorizedCard character={char} key={key} />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1> MEMORIZED </h1>
          <div className="flex flex-row flex-wrap gap-2 justify-center">
            {data?.results
              .slice(0, 9)
              .filter((char) =>
                char.name.toLowerCase().includes(filter.toLowerCase()),
              )
              .map((char, key) => <MemorizedCard character={char} key={key} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
