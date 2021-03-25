
 let saveFile = () => {


       const header = document.getElementById('header');


    	const image1 = document.getElementById('image1');


        const image2 = document.getElementById('image2');

        const image3 = document.getElementById('image3');


        const image4 = document.getElementById('image4');


    	const image5 = document.getElementById('image5');


        const image6 = document.getElementById('image6');



        const footer = document.getElementById('footer');

        // ---------------------------------------------------------------
	   let data =


           '<head><title>Photowall | Photo Gallery</title><link href="https://cmfdev.s3.us-east-2.amazonaws.com/client-style.css" type="text/css" rel="stylesheet"/></head><img src="https://raw.githubusercontent.com/CMFdev-1/photowall/main/photowall%20logo.png" width="200px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://cmfdev-1.github.io/photowall/" class="GetStarted" style="vertical-align: top;">Get Started</a><br><hr><center>' + header.value + '' +


            '<img src="' + image1.value + '" width="40%">' +


            '<img src="' + image2.value + '" width="40%">' +


            '<img src="' + image3.value + '" width="40%">' +


            '<img src="' + image4.value + '" width="40%">' +


            '<img src="' + image5.value + '" width="40%">' +


            '<img src="' + image6.value + '" width="40%">' +





            '</center>' + footer.value;

        // -----------------------------------------------------
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'Photowall_Gallery.txt';

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
    }
