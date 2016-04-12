

var container;
var camera, scene, raycaster, renderer, light;
var INTERSECTED;

var mouse = new THREE.Vector2();



// instantiate a loader
var loader = new THREE.TextureLoader();

var backTexture = loader.load('images/back/card-back-default.png');
var onyxiaTexture = loader.load('images/front/432.png');

	/* ADD TEXTURE */
	var mindControlTexture = loader.load('images/front/401.png');


function init() {
	container = document.getElementById( 'container' );

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 100 );
	camera.position.z = 40;

	scene = new THREE.Scene();

	
	/*
		CARD
	*/
	card = new THREE.Object3D();//create an empty container
		/* ADD CARD */
		var card1 = new THREE.Object3D();

	// CARD FRONT
	var cardMaterial = new THREE.MeshBasicMaterial( { map: onyxiaTexture, transparent : true } ); //, side: THREE.DoubleSide
	var cardGeometry = new THREE.PlaneGeometry(16, 32);
	var cardFront = new THREE.Mesh(cardGeometry, cardMaterial);
		/* ADD CARD */
		var cardMaterial1 = new THREE.MeshBasicMaterial( { map: mindControlTexture, transparent : true } );
		var cardGeometry1 = new THREE.PlaneGeometry(16, 32);
		var cardFront1 = new THREE.Mesh(cardGeometry1, cardMaterial1);
		
	// CARD BACK
	var cardBackMaterial = new THREE.MeshBasicMaterial( { map: backTexture, transparent : true } ); //, side: THREE.DoubleSide
	var cardBackGeometry = new THREE.PlaneGeometry(16, 32);
	var cardBack = new THREE.Mesh(cardBackGeometry, cardBackMaterial);
	cardBack.rotation.y = Math.PI;
	cardBack.position.z = 1;
		/* ADD CARD */
		var cardBackMaterial1 = new THREE.MeshBasicMaterial( { map: backTexture, transparent : true } ); //, side: THREE.DoubleSide
		var cardBackGeometry1 = new THREE.PlaneGeometry(16, 32);
		var cardBack1 = new THREE.Mesh(cardBackGeometry, cardBackMaterial);
		cardBack1.rotation.y = Math.PI;
		cardBack1.position.z = 1;
		



	card.add( cardFront );//add a mesh with geometry to it
	card.add( cardBack );//when done, add the group to the scene

		/* ADD CARD */
		card1.add( cardFront1 );
		card1.add( cardBack1 );
		card1.position.x = 20;

	scene.add(card);
		/* ADD CARD */
		scene.add(card1);

	/* FOR CLICK */
	raycaster = new THREE.Raycaster();
	
	/* SET RENDERER */
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( 0xf0f0f0 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.sortObjects = false;
	container.appendChild(renderer.domElement);

	/* ORBIT */
	var orbit = new THREE.OrbitControls( camera, renderer.domElement );
		orbit.enableZoom = false;

	document.addEventListener( 'click', onDocumentMouseClick, false );
	//
	window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}


function onDocumentMouseClick( e ) {
  	e.preventDefault();
  	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1;

	raycaster.setFromCamera( mouse, camera );

	var intersects = raycaster.intersectObjects( scene.children, true);
	if ( intersects.length > 0 ) {
		if ( INTERSECTED != intersects[ 0 ].object ) {

			// Turn it
			intersects[0].object.parent.rotation.y += Math.PI;

			console.log("YO", intersects[0].object)
		}
	} else {
		//if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
		INTERSECTED = null;
	}

}
//
function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	
	camera.lookAt( scene.position );
	camera.updateMatrixWorld();

	renderer.render( scene, camera );
}

init();
animate();	


