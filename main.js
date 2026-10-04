const openButton = document.getElementById("openButton");
const music = document.getElementById("music");
const opening = document.getElementById("opening");
const flowers = document.getElementById("flowers");


const notesButton = document.getElementById("notesButton");
const notePopup = document.getElementById("notePopup");
const closeNote = document.getElementById("closeNote");


// sembunyikan notes saat awal
notesButton.style.display = "none";



openButton.onclick = () => {

    // musik
    music.play();


    // fade opening
    opening.style.opacity = "0";


    setTimeout(() => {

        opening.style.display = "none";


        // munculkan bunga
        flowers.classList.add("show");


        // jalankan animasi bunga
        document.body.classList.remove("container");


        // munculkan tombol notes setelah bunga muncul
        notesButton.style.display = "block";


    },1500);

};



// buka notes
notesButton.onclick = () => {

    notePopup.style.display="flex";

};


// tutup notes
closeNote.onclick = () => {

    notePopup.style.display="none";

};