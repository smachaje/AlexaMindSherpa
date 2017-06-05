var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"StepOneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "step 1" )
	},
	"StepTwoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "step 2" )
	},
	"StepThreeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "step 3" )
	},
	"StepFourIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "step 4" )
	},
	"StepFiveIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "step 5" )
	},
	"StepSixIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "step 6" )
	},
	"LearnAboutEmpathyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "learn about empathy" )
	},
	"AskQuestionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Ask questions" )
	},
	"QuizMeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "quiz me" )
	},
	"NextStepIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Next step" )
	},
	"LearnAboutDefiningIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "learn about defining" )
	},
	"MoreAboutIdeationIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "More about ideation" )
	},
	"MoreAboutPrototypingIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "More about prototyping" )
	},
	"YesEightIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Yes 8" )
	},
	"NoEightIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "No 8" )
	},
	"MaybeEightIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Maybe 8" )
	},
	"NotEnoughInformationEightIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Not enough information 8" )
	},
	"MoreAboutFeedbackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "More about feedback" )
	},
}