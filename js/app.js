$(document).ready(function() {

	//question object
	var questionsArray = [
		{
			question: "Approximately how many Earth's can fit inside of the Sun?",
			answers: ["900,000", "1,300,000", "1,700,000", "2,400,000"],
			correctAnswer: 1,
			fact: "1,300,000.  The Sun contains %99.8 of the entire solar system and weighs about 333,000 times as much as Earth"
		},
		{
			question: "Pluto, at one point the ninth and smallest planet in the solar system, is currently a member of this region:",
			answers: ["Kuiper Belt", "Pillars of Creation", "Hoag's Object", "Andromeda"],
			correctAnswer: 0,
			fact: "Kuiper Belt.  Despite protests from many in the science community, Pluto was reclassified as a dwarf planet in 2006.  It is now a member of the Kuiper Belt, along with two other dwarf plants, Haumea and Makemake"
		},
		{
			question: "Which of Jupiter's moons is believed to contain a large subsurface ocean?",
			answers: ["Europa", "Io", "Metis", "Thebe"],
			correctAnswer: 0,
			fact: "Europa.  Europa, as well as two other Jupiter moons (Ganymede and Castillo), is thought to house a large subsurface ocean underneath a thick, outerlayer of ice, making it potentially habitable.  Jupiter Icy Moon Explorer is a planned spacecraft focused on studying these three bodies.  It is set to launch in 2022."
		},
		{
			question: "Which of these famous probes was the first to land on a comet?",
			answers: ["Voyager 1", "Voyager 2", "Galileo", "Philae"],
			correctAnswer: 3,
			fact: "Philae.  On November 12, 2014, ten years after departing Earth, Philae become the first spacecraft to successfully land on a comet nucleus.  Due to the reduced sunlight at its unplanned landing site, Philae is currently shut down and in safe mode.  There is hope that it will be awakened sometime in August 2015."
		},
		{
			question: "Out of 40 total attempts to explore Mars, how many have been successful?",
			answers: ["35", "28", "18", "12"],
			correctAnswer: 2,
			fact: "18.  There have been 7 successful Mars landings, with the most recent being the Curiosity Rover in 2012.  InSight is the next planned robotic lander mission.  It is set to launch in March 2016."
		}
	]

	//fades out main screen and displays first question
	function startGame () {
		$('.cover-page').fadeOut();
	}

	//click Ready button to begin game
	$('.start-quiz').click(function(e){
		e.preventDefault
		startGame();
	});

	//append question elements to page
	function createQuestion (question) {
		//create and append question element
		this.qEl = document.createElement("h1");
		var t = document.createTextNode(question);
		this.qEl.appendChild(t);
		document.getElementById("answer-container").appendChild(this.qEl);
	}

	//append button elements to page
	function createAnswerButton (answer) {
		//create and append button element
		this.bEl = document.createElement("button");
		this.bEl.className = "answer";
		var t = document.createTextNode(answer);
		this.bEl.appendChild(t);
		document.getElementById("button-container").appendChild(this.bEl);
		document.getElementById("button-container").appendChild(document.createElement("br"));
	}

	function createNextQuestionButton (text) {
		//create and append button element
		this.bEl = document.createElement("button");
		this.bEl.className = "next-question";
		var t = document.createTextNode(text);
		this.bEl.appendChild(t);
		document.getElementById("button-container").appendChild(this.bEl);
		document.getElementById("button-container").appendChild(document.createElement("br"));
	}

	//creates fact generated after answering question
	function createQuestionFact (fact) {
		this.fEl = document.createElement("p");
		var t = document.createTextNode(fact);
		this.fEl.appendChild(t);
		document.getElementById("button-container").appendChild(this.fEl);
		document.getElementById("button-container").appendChild(this.fEl);
	}


	//creates question then four answer buttons
	function createQuestionPage (count) {
		var question = questionsArray[count].question;

		createQuestion(questionsArray[count].question);
		var i = 0;
		//creates and appends four buttons from questionsArray.answers
		for (i; i <= 3; i++){
			var currentAnswer = questionsArray[count].answers[i];
			createAnswerButton(currentAnswer);
		}

		var temp = function displayQuestionFact (fact) {

			$("#button-container").on('click', '.answer', function(e){
				e.preventDefault;
				//stores user answer to compare to correct
				var userAnswer = $(this).text();
				var correctAnswer = questionsArray[fact].correctAnswer;//references correct answer key value
				
				createQuestionFact(questionsArray[fact].fact);
				createNextQuestionButton('Next Question');
			});
		}

		temp(count);
	}

	//switch between pages
	function switchPages () {
		$("#button-container").on('click', '.next-question', function(e){
			e.preventDefault;
			$("#button-container, #answer-container").empty();
			createQuestionPage(1);
		});
	}

	createQuestionPage(0);
	switchPages();
});