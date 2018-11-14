<?php
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $emailFrom = $_POST['email'];
        $emailTitle = $_POST['emailTitle'];
        $message = $_POST['message'];
        
        $emailTo = "rxk97498@awsoo.com";
        $headers = "From: ".$emailFrom;
        $txt = "Email sent from ".$name.".\n\n".$message;
        
        mail($emailTo, $emailTitle, $txt, $headers);

        echo "<script>
            alert('The email was sent');
            window.open('../index.html', target='_self');
            </script>";
    }
?>