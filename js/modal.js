$(".form").submit(e => {
    e.preventDefault();


    $.fancybox.open({
        src: "#modal",
        type: "inline"
    });
});

$('#btn').click(e => {
    e.preventDefault();

    $.fancybox.close({
        src: "#modal",
        type: "inline"
    });
});

