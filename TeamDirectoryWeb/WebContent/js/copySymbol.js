function setupCopySymbol(){
    $(document).on('click', ".copySymbol", function(){
        try {
            // find the email
           var email = $(this).closest('td').prev('td')[0];

            // get the selection of the document
           var selection = window.getSelection();
           var range = document.createRange();

           // select the email
           range.selectNodeContents(email);
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
