import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var mapboxgl: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        // SEND MESSAGE WITH MODAL BOX
        $(document).ready(() => {
            if ($('.footer')) {
                // OPEN NEW TAB FOR OTHERS DOMAINS
                $('.social').attr('target', function() {
                    if($('a').host == location.host) return '_self'
                    else return '_blank'
                });
            }

            if ($('#contactModal')) {

                let flashMessage = '';

                $('#sendMessage').click(function(event: any) {
                    let name = $('#nameMessage').val();
                    let email = $('#emailMessage').val();
                    let object = 'Name:' + name + ', Email address:' + email;
                    let message = $('#messageModal').val();
    
                    
    
                    if (message.trim() !== '' && name.trim() !== '' && email.trim() !== '') {
                        $('#sendMessage').attr('href', 'mailto:keenndjc@gmail.com?subject=' + object + '&body=' + message);
    
                        flashMessage = 'Your message is sended successfully!';
                        $('.flash-message').text(flashMessage);

                        setTimeout(() => {
                            name = $('#nameMessage').val('');
                            email = $('#emailMessage').val('');
                            message = $('#messageModal').val('');
                            $('.flash-message').text('');
                        }, 4000);
                    } else {
    
                        if (!name.trim()) {
                            flashMessage = `Your name is empty!
                            `;
                        }
    
                        if (!email.trim()) {
                            flashMessage += `Your email is empty!
                            `;
                        }
    
                        if (!message.trim()) {
                            flashMessage += `Your message is empty!`;
                        }
    
                        $('.flash-message').text(flashMessage);
                        
                        event.preventDefault();
                    }
                });
            }
        });
    }

}
