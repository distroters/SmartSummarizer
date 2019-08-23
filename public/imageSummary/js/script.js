$(() => {

    $.get('/getText', function(data) {
       $('#imageText').html(`
       <p>${data}</p>
       `)
    });
})