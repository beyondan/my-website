let media_width = 800;

$(document).ready(function() {
	configure_intro();
	configure_navbar();
	configure_buttons();
});

function configure_intro() {
	handle_resize();
	set_wave();
	set_down_arrow_scroll();
}

function handle_resize() {
	$('.whole-screen').css('height', $(window).height());
	$('.popover').css('max-width', $(window).width()/2);
	$(window).resize(function() {
		$('.whole-screen').css('height', $(window).height());
		$('.popover').css('max-width', $(window).width()/2);
	});
}

function set_wave() {
	let intro_text = $('.wave').text();
	var intro_html = "";

	for(var i=0; i < intro_text.length; i++) {
		var c = intro_text.charAt(i);
		if(c == " ") {
			intro_html += c;
		}
		else {
			intro_html += "<span>" + c + "</span>";
		}
	}

	var animTime = 1, hueChange = 3, prefixes = ["", "-webkit-", "-moz-", "-o-"];

	$('.wave').html(intro_html);
	$('.wave').children('span').each(function (i) {
		for(var j=0; j < prefixes.length; j++) {
			$(this).css(prefixes[j] + 'animation-delay', (animTime * ((i*hueChange)%80)/80) - animTime + 's');
		}
	});
}

function set_down_arrow_scroll() {
	$('.bottom-footer').click(function() {
		$('html, body').animate({ scrollTop: $('.whole-screen').height() }, 500);
	});
}

function configure_navbar() {
	set_navbar_display();
	set_navbar_url_adapter();
	set_navbar_active_adapter();
	set_navbar_scrollspy();
}

function set_navbar_display() {
	$('body').attr('data-offset', $(window).height()/5);
	$('.navbar li a').click(function () {
		$('.navbar-collapse').collapse('hide');
    });
}

function set_navbar_url_adapter() {
	$('#myNavbar').on('activate.bs.scrollspy', function() 
	{
		window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
	});
}

function set_navbar_active_adapter() {
	$('#myNavbar').on('activate.bs.scrollspy', function() 
	{
		$('.nav li a').css("background", "transparent");
		$('.nav .active a').css("background-color", "#262626");
		var section = $('.nav .active').text();
		if(section == "Top") section = "";
		$('.navbar-header .current-nav').text(section);
	});
}

var didScroll = false;
var fadeOutTimer = 0;
var fadeOutThreshold = 8; // * 250ms
function set_navbar_scrollspy() {				
	window.onscroll = function() {
		didScroll = true;
	};

	$('.navbar').hover(function() { 
		fadeOutTimer = 0; 
		$('.navbar').show();
	});

	window.setInterval(function() {
		// desktop
		if($(window).width() > media_width) {
			if(didScroll) {
				didScroll = false;
				if($(document).scrollTop() <= $('.whole-screen').height()*3/4) {
					$('.navbar').hide();
				}
				else {
					fadeOutTimer = 0;
					$('.navbar').show();
				}
			}
			else {
				fadeOutTimer++;
				if(fadeOutTimer >= fadeOutThreshold) {
					$('.navbar').hide();
				}
			}	
		}
		else {
			$('.navbar').show();
		}
	}, 250);
}

function configure_buttons() {
	set_feedback_button_toggle();
	set_popover_button();
}

function set_feedback_button_toggle() {
	$('.my-btn-toggle').click(function() {
		if($(this).attr('data-toggle') == "true") {
			$(this).text($(this).attr('hide'));
			$(this).attr('data-toggle', "false");
			if($(this).attr('data-type') == 'video') {
				$(this).siblings('video').removeClass('hidden');
			}
			else {
				$(this).siblings('img').removeClass('hidden');
			}
		}
		else {
			$(this).text($(this).attr('show'));
			$(this).attr('data-toggle', "true");
			if($(this).attr('data-type') == 'video') {
				$(this).siblings('video').addClass('hidden');
			}
			else {
				$(this).siblings('img').addClass('hidden');
			}
		}
	});
}

