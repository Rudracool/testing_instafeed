

$(()=>{
    var self = this;

    var feed = new Instafeed({
        accessToken: 'IGQVJYTjBDM3pNcjU3OEo1OFJmcHFPRXdNWlZA6RUJ5QWxxaTlkU2d1UGd0QjNtNUN0Y1VBVmxwZA292c2ZABMjdLbUNNUFgwWFVZAcEtXVmdHcmI4U1RkWDVGZAVVhNFpuMEVFT2Y0T1M1ZA1RLeGhKRW1JOQZDZD',
        debug:true,
        sortBy: 'most-recent',
        get:'user',
        userId:17841408414577377,
        resolution: "thumbnail",
        after: function() {
            
            $('.instafeed').slick({
                dots: false,
                infinite: true,
                slidesToShow: 8,
                slidesToScroll: 2,
                arrows: false,
                adaptiveHeight: true,
                autoplay: true,
                responsive: [{
                        breakpoint: 700,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2
                        }
                    }
                ]
            });
        },
        template:'<div class="gallery-item" data-username="{{username}}" tabindex="0"><div class="image-section" style="background:url({{image}});background-position: top center;background-size: cover;background-repeat: no-repeat;"><!--<img src="{{image}}"  class="gallery-image" alt="{{username}}">--><a class="gallery-item-info" href="{{link}}"></a></div></div>'
        
    });
    if ($('#instafeed').length !== 0 ) {
        feed.run();
    }


})