let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

function dragElement(terrariumElement) {
    terrariumElement.onpointerdown = pointerDrag;
}

document.getElementById('plant1').onpointerdown = function() {
    dragElement(document.getElementById('plant1'));
};
document.getElementById('plant2').onpointerdown = function() {
    dragElement(document.getElementById('plant2'));
};
