import React, { useState, useEffect } from 'react';
import ImageDisplay from './components/ImageDisplay';
import TextArea from './components/TextArea';
import ReloadButton from './components/ReloadButton';
import Greeting from './components/Greeting';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [text, setText] = useState('');

  const fetchImage = async () => {
    const response = await fetch(`https://api.unsplash.com/photos/random?orientation=landscape&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`);
    const data = await response.json();
    setImageUrl(data.urls.regular);
    setText('');
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="bg-slate-900 text-white flex flex-col items-center p-6 min-h-screen">
      <NavBar></NavBar>
      <Greeting />
      <ImageDisplay imageUrl={imageUrl} />
      <TextArea text={text} setText={setText} />
      <ReloadButton fetchImage={fetchImage} />
      <Footer></Footer>
    </div>
  );
}