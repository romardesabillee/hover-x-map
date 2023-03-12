import Hover from './components/Hover';
import img from './images/avatar1.webp';

export default function App() {
    const colors = [
        {
            name: 'Red 500',
            class: 'text-red-500',
        },
        {
            name: 'Blue 500',
            class: 'text-blue-500',
        },
    ]

    return (
        <div className='p-20'>
            <ul className='border border-gray-500 p-5 rounded-md'>
                {colors.map((color, index) => {
                    return(
                        <li key={index} className={`text-2xl font-bold ${color.class}`}>
                            {color.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
