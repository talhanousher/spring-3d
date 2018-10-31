var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200);
camera.position.set(0, 0, 30);
// camera.lookAt(0, 0, 0);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene').appendChild(renderer.domElement);
var springPoints = [];
var b = 0;
var tmin = 0;
var tmax = 10*3.142;
var tin = (tmax-tmin)/1000
for (var i = tmin; i < tmax; i += tin) {
    const point = {
        x: Math.cos(i),
        y: Math.sin(i),
        z: i,
    }
    springPoints.push(point);
}
console.log(springPoints);
var geometry = new THREE.Geometry();
for (var i = 0; i < springPoints.length; i++) {
    geometry.vertices.push(new THREE.Vector3(springPoints[i].x, springPoints[i].y, springPoints[i].z));
}
geometry.faces.push(new THREE.Face3(1, 2, 0));
var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
var line = new THREE.Line(geometry, material);
scene.add(line);
animate = function () {

    requestAnimationFrame(animate);
    // line.rotation.x = Date.now() * 0.002;
    // line.rotation.y = Date.now() * 0.0002;
    line.rotation.z = Date.now() * 0.004;
    renderer.render(scene, camera);

}
animate();