function set_popover_button() {
	$('.my-popover-100').popover({
			placement: 'top',
			html: 'true',
			content:
			'<ul> \
				<li><a href="https://sites.google.com/a/eng.ucsd.edu/cse-100-fall-2016/syllabus" style="font-weight: 600;">Example course website</a></li> \
				<li>Balanced Trees (AVL, Red-black, B/B+)</li> \
				<li>Multi-way Trie</li> \
				<li>Ternary Search Trie</li> \
				<li>Hash Table</li> \
				<li>Skip List</li> \
				<li>Graphs</li> \
			</ul>',
			trigger: 'hover'
	});
	
	$('.my-popover-105').popover({
			placement: 'top',
			html: 'true',
			content: 
			'<ul> \
				<li>Finite automata</li> \
				<li>Regular expression</li> \
				<li>Push-down automata</li> \
				<li>Context-free languages</li> \
				<li>Turing machine</li> \
				<li>Halting problem, undecidability</li> \
			</ul>',
			trigger: 'hover'
	});
	
	$('.my-popover-120').popover({
		placement: 'top',
			html: 'true',
			content: 
			'<ul> \
				<li>Kernel structure</li> \
				<li>Concurrency</li> \
				<li>Memory management</li> \
				<li>Virtual memory</li> \
				<li>File systems</li> \
				<li>Process scheduling</li> \
				<li>Security and protection</li> \
			</ul>',
			trigger: 'hover'
	});
	
	$('.my-popover-123').popover({
		placement: 'top',
			html: 'true',
			content: 
			'<ul> \
				<li>Layering and the OSI model</li> \
				<li>Physical and ata link layers</li> \
				<li>Locan and wide area networks</li> \
				<li>Datagrams and virtual circuits</li> \
				<li>Routing and congestion control</li> \
				<li>Internetworking</li> \
				<li>Transport protocols</li> \
			</ul>',
			trigger: 'hover'
	});
	
	$('.my-popover-130').popover({
		placement: 'top',
			html: 'true',
			content: 
			'<ul> \
				<li>Functional programming</li> \
				<li>OCaml</li> \
				<li>Scala</li> \
				<li>Lexical analysis and parsing</li> \
			</ul>',
			trigger: 'hover'
	});
	
	$('.my-popover-140').popover({
		placement: 'top',
			html: 'true',
			content: 
			'<ul> \
				<li>Boolean logic and finite state machines</li> \
				<li>Combinational modular networks</li> \
				<li>Mealy and Moore machines</li> \
				<li>Canonical forms, sequential modules</li> \
			</ul>',
			trigger: 'hover'
	});
	
	$('.my-popover-141').popover({
		placement: 'top',
			html: 'true',
			content: 
			'<ul> \
				<li>Computer architecture</li> \
				<li>System design</li> \
				<li>Processor design</li> \
				<li>Control design</li> \
				<li>Memory systems</li> \
			</ul>',
			trigger: 'hover'
	});
	
	$('.my-popover-160').popover({
		placement: 'top',
			html: 'true',
			content: 
			'<ul> \
				<li>Parallel architecture</li> \
				<li>Parallel algorithms</li> \
				<li>OpenMP</li> \
				<li>Flynns taxonomy</li> \
				<li>Processor-memory organizations</li> \
				<li>Shared and non-shared memory model</li> \
				<li>Message passing and multithreading</li> \
				<li>Amdahls law</li> \
				<li>Synchronization, isoefficiency, scalability</li> \
			</ul>',
			trigger: 'hover'
	});
	
	$('.my-popover-167').popover({
		placement: 'top',
			html: 'true',
			content: 
			'<ul> \
				<li>Linear transformations</li> \
				<li>Curves and surfaces</li> \
				<li>Projection, illumination, and shading models</li> \
				<li>Rasterization and vectorization</li> \
				<li>Procedural modeling</li> \
				<li>Shape grammar</li> \
				<li>Shadow mapping</li> \
				<li>Collision detection</li> \
				<li>Reflection and refraction</li> \
			</ul>',
			trigger: 'hover'
	});
	
	$('.my-popover-190').popover({
		placement: 'top',
			html: 'true',
			content: 
			'<ul> \
				<li>Probabilistic models</li> \
				<li>Localization using sensors</li> \
				<li>Discrete Bayes filter</li> \
				<li>ROS</li> \
				<li>Localization in continuous space, grid-based localization</li> \
				<li>Particle filters, importance sampling</li> \
				<li>Beam models</li> \
				<li>Parametric and non-parametric filtering</li> \
				<li>Rapidly-exploring random trees</li> \
				<li>Kalman filter</li> \
				<li>Simultaneous localization and mapping</li> \
			</ul>',
			trigger: 'hover'
	});
}





