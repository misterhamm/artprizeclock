var clock;
			
			$(document).ready(function() {
				// Set dates.
				var startDate   = new Date("September 23, 2015 12:00 PM EDT");
				var currentDate = new Date();
                var endDate     = new Date("October 15, 2015 10:00 pm EDT");

				var diff = 0;
                
				
                //Display Counter Heading
                if (currentDate < startDate) {
                    $('.heading').html("Time until ArtPrize");
                    // Calculate the difference in seconds between the future and current date
                    var diff = startDate.getTime() / 1000 - currentDate.getTime() / 1000;

                    // Calculate day difference and apply class to .clock for extra digit styling.
                    function dayDiff(first, second) {
                        return (second-first)/(1000*60*60*24);
                    }

                    if (dayDiff(currentDate, startDate) < 100) {
                        $('.clock').addClass('twoDayDigits');
                    } else {
                        $('.clock').addClass('threeDayDigits');
                    }
                    }
                else if (currentDate > startDate && currentDate < endDate) {
                    $('.heading').html("Time left to enjoy ArtPrize");
                    $('.message').html('What are you doing here?? <br>Go see some art!!!');
                    // Calculate the difference in seconds between the future and current date
                    var diff = endDate.getTime() / 1000 - currentDate.getTime() / 1000;

                    // Calculate day difference and apply class to .clock for extra digit styling.
                    function dayDiff(first, second) {
                        return (second-first)/(1000*60*60*24);
                    }

                    if (dayDiff(currentDate, endDate) < 100) {
                        $('.clock').addClass('twoDayDigits');
                    } else {
                        $('.clock').addClass('threeDayDigits');
                    }
                }
                
                else {
                    $('.message').html("Check back soon for a new countdown!");
                }

				// Instantiate a coutdown FlipClock
				clock = $('.clock').FlipClock(diff, {
					clockFace: 'DailyCounter',
					countdown: true,
                    callbacks: {
		        	stop: function() {
		        		$('.message').html('What are you doing here?? <br>Go see some art!!!')
		        	}
		        }
				});
			});
