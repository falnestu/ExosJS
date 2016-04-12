var container;
var camera, scene, raycaster, renderer, light;
var INTERSECTED;

var mouse = new THREE.Vector2();

var allFronts = ['22325.png', '22342.png', '27444.png', '27459.png', '27463.png', '401.png', '432.png', '495.png', '506.png', '605.png', '614.png', '635951426293999290.png', '635951439450962918.png'];
var allBack = ["card-back-default.png", "cardback-legendrank.png", "fireside-cardback.png"];

// instantiate a loader
var loader = new THREE.TextureLoader();

var BASE_URL = 'images/';
var DEFAULT_BACK = 'card-back-default.png';

var Card = function (config) {
	var _self = this;
	_self.urlFront = config.urlFront;
	_self.textureFront = loader.load(BASE_URL + 'front/'+ config.urlFront);
	_self.cardMaterial = new THREE.MeshBasicMaterial( { map: _self.textureFront, transparent : true } );
	_self.cardGeometry = new THREE.PlaneGeometry(16, 32);
	_self.urlBack = config.urlBack || DEFAULT_BACK;
	_self.textureBack = loader.load(BASE_URL + 'back/'+ _self.urlBack);
	_self.cardFront = new THREE.Mesh(_self.cardGeometry, _self.cardMaterial);
	_self.cardBackMaterial = new THREE.MeshBasicMaterial( { map: _self.textureBack, transparent : true } ); //, side: THREE.DoubleSide
	_self.cardBackGeometry = new THREE.PlaneGeometry(16, 32);
	_self.cardBack = new THREE.Mesh(_self.cardBackGeometry, _self.cardBackMaterial);
	_self.cardBack.rotation.y = Math.PI;
	_self.cardBack.position.z = 1;
	_self.card = new THREE.Object3D();
	_self.card.add(_self.cardFront,_self.cardBack );
	_self.card.position.x = config.position.x || 0;
	_self.card.position.y = config.position.y || 0;
	_self.card.position.z = config.position.z || 0;
}

Card.prototype.getObject3D = function() {
	return this.card;
};

function init() {
	container = document.getElementById( 'container' );

	camera = new THREE.PerspectiveCamera( 120, window.innerWidth/window.innerHeight, 0.1, 100 );
	camera.position.z = 40;

	scene = new THREE.Scene();

	var cards = [];

	var card = new Card({ urlFront : allFronts[0],
						  position : { 	x : 0  }
						});
	
	var card1 = new Card({ urlFront : allFronts[1],
						  position : { 	x : 20  }
						});

	var card2 = new Card({ urlFront : allFronts[2],
						  position : { 	x : 40  }
						});
	
	var card3 = new Card({ urlFront : allFronts[3],
						  position : { 	x : 60  }
						});

	var card4 = new Card({ urlFront : allFronts[4],
						  position : { 	x : 0, y : 40 }
						});
	
	var card5 = new Card({ urlFront : allFronts[5],
						  position : { 	x : 20, y : 40 }
						});

	var card6 = new Card({ urlFront : allFronts[6],
						  position : { 	x : 40, y : 40 }
						});
	
	var card7 = new Card({ urlFront : allFronts[7],
						  position : { 	x : 60, y : 40 }
						});
		
	scene.add(card.getObject3D());
	
	scene.add(card1.getObject3D());

	scene.add(card2.getObject3D());
	
	scene.add(card3.getObject3D());

	scene.add(card4.getObject3D());
	
	scene.add(card5.getObject3D());

	scene.add(card6.getObject3D());
	
	scene.add(card7.getObject3D());
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


