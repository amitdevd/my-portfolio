
        const skills = ["designer", "angular developer", "frontend developer", "UI/UX specialist"];
        let index = 0;

        setInterval(() => {
        const skillsSpan = document.querySelector(".skills");
        index = (index + 1) % skills.length; // Cycle through the skills array
        skillsSpan.textContent = skills[index];
        }, 5000); // Change every 5 seconds

        $(window).on("scroll", function() {
            if($(window).scrollTop() > 500) {
                $("header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
            $("header").removeClass("active");
            }
        });

        var owl = $('.screenshot_slider').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: true,
            margin: 0,    
            autoplayTimeout: 4000,
            smartSpeed: 400,
            center: true,
            navText: ['&#8592;', '&#8594;'],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 5
                },
                1200: {
                    items: 5
                }
            }
        });

        /****************************/

        jQuery(document.documentElement).keydown(function (event) {    

            // var owl = jQuery("#carousel");

            // handle cursor keys
            if (event.keyCode == 37) {
            // go left
            owl.trigger('prev.owl.carousel', [400]);
            //owl.trigger('owl.prev');
            } else if (event.keyCode == 39) {
            // go right
                owl.trigger('next.owl.carousel', [400]);
            //owl.trigger('owl.next');
            }

        });