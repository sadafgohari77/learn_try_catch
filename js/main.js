window.onload = function () {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var fileSelected = document.getElementById('txtfiletoread');
        fileSelected.addEventListener('change', function (e) {
            let fileExtension = /text.*/;
            let fileTobeRead = fileSelected.files[0];
            if (fileTobeRead.type.match(fileExtension)) {
                let fileReader = new FileReader();
                fileReader.onload = function (e) {
                document.getElementById('resultdivison').innerText ="";
                document.getElementById('filecontents').innerText = fileReader.result;
                    try {
                        let content = fileReader.result;
                        let aStart = content.indexOf( "a=" );
                        let bStart = content.indexOf( "b=" );
                        let numberA = '', numberB = '' ;
                        if ( ( aStart != (-1) ) && ( bStart != ( -1 ) ) ) {
                            let resultDivison;
                            aStart += 2;
                            while ( content[ aStart ] < 10){
                                numberA += content[ aStart ];
                                aStart++;
                            }
                            bStart += 2;
                            while ( content[ bStart ] ) {
                                numberB += content[ bStart ];
                                bStart++;
                            }
                            if ( numberB == 0 ){
                                throw "Error1"
                            }
                            resultDivison = numberA / numberB ;
                            document.getElementById('resultdivison').innerText = resultDivison ;
                        }
                    } catch( er ) {
                      if (er=='Error1'){
                          alert("Error:Divide by zero")
                      }
                    } finally {
                       document.getElementById("message").innerText="Thank you for using our site";
                    }
                }
                fileReader.readAsText(fileTobeRead);
            } else {
                alert("Please select text file");
            }
        }, false);
    } else {
        alert("Files are not supported");
    }
}