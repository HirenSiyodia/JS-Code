// Maps -> The Map object holds key-value pairs and remembers the original insertion order of the keys.
const map = new Map()
map.set('IN', "India");
map.set('USA', "United States Of India");
map.set('FR', "France");

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-" , value);
}