import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="name-tag">Ryan Putka</div>
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <Stars
            radius={100}
            depth={50}
            count={7000}
            factor={6}
            saturation={1}
            fade={false}
            speed={0}
          />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>
      <div className="content-wrapper">
        <div className="section-content">
          <h1>Welcome to my Portfolio!</h1>
          <p>Learn more about my work by clicking on the planets below!</p>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
