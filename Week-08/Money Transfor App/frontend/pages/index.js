import Head from 'next/head';
import LoginForm from '../components/LoginForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Money Transfer App</title>
      </Head>
      <main className="flex items-center justify-center h-screen">
        <LoginForm />
      </main>
    </div>
  );
}
