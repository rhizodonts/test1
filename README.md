install whatever packages you need, this example uses [dub.sh/-OM27rKu](https://dub.sh/-OM27rKu)

`npm i browserify`

`index.html` and `script.js` need to be in the same level (root dir):  
<img width="171" alt="image" src="https://github.com/rhizodonts/test1/assets/25330392/ceb4c305-81d8-466b-b70e-88fb401b5055">


this needs to be in `index.html`:
```
<script src="./bundle.js"></script>
```

call your packages and you can do doc querySelector and stuff in `script.js`

`npx browserify script.js -o bundle.js`

* `script.js` - frontend script
* `bundle.js` - the file name you want the bundle to be

repeat npx blah blah everytime you update/edit `script.js`
