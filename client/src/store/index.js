import { proxy } from 'valtio';

const state = proxy({
    intro: true, // are we on home page or not
    color: '#efbd48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;