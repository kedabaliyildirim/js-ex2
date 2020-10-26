const dropArea =document.getElementById('imageArea');
const preview = document.getElementById('preview');
const stopDef = document.getElementById('stopDef');

function stopDefault(event) {
    event.preventDefault();
        event.stopPropagation
}
// // stopDef.addEventListener('dragover', stopDefault, false)
// // stopDef.addEventListener('dragenter', stopDefault, false)
// // stopDef.addEventListener('dragleave', stopDefault, false)
// // stopDef.addEventListener('drop', stopDefault, false)
dropArea.addEventListener('dragenter', stopDefault, false);
dropArea.addEventListener('dragleave', stopDefault, false);
dropArea.addEventListener('dragover', stopDefault, false);
dropArea.addEventListener('drop', stopDefault, false);


function onDrop(event) {
    const data = event.dataTransfer,
        files = data.files;
 
    fileHandler(files)      
}
dropArea.addEventListener('drop', onDrop, false);


function fileHandler(files) {
    for (let i =0, len=files.length; i<len;i++) {
        imgPreview(files[i])
    }
}

function imgPreview(data) {
    const pImg = document.createElement("div");
    pImg.className = "image-view";
    preview.appendChild(pImg);

    const img = document.createElement("img");
    pImg.appendChild(img);

    const overlay = document.createElement("div");
    overlay.className = "overlay"
    pImg.appendChild(overlay);
    
    const read = new FileReader();
    read.onload= function(event) {
        img.src = event.target.result;
    }
    read.readAsDataURL(data)
}