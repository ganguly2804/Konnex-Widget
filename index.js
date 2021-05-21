let search = document.querySelector("#step-one");
const intro = introJs();
intro.setOptions({
    steps:[
        {
            intro: 'Welcome to our new Website! let\'s take a tour'
        },
        {
            element:"#step-one",
            intro:"read this"
        }
    ]
})

intro.start()