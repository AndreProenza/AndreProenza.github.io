
/* FLAGS & LANGUAGES */

function dropdown() {
    var dropdown = document.getElementById("dropdown");
    // dropdown.style.visibility = "visible";
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } 
    else {
        dropdown.style.display = "block";
    }
}


function closeDropDown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = "none";
}



function getLanguage() {
    var language = localStorage.getItem("language");
    swapLanguage(language);
}

function swapLanguage(language) {

    //Variables
    var course = document.getElementById("course");
    var aboutMe = document.getElementById("aboutMe");
    var contacts = document.getElementById("contacts2");
    var nationality = document.getElementById("nationality");
    var languages = document.getElementById("languages");
    var education = document.getElementById("education");
    var master = document.getElementById("master");
    var bachelor = document.getElementById("bachelor");
    var ist = document.getElementById("ist");
    var fcul = document.getElementById("fcul");
    var employement = document.getElementById("employement");
    var date = document.getElementsByClassName("box2-inside1");
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var lisbon = document.getElementById("lisbon");
    var footerTitle = document.getElementById("footer-title");
    var projects = document.getElementById("projects");
    var mine = document.getElementById("mine");
    var myProjects = document.getElementById("myProjects");
    var contributed = document.getElementById("contributed");
    var contributedProjects = document.getElementById("contributedProjects");
    var mainLanguage = document.getElementById("mainLanguage");

    switch (language) {
        case 'English':
            course.innerHTML = "Software Engineer";
            course.style.paddingLeft = "95px";
            aboutMe.innerHTML =  " " + "About Me";
            contacts.innerHTML = " " + "Contacts";
            nationality.innerHTML = "<b>Nationality:</b> Portuguese";
            nationality.style.fontSize = "18px";
            languages.innerHTML = "<b>Languages:</b> Portuguese, Spanish, English";
            education.innerHTML = "<b>Education:</b>";
            master.innerHTML = "Master in Computer Science & Engeneering";
            bachelor.innerHTML = "Bachelor in Computer Science & Engeneering";
            ist.innerHTML = "Institute Superior Technical";
            fcul.innerHTML = "Faculty of Sciences University of Lisbon";
            employement.innerHTML = "Work Experience";
            date[0].innerHTML = "Dec 2020 - Present";
            text1.innerHTML = "- Worked as ...";
            text2.innerHTML = "- Developed ...";
            lisbon.innerHTML = "Lisbon";
            projects.innerHTML = "Projects";
            mine.innerHTML = "Mine";
            myProjects.innerHTML = "My projects...";
            contributed.innerHTML = "Contributed";
            contributedProjects.innerHTML = "Contributed projects...";
            footerTitle.innerHTML = "Knowledge & Skills";
            mainLanguage.innerHTML = " " + "English";
            mainLanguage.innerHTML = "<img src='IMG/england.jpg' class='img-languages'>" + "English";
            localStorage.setItem("language", "English");
            closeDropDown();
            break;
        case 'Spanish':
            course.innerHTML = "Ingeniero Informático";
            course.style.paddingLeft = "85px";
            aboutMe.innerHTML =  " " + "Sobre Mi";
            contacts.innerHTML = " " + "Contactos";
            nationality.innerHTML = "<b>Nacionalidad:</b> Portugués";
            nationality.style.fontSize = "18px";
            languages.innerHTML = "<b>Idiomas:</b> Portugués, Español, Inglés";
            education.innerHTML = "<b>Educación:</b>";
            master.innerHTML = "Máster en Ingeniería Informática";
            bachelor.innerHTML = "Licenciado en Ingeniería Informática";
            ist.innerHTML = "Instituto Superior Técnico";
            fcul.innerHTML = "Facultad de Ciencias, Universidad de Lisboa";
            employement.innerHTML = "Experiencia Laboral";
            date[0].innerHTML = "Dic 2020 - Now";
            text1.innerHTML = "- Trabajado como...";
            text2.innerHTML = "- He desenvolvido...";
            lisbon.innerHTML = "Lisboa";
            projects.innerHTML = "Proyectos";
            mine.innerHTML = "Mios";
            myProjects.innerHTML = "Mis proyectos...";
            contributed.innerHTML = "Contribuidos";
            contributedProjects.innerHTML = "Proyectos Contribuidos...";
            footerTitle.innerHTML = "Habilidades & Conocimiento";
            mainLanguage.innerHTML = " " + "Español";
            mainLanguage.innerHTML = "<img src='IMG/spain.png' class='img-languages'>" + "Español";
            localStorage.setItem("language", "Spanish");
            closeDropDown();
            break;
        case 'Portuguese':
            course.innerHTML = "Engenheiro Informático";
            course.style.paddingLeft = "75px";
            aboutMe.innerHTML =  " " + "Sobre Mim";
            contacts.innerHTML = " " + "Contactos";
            nationality.innerHTML = "<b>Nacionalidade:</b> Português";
            nationality.style.fontSize = "18px";
            languages.innerHTML = "<b>Línguas:</b> Português, Espanhol, Inglês";
            education.innerHTML = "<b>Educação:</b>";
            master.innerHTML = "Mestre em Engenharia Informática e de Computadores";
            bachelor.innerHTML = "Licenciado em Engenharia Informática";
            ist.innerHTML = "Instituto Superior Técnico";
            fcul.innerHTML = "Faculdade de Ciências da Universidade de Lisboa";
            employement.innerHTML = "Experiência de Trabalho";
            date[0].innerHTML = "Dez 2020 - Presente";
            text1.innerHTML = "- Trabalhou como...";
            text2.innerHTML = "- Desenvolveu...";
            lisbon.innerHTML = "Lisboa";
            projects.innerHTML = "Projetos";
            mine.innerHTML = "Meus";
            myProjects.innerHTML = "Meus Projetos...";
            contributed.innerHTML = "Contribuídos";
            contributedProjects.innerHTML = "Projetos Contribuídos...";
            footerTitle.innerHTML = "Conhecimento & Habilidades";
            mainLanguage.innerHTML = " " + "Português";
            mainLanguage.innerHTML = "<img src='IMG/portugal.png' class='img-languages'>" + "Português";
            localStorage.setItem("language", "Portuguese");
            closeDropDown();
            break;
        case 'Dutch':
            course.innerHTML = "Softwareentwickler";
            course.style.paddingLeft = "90px";
            aboutMe.innerHTML =  " " + "Über Mich";
            contacts.innerHTML = " " + "Kontakte";
            nationality.innerHTML = "<b>Staatsangehörigkeit:</b> Portugiesisch";
            nationality.style.fontSize = "18px";
            languages.innerHTML = "<b>Sprachen:</b> Portugiesisch, Spanisch, Englisch";
            education.innerHTML = "<b>Bildung:</b>";
            master.innerHTML = "Master in Informatik & Ingenieurwesen";
            bachelor.innerHTML = "Bachelor in Informatik & Ingenieurwesen";
            ist.innerHTML = "Institut Höher Technische";
            fcul.innerHTML = "Fakultät für Naturwissenschaften Universität Lissabon";
            employement.innerHTML = "Arbeitserfahrung";
            date[0].innerHTML = "Dez 2020 - Jetzt";
            text1.innerHTML = "- Gearbeitet Als...";
            text2.innerHTML = "- Entwickelt...";
            lisbon.innerHTML = "Lissabon";
            projects.innerHTML = "Projekte";
            mine.innerHTML = "Meine";
            myProjects.innerHTML = "Meine Projekte...";
            contributed.innerHTML = "Mitwirkende";
            contributedProjects.innerHTML = "Mitwirkende Projekte...";
            footerTitle.innerHTML = "Wissen & Fähigkeiten";
            mainLanguage.innerHTML = "<img src='IMG/germany.png' class='img-languages'>" + "Deutsche";
            localStorage.setItem("language", "Dutch");
            closeDropDown();
            break;
        default:
            break;
    }
}



