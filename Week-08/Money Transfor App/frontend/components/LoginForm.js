import { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      // Redirect or update UI accordingly
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md">
      <h2 className="text-2xl mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-4 text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 text-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="w-full bg-blue-500 p-2 rounded">Login</button>
    </form>
  );
}
