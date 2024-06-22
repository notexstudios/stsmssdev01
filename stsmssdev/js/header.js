// all the rirht of this js library functins premade by developers of NoteX studios belongs to NoteX studios
const miniContact = document.getElementById('miniContact');

const aboutList = document.getElementById('aboutList');
const about = document.getElementById('aboutAnchor');
const aboutIcon = document.getElementById('aboutIcon');

const academicsList = document.getElementById('academicsList');
const academics = document.getElementById('academicsAnchor');
const academicsIcon = document.getElementById('academicsIcon');


const miniAboutList = document.getElementById('miniAboutList');
const miniAbout = document.getElementById('miniAbout');
const miniAboutIcon = document.getElementById('miniAboutIcon');

const miniAcademicsList = document.getElementById('miniAcademicsList');
const miniAcademics = document.getElementById('miniAcademics');
const miniAcademicsIcon = document.getElementById('miniAcademicsIcon');

function displayChanger (element1, element2 , event, display){
    element1.addEventListener(event, ()=>{
        element2.style.display = display;
    })
}

miniAbout.addEventListener('click', () => {
    miniAboutIcon.classList.toggle('fa-angle-down');
    miniAboutIcon.classList.toggle('fa-angle-up');
    miniAboutList.classList.toggle('hidden');
})

miniAcademics.addEventListener('click', () => {
    miniAcademicsIcon.classList.toggle('fa-angle-down');
    miniAcademicsIcon.classList.toggle('fa-angle-up');
    miniAcademicsList.classList.toggle('hidden');
})


about.addEventListener('mouseover', () => {
    aboutIcon.classList.remove('fa-angle-down');
    aboutIcon.classList.add('fa-angle-up');
})

about.addEventListener('mouseout', () => {
    aboutIcon.classList.add('fa-angle-down');
    aboutIcon.classList.remove('fa-angle-up');

})

academics.addEventListener('mouseover', () => {
    academicsIcon.classList.remove('fa-angle-down');
    academicsIcon.classList.add('fa-angle-up');
})

academics.addEventListener('mouseout', () => {
    academicsIcon.classList.add('fa-angle-down');
    academicsIcon.classList.remove('fa-angle-up');

})

displayChanger(about, aboutList, 'mouseover', 'block');
displayChanger(about, aboutList, 'mouseout', 'none');
displayChanger(academics, academicsList, 'mouseover', 'block');
displayChanger(academics, academicsList, 'mouseout', 'none');


const miniNav = document.getElementById('miniNav')
const hamButton = document.getElementById('hamButton')

hamButton.addEventListener('click', ()=>{
    miniNav.classList.toggle('hidden');
})

miniContact.addEventListener('click', ()=>{
    miniNav.classList.toggle('hidden');
})
