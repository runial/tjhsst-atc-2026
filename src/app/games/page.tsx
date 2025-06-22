// C:/Users/orien/WebstormProjects/tjhsst-atc/src/app/games/page.tsx
import Box from "./Box";
import games from "@/(assets)/Games.json";

export default function GamesPage() {
    return (
        <div className="flex flex-wrap p-4 justify-center items-center">
            {games.map(({ name, link, image }, index) => (
                <Box
                    key={index}
                    name={name}
                    link={link}
                    image={image}
                    // Prioritize the first 4 images, as they are most likely to be "above the fold"
                    priority={index < 4}
                />
            ))}
        </div>
    );
}