import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

declare var $: any;

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<FormDialogComponent>) { }

    ngOnInit(): void {
        // SEND MESSAGE WITH MODAL DIALOG
        $(document).ready(() => {
            if ($('#contactModal')) {
                
                let flashMessage = '';

                $('#sendMessage').click(function(event: any) {
                    let email = $('#emailMessage').val();
                    let object = 'Email address:' + email;
                    let message = $('#messageModal').val();
    
                    if (message !== '' && email !== '') {
                        $('#sendMessage').attr('href', 'mailto:keenndjc@gmail.com?subject=' + object + '&body=' + message);
    
                        flashMessage = 'Your message is sended successfully!';
                        $('.flash-message').text(flashMessage);

                        setTimeout(() => {
                            email = $('#emailMessage').val('');
                            message = $('#messageModal').val('');
                            $('.flash-message').text('');
                        }, 4000);
                    } else {

                        if (!email) {
                            flashMessage += `Your email is empty!
                            `;
                        }
    
                        if (!message) {
                            flashMessage += `Your message is empty!`;
                        }
    
                        $('.flash-message').text(flashMessage);
                        
                        event.preventDefault();
                    }
                });
            }
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
