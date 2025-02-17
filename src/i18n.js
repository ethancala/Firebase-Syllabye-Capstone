// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            // HEADER
            "header": {
                "logoAlt": "Syllabye Logo",
                "mainSlogan": "STREAMLINE. SIMPLIFY.",
                "secondarySlogan": "SUCCEED.",
                "scrollDownAlt": "Scroll Down"
            },

            // TECH STACK
            "techStack": {
                "title": "Tech Stack",
                "githubRepo": "GitHub Repo",
                "subtitle": "Take a look at the languages, frameworks, and development tools we used.",
                "altText": {
                    "vs": "Visual Studio",
                    "vscode": "Visual Studio Code",
                    "css": "CSS3",
                    "html": "HTML5",
                    "js": "JavaScript",
                    "bootstrap": "Bootstrap",
                    "nodejs": "Node.js",
                    "react": "React",
                    "github": "GitHub",
                    "git": "Git",
                    "firebase": "Firebase"
                }
            },

            // SERVICES
            "services": {
                "title": "About our software",
                "subtitle": "A little about what we do",
                "bootstrapReactTitle": "Bootstrap in React",
                "bootstrapReactDesc": "We use the React front-end framework alongside Bootstrap to build a responsive and dynamic user interface.",
                "firebaseTitle": "Google Firebase",
                "firebaseDesc": "Firebase provides authentication, cloud storage, and a real-time database, ensuring that each user has a personalized and secure experience with their own SyllaBye.",
                "nodejsTitle": "Node.js",
                "nodejsDesc": "We use Node.js for its fast, scalable server-side capabilities, allowing us to handle real-time data processing and ensure smooth, efficient performance for our application."
            },

            // WHY USE
            "whyUse": {
                "title": "Why Use Our Software?",
                "learnMore": "Learn More",
                "reasons": {
                    "uploadSyllabi": {
                        "title": "Upload Syllabi",
                        "desc": "Upload syllabi you may have already created so students can review their course."
                    },
                    "createNewSyllabi": {
                        "title": "Create New Syllabi",
                        "desc": "Professors can make their own syllabi so that students can learn and succeed in their classes."
                    },
                    "viewDownloadSyllabi": {
                        "title": "View & Download Syllabi",
                        "desc": "Students can not only see their syllabi, but they can also download them for later use."
                    }
                }
            },

            // PARALLAX
            "parallax": {
                "heading": "Dynamic Syllabus Customization. Student-Friendly Features. Collaboration Tools. Accessibility and Inclusivity. Advanced Export Options. Employer Friendly Features. Future Scalability.",
                "buttonText": "Start Creating Your Syllabus"
            },

            // TEAM
            "team": {
                "title": "Meet The Team",
                "subtitle": "ChairForceOne & TheKrabbyPatties",
                "members": {
                    "irving": {
                        "name": "Irving Sanchez",
                        "description": "Irving is a senior pursuing a major in computer science with a minor in math and thereafter pursuing his masters in computer engineering. On his free time he enjoys playing with his dogs Groot and Peter, reading comic books, and invites anyone to play a game of chess or Magic: The Gathering with him.",
                        "title": "IrvingFSanchez@lewisu.edu"
                    },
                    "nick": {
                        "name": "Nick Krzysiak",
                        "description": "Nick is a Senior pursuing a major in computer science. Some of his hobbies include cars, camping, and going to the gym.",
                        "title": "nicholasakrzysiak@lewisu.edu"
                    },
                    "jaiden": {
                        "name": "Jaiden Leonard",
                        "description": "Jaiden is a senior majoring in computer science with a focus on software engineering and development. He enjoys playing videogames and working on cars.",
                        "title": "jaidentleonard@lewisu.edu"
                    },
                    "bryan": {
                        "name": "Bryan Avalos",
                        "description": "Bryan is a senior pursuing a double major in computer science and forensic criminal investigation. In his free time, he enjoys watching baseball, working on cars, playing videogames, and learning about technology.",
                        "title": "bryanhavalos@lewisu.edu"
                    }
                }
            }
        }
    },

    es: {
        translation: {
            // HEADER
            "header": {
                "logoAlt": "Logotipo de Syllabye",
                "mainSlogan": "OPTIMIZA. SIMPLIFICA.",
                "secondarySlogan": "TRIUNFA.",
                "scrollDownAlt": "Desplázate hacia abajo"
            },

            // TECH STACK
            "techStack": {
                "title": "Stack Tecnológico",
                "githubRepo": "Repositorio de GitHub",
                "subtitle": "Observa los lenguajes, frameworks y herramientas de desarrollo que utilizamos.",
                "altText": {
                    "vs": "Visual Studio",
                    "vscode": "Visual Studio Code",
                    "css": "CSS3",
                    "html": "HTML5",
                    "js": "JavaScript",
                    "bootstrap": "Bootstrap",
                    "nodejs": "Node.js",
                    "react": "React",
                    "github": "GitHub",
                    "git": "Git",
                    "firebase": "Firebase"
                }
            },

            // SERVICES
            "services": {
                "title": "Acerca de nuestro software",
                "subtitle": "Un poco sobre lo que hacemos",
                "bootstrapReactTitle": "Bootstrap en React",
                "bootstrapReactDesc": "Utilizamos el framework front-end React junto con Bootstrap para construir una interfaz de usuario receptiva y dinámica.",
                "firebaseTitle": "Google Firebase",
                "firebaseDesc": "Firebase proporciona autenticación, almacenamiento en la nube y una base de datos en tiempo real, lo que garantiza que cada usuario tenga una experiencia personalizada y segura con su propio SyllaBye.",
                "nodejsTitle": "Node.js",
                "nodejsDesc": "Usamos Node.js por sus capacidades rápidas y escalables del lado del servidor, permitiéndonos manejar el procesamiento de datos en tiempo real y asegurar un rendimiento fluido y eficiente para nuestra aplicación."
            },

            // WHY USE
            "whyUse": {
                "title": "¿Por qué usar nuestro software?",
                "learnMore": "Aprende Más",
                "reasons": {
                    "uploadSyllabi": {
                        "title": "Subir Syllabus",
                        "desc": "Sube los syllabus que ya hayas creado para que los estudiantes puedan revisar su curso."
                    },
                    "createNewSyllabi": {
                        "title": "Crear nuevos Syllabus",
                        "desc": "Los profesores pueden crear sus propios syllabus para que los estudiantes aprendan y tengan éxito en sus clases."
                    },
                    "viewDownloadSyllabi": {
                        "title": "Ver y descargar Syllabus",
                        "desc": "Los estudiantes no solo pueden ver sus syllabus, sino que también pueden descargarlos para usarlos más tarde."
                    }
                }
            },

            // PARALLAX
            "parallax": {
                "heading": "Personalización dinámica de sílabos. Funciones fáciles para el estudiante. Herramientas de colaboración. Accesibilidad e inclusividad. Opciones avanzadas de exportación. Funciones atractivas para empleadores. Escalabilidad futura.",
                "buttonText": "Comienza a crear tu sílabo"
            },

            // TEAM
            "team": {
                "title": "Conoce al Equipo",
                "subtitle": "ChairForceOne & TheKrabbyPatties",
                "members": {
                    "irving": {
                        "name": "Irving Sanchez",
                        "description": "Irving es un estudiante de último año que cursa la carrera de informática con una segunda especialización en matemáticas y posteriormente seguirá su maestría en ingeniería informática. En su tiempo libre, disfruta jugar con sus perros Groot y Peter, leer cómics e invita a cualquiera a una partida de ajedrez o Magic: The Gathering.",
                        "title": "IrvingFSanchez@lewisu.edu"
                    },
                    "nick": {
                        "name": "Nick Krzysiak",
                        "description": "Nick es un estudiante de último año que cursa la carrera de informática. Sus pasatiempos incluyen los autos, acampar e ir al gimnasio.",
                        "title": "nicholasakrzysiak@lewisu.edu"
                    },
                    "jaiden": {
                        "name": "Jaiden Leonard",
                        "description": "Jaiden es un estudiante de último año que se especializa en informática con enfoque en ingeniería y desarrollo de software. Le gusta jugar videojuegos y trabajar en autos.",
                        "title": "jaidentleonard@lewisu.edu"
                    },
                    "bryan": {
                        "name": "Bryan Avalos",
                        "description": "Bryan es un estudiante de último año que cursa una doble carrera en informática e investigación criminal forense. En su tiempo libre, disfruta ver béisbol, trabajar en autos, jugar videojuegos y aprender sobre tecnología.",
                        "title": "bryanhavalos@lewisu.edu"
                    }
                }
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
