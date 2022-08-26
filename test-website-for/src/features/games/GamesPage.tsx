import { useAppSelector } from "../../store/store";

export default function GamesPage() {
    const { games } = useAppSelector((state: any) => state.games);

    return (
        <div className="container mx-auto px-4">
            <div className="grid-cols-4 flex-auto">
                    {games &&
                        games.map((game: any) => (
                            <div key={game._id} className='grid-cols-4'>
                                <div className='m-2 p-3 rounded max-w-md bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>{game.name ? game.name : "No name"} --{game.address}</div>
                            </div>
                        ))}
            </div>
        </div>
    );
}