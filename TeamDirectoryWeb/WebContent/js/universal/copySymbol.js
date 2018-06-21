function setupCopySymbol(){
    $(document).on('click', ".copySymbol", function(){
        try {
            // find the first name
           let firstName = $(this).parent().children().first();
           
            // get the selection of the document
           let selection = window.getSelection();
           let range = document.createRange();

           // select the first name
           range.selectNodeContents(firstName);
           selection.removeAllRanges();
           selection.addRange(range);

           // copy to clipboard
           document.execCommand('copy');

           // deselect text
           if (window.getSelection){
               window.getSelection().removeAllRanges();
           }
           else if (document.selection){
               document.selection.empty();
           }

        }catch(err){
            console.log(err);
        }

        $(this).find("span")[0].innerHTML = "Copied!";
    });
}
