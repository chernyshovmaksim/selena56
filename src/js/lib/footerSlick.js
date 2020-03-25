function footerSlick(){

    let footer, footerHeight, bodyHeight, windowHeight;

    footer = $('footer');
    footerHeight = $(footer).height();
    bodyHeight = $('body').height();
    windowHeight = $(window).height();



    if (bodyHeight < windowHeight) {
        let offsetSize = windowHeight - bodyHeight - footerHeight;
        $(footer).css({
            marginTop: offsetSize
        });
    }

}

module.exports = footerSlick;
