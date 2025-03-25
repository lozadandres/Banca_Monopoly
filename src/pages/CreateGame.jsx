import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const CreateGame = () => {
    const navigate = useNavigate();
    const [participants] = useState(['Personaje 1', 'Personaje 2']);
    const [gameCode, setGameCode] = useState('');
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        // Generar un código aleatorio de 6 caracteres usando letras y números
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setGameCode(result);
    }, []);

    const handleStartGame = () => {
        // La lógica para iniciar el juego
        // navigate('/Start');
    }
    return (
        <div>
            <h1>Crear Juego</h1>
            <div>
                <h2>Código del juego: {gameCode}</h2>
                <button onClick={() => {
                    navigator.clipboard.writeText(gameCode);
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false);
                    }, 2000);
                }}>{copied ? 'Copiado!' : 'Copiar código'}</button>
                <h2>Lista de participantes:</h2>
                <ul>
                    {participants.map((participant, index) => (
                        <li key={index}>{participant}</li>
                    ))}
                </ul>
            </div>
            
            
            <button onClick={handleStartGame}>Iniciar partida</button>
        </div>
    );
};
export default CreateGame;