
$(() => {
    
    let dataToBeDownloaded = ""
    
    console.log('script ')
    function postData (done) {
        $.post('/text', {text : $('#textArea').val()}, done)
    
    }
        $('#submit').click(() => {
            console.log('clicked')
    postData((response) => {
        dataToBeDownloaded = response
        $('#summary').html(`<p id = "para" >${response}</p>
        `)
            
    })    
    })
    
    
    // script for download of txt file
    
       
    })