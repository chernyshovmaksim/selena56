function tabs(){

    const navs = $('.tabs > .tabs__nav > nav > a');
    const tabs = $('.tabs > .tabs__body > .tab__block');



    if(navs.length > 0){
        const firstTabId = navs[0].getAttribute('href');
    
        $(navs[0]).addClass('active');
        $(firstTabId).css({
            'display': 'block'
        });
        
    
        navs.click(function(e){
            e.preventDefault();
            $(navs).removeClass('active');
            tabs.css({
                'display': 'none'
            });
            let link = e.target.getAttribute('href');
            $(link).css({
                'display': 'block'
            });
    
            $(e.target).addClass('active');
        });

    }

}

module.exports = tabs;