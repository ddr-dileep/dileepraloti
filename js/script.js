let skillCircles = ["<div class='skill-circle green'><img class='skill-image' src='./assets/skills/android.png'/></div>",
                    "<div class='skill-circle black'><img class='skill-image' src='./assets/skills/apple.png'/></div>",
                    "<div class='skill-circle pink'><img class='skill-image' src='./assets/skills/css3.png'/></div>",
                    "<div class='skill-circle blue'><img class='skill-image' src='./assets/skills/c.png'/></div>",
                    "<div class='skill-circle purple'><img class='skill-image' src='./assets/skills/database.png'/></div>",
                    "<div class='skill-circle blue'><img class='skill-image' src='./assets/skills/html5.png'/></div>",
                    "<div class='skill-circle teal'><img class='skill-image' src='./assets/skills/java.png'/></div>",
                    "<div class='skill-circle green'><img class='skill-image' src='./assets/skills/javascript.png'/></div>",
                    "<div class='skill-circle pink'><img class='skill-image' src='./assets/skills/python.png'/></div>",
                    "<div class='skill-circle purple'><img class='skill-image' src='./assets/skills/react.png'/></div>",
                    "<div class='skill-circle yellow'><img class='skill-image' src='./assets/skills/sketch.png'/></div>",
                    "<div class='skill-circle yellow'><img class='skill-image' src='./assets/skills/swift.png'/></div>"];

let row1Elements = [];



function animateSkills(circleWidth) {
    const numberOfCircles = 2;

    $("#skills-row-1").animate({
        left: "-=" + (circleWidth * numberOfCircles),
    }, circleWidth * 20, "linear", () => {
        // We want to remove numberOfCircles from the front of the skills row,
        // and add numberOfCircles to the back...

        // Animation complete.
        for (let i = 0; i < numberOfCircles; i++) {
            // Always remove the first element from the arrays.
            let itemToRemove = row1Elements.splice(0, 1)[0];
            $(itemToRemove).remove();

            // Add another to the end...
            addSkill();
        }

        // Animate again...
        animateSkills(circleWidth);
    });
}

function addSkill() {
    let row1Skill = skillCircles[Math.floor(Math.random() * skillCircles.length)];    
    let row1element = $.parseHTML(row1Skill);
    $(row1element).attr('id', uniqueId());
    $("#skills-row-1").append(row1element);
    row1Elements.push(row1element);
}

function initialiseSkillsAnimation(circleWidth) {
    let width = window.screen.availWidth + window.screen.availHeight;

    let numberOfCircles = width / circleWidth;

    for (let i = 0; i < numberOfCircles; i++) {
        addSkill();
    }

    animateSkills(circleWidth);
}

/*
    Unique ID generator sourced from StackOverflow for simplicity.
    https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id
*/
function uniqueId() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

$(document).ready(function(){

    let distance = $(window).scrollTop();
    // let marginLeft = parseInt(($("#first-name").css("margin-left")).replace(/[^\d\.]/g, ''),10);
    $('#first-name').css({ 'transform': 'translate(' + -distance + 'px, 0px)'});
    $('#last-name').css({ 'transform': 'translate(' + distance + 'px, 0px)'});
    $('#my-picture').css({ 'transform': 'translate(-50%, ' + distance / 3 + 'px)'});

    let aboutOffset = $("#about").offset();
    let experienceOffset = $("#experience").offset();

    $('#spice-1').css({ 'transform': 'translate(0, ' + (distance - aboutOffset.top - 400) / 3 + 'px)'});
    $('#spice-2').css({ 'transform': 'translate(0, ' + ((distance - aboutOffset.top) - 1500) / 3 + 'px)'});
    $('#spice-3').css({ 'transform': 'translate(0, ' + ((distance - experienceOffset.top) - 800) / 3 + 'px)'});



    $(window).scroll(function() {
        let distance = $(window).scrollTop();
        // let marginLeft = parseInt(($("#first-name").css("margin-left")).replace(/[^\d\.]/g, ''),10);
        $('#first-name').css({ 'transform': 'translate(' + -distance + 'px, 0px)'});
        $('#last-name').css({ 'transform': 'translate(' + distance + 'px, 0px)'});
        $('#my-picture').css({ 'transform': 'translate(-50%, ' + distance / 3 + 'px)'});

        let aboutOffset = $("#about").offset();
        let experienceOffset = $("#experience").offset();
        $('#spice-1').css({ 'transform': 'translate(0, ' + (distance - aboutOffset.top - 400) / 3 + 'px)'});
        $('#spice-2').css({ 'transform': 'translate(0, ' + ((distance - aboutOffset.top) - 1500) / 3 + 'px)'});
        $('#spice-3').css({ 'transform': 'translate(0, ' + ((distance - experienceOffset.top) - 800) / 3 + 'px)'});

        // console.log(marginLeft);
    });

    // Animate the skills section.
    initialiseSkillsAnimation(150);

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
        
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
          });
        } // End if
    });
});