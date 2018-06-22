const HomeController = (() => {
    return {
        init() {
            $(document).ready(() => {
                $('body').scrollspy({
                    target: ".navbar",
                    offset: 300
                });

                linkSmoothScrolling();
                navbarAnimation();
            });
        }
    };
})();