/* BLACK & WHITE */
  
function darkMode() {
    var style = document.getElementById("style");
    style.href = "CSS/styleDarkMode.css";
    localStorage.setItem("mode", "dark");
}

function lightMode() {
    var style = document.getElementById("style");
    style.href = "CSS/style.css";
    localStorage.setItem("mode", "light");
}

function currentMode() {
    var mode = localStorage.getItem("mode");
    if  (mode === "light") {
        style.href = "CSS/style.css";
    }
    else {
        style.href = "CSS/styleDarkMode.css";
    }
}

function currentLanguage() {
    var language = localStorage.getItem("language");
    swapLanguage(language);
}



/* CITIES */

function show(city) {

    var language = localStorage.getItem("language");
    var dropdown = document.getElementsByClassName("cities-dropdown");
    var lisbonText = document.getElementById("lisbon-text");

    if (city === 'Lisbon') {
        switch (language) {
            case 'English':
                showAuxiliary(dropdown);
                lisbonText.innerHTML = "Capital and largest city of Portugal, with a population of 3 million in the metropolitan area. One of the oldest cities in the world, and the second-oldest European capital city (after Athens)";
                break;
            case 'Spanish':
                showAuxiliary(dropdown);
                lisbonText.innerHTML = "Capital y ciudad más grande de Portugal, con una población de 3 millones en la región metropolitana. Una de las ciudades más antiguas del mundo y la segunda capital europea más antigua (después de Atenas)";
                break;
            case 'Portuguese':
                showAuxiliary(dropdown);
                lisbonText.innerHTML = "Capital e maior cidade de Portugal, com uma população de 3 milhões na área metropolitana. Uma das cidades mais antigas do mundo e a segunda mais antiga capital europeia (depois de Atenas)";
                break;
            case 'Dutch':
                showAuxiliary(dropdown);
                lisbonText.innerHTML = "Hauptstadt und größte Stadt Portugals mit 3 Millionen Einwohnern in der Metropolregion. Eine der ältesten Städte der Welt und die zweitälteste europäische Hauptstadt (nach Athen)";
                break;
            default:
                break;
        }
    }
    //If city is other than lisbon, continue above...
    
}

function showAuxiliary(dropdown) {
    
    for(var i = 0; i < dropdown.length; i++){
        dropdown[i].style.display = "block";
    }
}


function hideCity() {
    
    var city = document.getElementsByClassName("cities-dropdown");
    for(var i = 0; i < city.length; i++){
        city[i].style.display = "none";
    }
}





/* ABOUT ME */

function showAboutMe() {
    var aboutMe = document.getElementById("aboutMe-dropdown");
    aboutMe.style.display = "block";
}

function hideAboutMe() {
    var aboutMe = document.getElementById("aboutMe-dropdown");
    aboutMe.style.display = "none";
}
