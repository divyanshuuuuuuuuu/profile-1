// ===== THREE.JS SCENE FOR HOME PAGE =====
// This file creates the 3D animated room scene using vanilla Three.js

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js';

class ThreeScene {
    constructor(container) {
        this.container = container;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.animationId = null;
        this.clock = new THREE.Clock();
        this.floatingCards = [];
        this.laptopScreen = null;

        this.init();
    }

    init() {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x0a0a0f, 5, 20);

        // Create camera
        this.camera = new THREE.PerspectiveCamera(
            60,
            this.container.clientWidth / this.container.clientHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 2, 7);

        // Create renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.container.appendChild(this.renderer.domElement);

        // Add orbit controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableZoom = false;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.3;
        this.controls.maxPolarAngle = Math.PI / 2.2;
        this.controls.minPolarAngle = Math.PI / 3.5;
        this.controls.enablePan = false;

        // Add lights
        this.addLights();

        // Add room
        this.createRoom();

        // Add floating cards
        this.createFloatingCards();

        // Add stars
        this.createStars();

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());

        // Start animation
        this.animate();
    }

    addLights() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambientLight);

        // Point lights
        const pointLight1 = new THREE.PointLight(0x00f5ff, 1.5, 100);
        pointLight1.position.set(10, 10, 10);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xa855f7, 1.5, 100);
        pointLight2.position.set(-10, 10, -10);
        this.scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0xffffff, 1, 100);
        pointLight3.position.set(0, 15, 0);
        this.scene.add(pointLight3);

        // Spotlight
        const spotLight = new THREE.SpotLight(0x00f5ff, 1);
        spotLight.position.set(0, 10, 0);
        spotLight.angle = 0.3;
        spotLight.penumbra = 1;
        spotLight.castShadow = true;
        this.scene.add(spotLight);
    }

    createRoom() {
        const roomGroup = new THREE.Group();
        roomGroup.position.y = -1;

        // Floor
        const floorGeometry = new THREE.PlaneGeometry(12, 12);
        const floorMaterial = new THREE.MeshStandardMaterial({
            color: 0x0a0a0f,
            roughness: 0.7,
            metalness: 0.3
        });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        roomGroup.add(floor);

        // Grid helper
        const gridHelper = new THREE.GridHelper(12, 20, 0x00f5ff, 0x1a1a24);
        gridHelper.position.y = 0.01;
        roomGroup.add(gridHelper);

        // Back wall
        const wallGeometry = new THREE.PlaneGeometry(12, 6);
        const wallMaterial = new THREE.MeshStandardMaterial({
            color: 0x111118,
            roughness: 0.8
        });
        const wall = new THREE.Mesh(wallGeometry, wallMaterial);
        wall.position.set(0, 3, -6);
        wall.receiveShadow = true;
        roomGroup.add(wall);

        // Desk
        const deskGeometry = new THREE.BoxGeometry(3.5, 0.1, 1.8);
        const deskMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a1a24,
            roughness: 0.4,
            metalness: 0.6
        });
        const desk = new THREE.Mesh(deskGeometry, deskMaterial);
        desk.position.set(0, 0.5, 0);
        desk.castShadow = true;
        roomGroup.add(desk);

        // Laptop base
        const laptopBaseGeometry = new THREE.BoxGeometry(1, 0.05, 0.6);
        const laptopBaseMaterial = new THREE.MeshStandardMaterial({
            color: 0x2a2a3a,
            roughness: 0.3,
            metalness: 0.7
        });
        const laptopBase = new THREE.Mesh(laptopBaseGeometry, laptopBaseMaterial);
        laptopBase.position.set(0, 0.6, 0);
        laptopBase.castShadow = true;
        roomGroup.add(laptopBase);

        // Laptop screen
        const screenGeometry = new THREE.BoxGeometry(1, 0.65, 0.05);
        const screenMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a1a1a,
            roughness: 0.2,
            metalness: 0.8
        });
        const screen = new THREE.Mesh(screenGeometry, screenMaterial);
        screen.position.set(0, 1, -0.3);
        screen.rotation.x = -0.3;
        screen.castShadow = true;
        roomGroup.add(screen);

        // Screen display (glowing)
        const displayGeometry = new THREE.PlaneGeometry(0.95, 0.6);
        const displayMaterial = new THREE.MeshStandardMaterial({
            color: 0x00f5ff,
            emissive: 0x00f5ff,
            emissiveIntensity: 0.5,
            toneMapped: false
        });
        this.laptopScreen = new THREE.Mesh(displayGeometry, displayMaterial);
        this.laptopScreen.position.set(0, 1, -0.27);
        this.laptopScreen.rotation.x = -0.3;
        roomGroup.add(this.laptopScreen);

        // Accent lights on desk
        const accentLight1 = new THREE.PointLight(0x00f5ff, 2, 2);
        accentLight1.position.set(-1.5, 0.7, 0);
        roomGroup.add(accentLight1);

        const accentLight2 = new THREE.PointLight(0xa855f7, 2, 2);
        accentLight2.position.set(1.5, 0.7, 0);
        roomGroup.add(accentLight2);

        this.scene.add(roomGroup);
    }

    createFloatingCards() {
        const cardPositions = [
            { pos: [-2.5, 2.5, 0], color: 0x00f5ff },
            { pos: [2.5, 2, 1], color: 0xa855f7 },
            { pos: [-2, 1.5, 2], color: 0xec4899 },
            { pos: [2, 3, -1], color: 0x3b82f6 }
        ];

        cardPositions.forEach((data, index) => {
            const cardGroup = new THREE.Group();

            // Main card
            const cardGeometry = new THREE.BoxGeometry(0.8, 1, 0.05);
            const cardMaterial = new THREE.MeshStandardMaterial({
                color: data.color,
                emissive: data.color,
                emissiveIntensity: 0.3,
                roughness: 0.2,
                metalness: 0.8,
                transparent: true,
                opacity: 0.9
            });
            const card = new THREE.Mesh(cardGeometry, cardMaterial);
            cardGroup.add(card);

            // Glow outline
            const glowGeometry = new THREE.BoxGeometry(0.8, 1, 0.05);
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: data.color,
                transparent: true,
                opacity: 0.1
            });
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            glow.scale.set(1.05, 1.05, 1.05);
            cardGroup.add(glow);

            cardGroup.position.set(...data.pos);
            cardGroup.userData = {
                index,
                baseY: data.pos[1],
                material: cardMaterial
            };

            this.floatingCards.push(cardGroup);
            this.scene.add(cardGroup);
        });
    }

    createStars() {
        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.7,
            transparent: true,
            opacity: 0.8
        });

        const starsVertices = [];
        for (let i = 0; i < 5000; i++) {
            const x = (Math.random() - 0.5) * 200;
            const y = (Math.random() - 0.5) * 200;
            const z = (Math.random() - 0.5) * 200;
            starsVertices.push(x, y, z);
        }

        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        this.scene.add(stars);
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());

        const t = this.clock.getElapsedTime();

        // Animate floating cards
        this.floatingCards.forEach((card, index) => {
            // Rotation
            card.rotation.x = Math.sin(t * 0.3 + index) * 0.2;
            card.rotation.y = t * 0.2 + index;

            // Floating motion
            card.position.y = card.userData.baseY + Math.sin(t * 1.5 + index * 0.2) * 0.3;

            // Pulsing glow
            const intensity = 0.3 + Math.sin(t * 2 + index) * 0.2;
            card.userData.material.emissiveIntensity = intensity;
        });

        // Animate laptop screen glow
        if (this.laptopScreen) {
            this.laptopScreen.material.emissiveIntensity = 0.5 + Math.sin(t) * 0.2;
        }

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.renderer) {
            this.renderer.dispose();
            this.container.removeChild(this.renderer.domElement);
        }
        window.removeEventListener('resize', () => this.onWindowResize());
    }
}

// Initialize the scene when the script loads
export function initThreeScene(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        return new ThreeScene(container);
    }
    return null;
}
