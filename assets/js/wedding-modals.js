/*
 * Wedding Modals JavaScript
 * Handles modal display, accordion, color bars, and RSVP form
 */

(function($) {
	'use strict';

	// Modal content templates
	var modalContents = {
		'our-story': `
			<h2>Our Story</h2>
			<p>We met on a beautiful spring day and instantly knew there was something special between us. What started as a chance encounter blossomed into a love story filled with laughter, adventures, and countless memories.</p>
			<blockquote>
				<p>"Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day."</p>
			</blockquote>
			<ul class="story-timeline">
				<li>
					<div class="timeline-date">Spring 2020</div>
					<div class="timeline-content">We met for the first time at a coffee shop, and spent hours talking about everything and nothing.</div>
				</li>
				<li>
					<div class="timeline-date">Summer 2021</div>
					<div class="timeline-content">Our first vacation together, where we discovered our shared love for sunsets and beach walks.</div>
				</li>
				<li>
					<div class="timeline-date">Winter 2022</div>
					<div class="timeline-content">We moved in together, making a home filled with love, plants, and our favorite memories.</div>
				</li>
				<li>
					<div class="timeline-date">Fall 2023</div>
					<div class="timeline-content">The proposal happened on a beautiful autumn evening, surrounded by golden leaves and endless love.</div>
				</li>
			</ul>
			<p>Now, we're excited to begin the next chapter of our journey together, and we would be honored to have you share in our special day.</p>
		`,
		'wedding-details': `
			<h2>Wedding Details</h2>
			<div class="wedding-details-section">
				<div class="detail-item">
					<strong>Date & Time</strong>
					<span>Saturday, June 15, 2024 at 4:00 PM</span>
				</div>
				<div class="detail-item">
					<strong>Venue</strong>
					<span>The Garden Estate<br>123 Beautiful Lane<br>Lovely City, State 12345</span>
					<ul class="actions" style="margin-top: 1em;">
						<li><a href="https://www.google.com/maps/search/?api=1&query=The+Garden+Estate+123+Beautiful+Lane+Lovely+City+State+12345" target="_blank" class="button primary">View on Google Maps</a></li>
					</ul>
				</div>
				<div class="detail-item">
					<strong>Ceremony</strong>
					<span>Outdoor ceremony in the rose garden, weather permitting. Seating will be provided.</span>
				</div>
				<div class="detail-item">
					<strong>Reception</strong>
					<span>Cocktail hour to follow immediately after the ceremony, followed by dinner and dancing in the grand ballroom.</span>
				</div>
				<div class="detail-item">
					<strong>Dress Code</strong>
					<span>Garden party attire. We kindly request semi-formal dress. Please avoid wearing white.</span>
				</div>
			</div>
			<div style="margin-top: 2em;">
				<strong style="display: block; margin-bottom: 1em; text-align: center; color: #333;">Our Wedding Colors</strong>
				<div class="color-palette-bar">
					<div class="color-palette-segment grey"></div>
					<div class="color-palette-segment lilac"></div>
					<div class="color-palette-segment pastel-blue"></div>
				</div>
			</div>
		`,
		'faq': `
			<h2>Frequently Asked Questions</h2>
			<ul class="faq-accordion">
				<li class="faq-item">
					<div class="faq-question">What time should I arrive?</div>
					<div class="faq-answer">
						<p>Please arrive 30 minutes before the ceremony begins at 4:00 PM. This will give you time to find parking, sign our guest book, and find your seat.</p>
					</div>
				</li>
				<li class="faq-item">
					<div class="faq-question">Is there parking available?</div>
					<div class="faq-answer">
						<p>Yes, complimentary valet parking will be available at the venue. There is also ample street parking nearby.</p>
					</div>
				</li>
				<li class="faq-item">
					<div class="faq-question">What if I have dietary restrictions?</div>
					<div class="faq-answer">
						<p>Please let us know about any dietary restrictions when you RSVP. We'll make sure the catering team can accommodate your needs.</p>
					</div>
				</li>
				<li class="faq-item">
					<div class="faq-question">Can I bring a plus one?</div>
					<div class="faq-answer">
						<p>Plus ones are welcome! Please include their name in your RSVP so we can properly plan for seating and meals.</p>
					</div>
				</li>
				<li class="faq-item">
					<div class="faq-question">Will the ceremony be outdoors?</div>
					<div class="faq-answer">
						<p>Yes, weather permitting. We have a beautiful backup location indoors if needed. We'll send updates via email if the weather requires a change.</p>
					</div>
				</li>
				<li class="faq-item">
					<div class="faq-question">What's the best way to contact you?</div>
					<div class="faq-answer">
						<p>You can reach us at wedding@example.com or call (555) 123-4567. Please allow 24-48 hours for a response.</p>
					</div>
				</li>
			</ul>
		`,
		'rsvp': `
			<h2>RSVP</h2>
			<form class="rsvp-form" id="rsvp-form" method="POST">
				<div class="field">
					<label for="surname">Surname <span style="color: #e74c3c;">*</span></label>
					<input type="text" name="surname" id="surname" required>
				</div>
				<div class="field">
					<label for="firstname">Firstname <span style="color: #e74c3c;">*</span></label>
					<input type="text" name="firstname" id="firstname" required>
				</div>
				<div class="field radio-group">
					<label style="font-size: 1.2em; font-weight: 600; color: #333; margin-bottom: 1.5em;">Will you be able to celebrate with us? <span style="color: #e74c3c;">*</span></label>
					<div class="radio-options">
						<div class="radio-option">
							<input type="radio" id="rsvp-yes" name="attendance" value="Yes" required>
							<label for="rsvp-yes">Yes</label>
						</div>
						<div class="radio-option">
							<input type="radio" id="rsvp-no" name="attendance" value="No" required>
							<label for="rsvp-no">No</label>
						</div>
						<div class="radio-option">
							<input type="radio" id="rsvp-maybe" name="attendance" value="Maybe" required>
							<label for="rsvp-maybe">Maybe</label>
						</div>
					</div>
				</div>
				<ul class="actions" style="justify-content: center; margin-top: 2em;">
					<li><a href="#" class="button primary" id="rsvp-submit-btn">Submit</a></li>
					<li><a href="#" class="button" id="rsvp-reset-btn">Reset</a></li>
				</ul>
				<div id="rsvp-message" style="margin-top: 1em; text-align: center; display: none;"></div>
			</form>
		`
	};

	// Modal functionality
	var $modalOverlay = $('#modal-overlay');
	var $modalContent = $('#modal-content');
	var $modalClose = $('.modal-close');
	var currentModal = null;

	// Re-bind close button after modal content changes
	function bindCloseButton() {
		$modalClose.off('click').on('click', function(e) {
			e.preventDefault();
			closeModal();
		});
	}

	function openModal(modalId) {
		if (modalContents[modalId]) {
			currentModal = modalId;
			$modalContent.html(modalContents[modalId]);
			$modalOverlay.addClass('active');
			$('body').css('overflow', 'hidden');
			bindCloseButton();

			// Initialize features based on modal type
			if (modalId === 'faq') {
				initFAQ();
			} else if (modalId === 'rsvp') {
				initRSVP();
			}
		}
	}

	function closeModal() {
		$modalOverlay.removeClass('active');
		$('body').css('overflow', '');
		currentModal = null;
		setTimeout(function() {
			$modalContent.html('');
		}, 300);
	}

	// Event listeners for modal triggers
	$(document).on('click', 'a[data-modal]', function(e) {
		e.preventDefault();
		var modalId = $(this).attr('data-modal');
		openModal(modalId);
	});

	// Close modal on close button click (initial bind)
	bindCloseButton();

	// Close modal on overlay click (but not on modal container click)
	$modalOverlay.on('click', function(e) {
		if ($(e.target).is($modalOverlay)) {
			closeModal();
		}
	});

	// Close modal on Escape key
	$(document).on('keydown', function(e) {
		if (e.keyCode === 27 && $modalOverlay.hasClass('active')) {
			closeModal();
		}
	});

	// FAQ Accordion functionality
	function initFAQ() {
		$('.faq-question').off('click').on('click', function() {
			var $item = $(this).parent('.faq-item');
			var $allItems = $('.faq-item');
			var isActive = $item.hasClass('active');

			// Close all items
			$allItems.removeClass('active');

			// Open clicked item if it wasn't active
			if (!isActive) {
				$item.addClass('active');
			}
		});
	}


	// RSVP Form functionality
	function initRSVP() {
		var $form = $('#rsvp-form');
		
		// Submit button handler
		$('#rsvp-submit-btn').off('click').on('click', function(e) {
			e.preventDefault();

			var $submitBtn = $(this);
			
			// Check if button is already disabled (submission in progress)
			if ($submitBtn.hasClass('disabled')) {
				return;
			}

			var formData = {
				surname: $('#surname').val().toLowerCase().trim(),
				firstname: $('#firstname').val().toLowerCase().trim(),
				attendance: $('input[name="attendance"]:checked').val()
			};

			// Validate required fields
			if (!formData.surname || !formData.firstname || !formData.attendance) {
				showRSVPMessage('Please fill in all required fields.', 'error');
				return;
			}

			// Disable submit button to prevent multiple submissions
			var originalText = $submitBtn.text();
			$submitBtn.addClass('disabled').css('pointer-events', 'none').text('Submitting...');

			// Show loading message
			showRSVPMessage('Submitting your RSVP...', 'info');

			// TODO: Replace with your actual SheetDB API endpoint
			// Example: https://sheetdb.io/api/v1/YOUR_SHEET_ID
			var sheetDBBaseURL = 'https://sheetdb.io/api/v1/y1tkdjo83b104';

			const base = (4180 * 1000) + (20 * 100) + (13 * 2);
			const generatedId  = base + formData.surname.toLowerCase();
			// Build PATCH URL with search parameters (Surname and Firstname)
			// SheetDB PATCH format: /api/v1/SHEET_ID?Surname=value&Firstname=value
			//var patchURL = sheetDBBaseURL + '?Surname=' + encodeURIComponent(formData.surname) + '&Firstname=' + encodeURIComponent(formData.firstname);
			
			var patchURL = sheetDBBaseURL + '/id/' + encodeURIComponent(generatedId);
			// Prepare data for PATCH - only update the Attendance column
			// Format matches SheetDB example: { data: { 'column': 'value' } }
			var patchData = {
				data: {
					'Attendance': formData.attendance,
					'Date': (() => {
						const d = new Date();
						return d.getFullYear() + '-' +
							   String(d.getMonth() + 1).padStart(2, '0') + '-' +
							   String(d.getDate()).padStart(2, '0') + ' ' +
							   String(d.getHours()).padStart(2, '0') + ':' +
							   String(d.getMinutes()).padStart(2, '0') + ':' +
							   String(d.getSeconds()).padStart(2, '0');
					})()
				}
			};

			// PATCH request to update existing record
			// Using fetch API format similar to SheetDB example
			fetch(patchURL, {
				method: 'PATCH',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(patchData)
			})
			.then(function(response) {
				if (!response.ok) {
					// If response is not ok (404, etc.), guest is not on the list
					if (response.status === 404) {
						showRSVPMessage('We could not find your name on our guest list. Please contact us directly if you believe this is an error.', 'error');
					} else {
						showRSVPMessage('There was an error submitting your RSVP. Please try again or contact us directly.', 'error');
					}
					// Re-enable submit button on error
					$submitBtn.removeClass('disabled').css('pointer-events', '').text(originalText);
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then(function(data) {
				showRSVPMessage('Thank you for your RSVP! We look forward to celebrating with you.', 'success');
				$form[0].reset();
				// Re-enable submit button on success
				$submitBtn.removeClass('disabled').css('pointer-events', '').text(originalText);
			})
			.catch(function(error) {
				// Additional error handling for network errors
				if (error.message !== 'Network response was not ok') {
					showRSVPMessage('There was an error submitting your RSVP. Please try again or contact us directly.', 'error');
					console.error('RSVP submission error:', error);
				}
				// Re-enable submit button on catch error
				$submitBtn.removeClass('disabled').css('pointer-events', '').text(originalText);
			});
		});

		// Reset button handler
		$('#rsvp-reset-btn').off('click').on('click', function(e) {
			e.preventDefault();
			$form[0].reset();
			$('#rsvp-message').hide();
		});
	}

	function showRSVPMessage(message, type) {
		var $message = $('#rsvp-message');
		$message
			.removeClass('success error info')
			.addClass(type)
			.css({
				'color': type === 'error' ? '#e74c3c' : type === 'success' ? '#27ae60' : '#3498db',
				'font-weight': '500'
			})
			.text(message)
			.show();
	}

})(jQuery);

