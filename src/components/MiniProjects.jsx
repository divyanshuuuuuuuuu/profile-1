import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Trash2, Check, Palette, Calculator as CalcIcon } from 'lucide-react';

// Mini Calculator Component
function Calculator() {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');

    const handleClick = (value) => {
        if (value === 'C') {
            setDisplay('0');
            setEquation('');
        } else if (value === '=') {
            try {
                const result = eval(equation + display);
                setDisplay(String(result));
                setEquation('');
            } catch {
                setDisplay('Error');
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            setEquation(equation + display + value);
            setDisplay('0');
        } else {
            setDisplay(display === '0' ? value : display + value);
        }
    };

    const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

    return (
        <div className="w-full max-w-xs mx-auto p-4 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl border border-white/10">
            <div className="bg-black/50 p-4 rounded-lg mb-4 text-right">
                <div className="text-gray-400 text-sm h-6">{equation}</div>
                <div className="text-white text-2xl font-bold">{display}</div>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {buttons.map((btn) => (
                    <button
                        key={btn}
                        onClick={() => handleClick(btn)}
                        className={`p-4 rounded-lg font-semibold transition-all ${btn === '=' ? 'bg-cyan-500 hover:bg-cyan-600 text-white col-span-2' :
                                btn === 'C' ? 'bg-red-500/80 hover:bg-red-600 text-white col-span-2' :
                                    ['+', '-', '*', '/'].includes(btn) ? 'bg-purple-500/80 hover:bg-purple-600 text-white' :
                                        'bg-white/10 hover:bg-white/20 text-white'
                            }`}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}

// Color Picker Component
function ColorPicker() {
    const [color, setColor] = useState('#00f5ff');
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(color);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const randomColor = () => {
        const random = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        setColor(random);
    };

    return (
        <div className="w-full max-w-xs mx-auto p-6 bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-xl border border-white/10">
            <div
                className="w-full h-32 rounded-lg mb-4 transition-all duration-300 shadow-lg"
                style={{ backgroundColor: color, boxShadow: `0 10px 40px ${color}40` }}
            />
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full h-12 rounded-lg cursor-pointer mb-4"
            />
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="flex-1 bg-black/50 text-white px-4 py-2 rounded-lg border border-white/10"
                />
                <button
                    onClick={copyToClipboard}
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
                >
                    {copied ? <Check size={20} /> : 'Copy'}
                </button>
            </div>
            <button
                onClick={randomColor}
                className="w-full py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-medium"
            >
                Random Color
            </button>
        </div>
    );
}

// Todo List Component
function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Try this interactive demo!', done: false }
    ]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input, done: false }]);
            setInput('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="w-full max-w-xs mx-auto p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-white/10">
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Add a task..."
                    className="flex-1 bg-black/50 text-white px-4 py-2 rounded-lg border border-white/10 placeholder-gray-500"
                />
                <button
                    onClick={addTodo}
                    className="p-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
                >
                    <Plus size={20} />
                </button>
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto">
                {todos.map(todo => (
                    <div
                        key={todo.id}
                        className="flex items-center gap-2 p-3 bg-black/30 rounded-lg border border-white/5 hover:border-white/10 transition-all"
                    >
                        <button
                            onClick={() => toggleTodo(todo.id)}
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${todo.done ? 'bg-cyan-500 border-cyan-500' : 'border-white/30'
                                }`}
                        >
                            {todo.done && <Check size={14} className="text-white" />}
                        </button>
                        <span className={`flex-1 ${todo.done ? 'line-through text-gray-500' : 'text-white'}`}>
                            {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Modal Component
function DemoModal({ demo, onClose }) {
    if (!demo) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-2xl bg-gray-900/95 rounded-2xl border border-white/10 p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>
                <h3 className="text-2xl font-bold text-white mb-2">{demo.title}</h3>
                <p className="text-gray-400 mb-6">{demo.description}</p>
                <div className="flex justify-center">
                    {demo.component}
                </div>
            </motion.div>
        </motion.div>
    );
}

export { Calculator, ColorPicker, TodoList, DemoModal };
