import React from "react";

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

class Face extends React.Component {
	constructor(props) {
		super(props);

		this.windowHalfX;
		this.windowHalfY;
		this.mouseX = 0;
		this.mouseY = 0;
		this.mesh;
		this.camera;
		this.reverseFlag = false;
	}

	componentDidMount() {
		if (typeof window !== "undefined") {
			this.windowHalfX = window.innerWidth / 2;
			this.windowHalfY = window.innerHeight / 2;
			document.addEventListener('mousemove', this.onDocumentMouseMove, false);
			document.addEventListener('touchmove', this.onDocumentMouseMove, false);
			document.addEventListener('touchstart', this.onDocumentMouseMove, false);
	
			this.onInit();
		}
	}

	onDocumentMouseMove = (e) => {
		if(window.orientation != undefined && e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
			let touch = e.touches[0];
			this.mouseX = touch.pageX- this.windowHalfX;
			this.mouseX = touch.pageY- this.windowHalfY;
		} else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
			this.mouseX = e.clientX - this.windowHalfX;
			this.mouseY = e.clientY - this.windowHalfY;
		}
	}

	onInit = () => {
		const container = document.createElement( 'div' );
		
		document.getElementById("face_here")?.appendChild( container );

		this.camera = new THREE.PerspectiveCamera( 455, window.innerWidth / window.innerHeight, 1, 20 );
		this.camera.position.set( 0, 0.8, 4 );

		const scene = new THREE.Scene();
		const renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
		
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		container.appendChild( renderer.domElement );

		const ktx2Loader = new KTX2Loader()
			.setTranscoderPath( './' )
			.detectSupport( renderer );

		new GLTFLoader()
			.setKTX2Loader( ktx2Loader )
			.setMeshoptDecoder( MeshoptDecoder )
			.load( './facecap.glb', ( gltf ) => {
					this.mesh = gltf.scene.children[ 0 ];
					// window.mesh = this.mesh;
					scene.add( this.mesh );
					this.animate(this.mesh);
				}
			);

		const environment = new RoomEnvironment();
		const pmremGenerator = new THREE.PMREMGenerator( renderer );
		scene.environment = pmremGenerator.fromScene( environment ).texture;

		renderer.setAnimationLoop( () => {
			renderer.render( scene, this.camera );
		} );

		window.addEventListener('resize', () => {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();

			renderer.setSize( window.innerWidth, window.innerHeight );
		});
	};

	animate = () => {
		requestAnimationFrame( this.animate );
	
		var target = {
			x: this.camera.position.x,
			y: this.camera.position.y,
			z: this.camera.position.z
		};
	
		if (((this.mouseX * .02)  < 3) && ((this.mouseX * .02)  > -3)) {
			target.x = this.mouseX * .02;
		} else {
			target.x = (this.mouseX * .02) > 0 ? 3 : -3;
		}
	
		if ((-1 * this.mouseY * .02  < 2) && (-1 * this.mouseY * .02  > -2)) {
			target.y = -1 * this.mouseY * .02;
		} else {
			target.y = -1 * this.mouseY * .02 > 0 ? 2 : -2;
		}
		
		if (this.mesh.position.y > 0.05) {
			this.reverseFlag = true;
		} else if (this.mesh.position.y < -0.05) {
			this.reverseFlag = false;
		}
	
		this.mesh.position.set(
			this.mesh.position.x,
			this.mesh.position.y = this.reverseFlag ? (this.mesh.position.y - 0.0015) : (this.mesh.position.y + 0.0015),
			this.mesh.position.z
		);
	
		this.mesh.lookAt( target.x, target.y, target.z );
	};    

	render() {
		return(
			<div id='face_here' />
		);
	}
}

export default Face;   
