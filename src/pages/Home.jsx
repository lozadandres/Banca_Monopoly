import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Create-Game');
    };

    const handleClick2 = () => {
        navigate('/Join-Game'); 
    }
    return (
        <div>
            <h1>Inicio</h1>
            <button onClick={handleClick}>Crear una partida</button>
            <button onClick={handleClick2}>Unirse una partida</button>
        </div>
    );
};
export default Home;