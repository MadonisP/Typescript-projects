import { useAppSelector } from "../../store/store";

export default function GamesPage() {
    const { games } = useAppSelector((state: any) => state.games);

    return (
        <div>
            <table >
                {games &&
                    games.map((game: any) => (
                        <tr key={game._id} >
                            <td >{game.name ? game.name : "No name"}</td>
                        </tr>
                    ))}
            </table>
        </div>
    );
}