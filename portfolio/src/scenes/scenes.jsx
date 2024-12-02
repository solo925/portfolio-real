import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';

const Scene = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {/* Example 3D object: a rotating cube */}
            <mesh rotation={[0.5, 0.5, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={'#00bcd4'} />
            </mesh>
            <OrbitControls />
        </Canvas>
    );
};

export default Scene;
