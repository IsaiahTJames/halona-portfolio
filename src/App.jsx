import Navbar from './components/Navbar';
import './styles/global.css';

function App() {
    return (
        <div className="min-h-screen w-full bg-gray-100 text-gray-800">
            <Navbar />
            <main className="p-6">
                <h1 className="text-2xl">Welcome to Brian Halona Portfolio</h1>
                <p>This is your starting layout. Everything is now full-width ✅</p>
            </main>
        </div>
    );
}

export default App;