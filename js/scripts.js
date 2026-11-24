
const sentences = [
	'Through a combination of embedded robotics and tensile materials, architects are experimenting with art installations and wall structures that bend, flex, and expand as crowds approach them.',
	'As a long-time proponent of non-fixed layouts, I’ve long felt they were more “future proof” simply because they were layout agnostic.',
	'And to a certain extent, that’s true: flexible designs make no assumptions about a browser window’s width, and adapt beautifully to devices that have portrait and landscape modes.',
	
	'We were crossing the headwaters of the Susquehanna River in our new car we didn’t quite have the money for but it was slick and silver and we named it after the local strip club next to the carwash: The Spearmint Rhino, and this wasn’t long after your mother said she wasn’t sure if one of your ancestors died in childbirth, or was struck by lightning, there just wasn’t anyone left to set the story straight, and we started to feel old.',
	'And it snowed.',
	'The ice and salt and mud on the car made it look like how we felt on the inside.',
	'The dog was asleep on my lap.',
	'We had seven more hours before our bed in the bluegrass would greet us like some Southern cousin we forgot we had.',
	'Sometimes, you have to look around at the life you’ve made and sort of nod at it, like someone moving their head up and down to a tune they like.',
	'New York City seemed years away and all the radio stations had unfamiliar call letters and talked about God, the one that starts his name with a capital and wants you to not get so naked all the time.',
	
	'In his 1949 magnum opus The Mediterranean and the Mediterranean World in the Age of Philip II, Braudel, who coined term “structural history”, explored the history of the Mediterranean on three levels: first, the history of the natural environment – geographical and geological conditions – which barely change over time; second, the social, economic and political structures, which slowly evolve, shaped by the natural environment; and third and least importantly, the events caused by human action, shaped by the conditions created by the first two levels.',
	'The phenomenon is not new, of course.',
	'Throughout history, the world has been rocked by major crises – political turmoil, wars and the downfall of great powers – which appeared earth-shattering at the time.',
	'And, routinely, contemporaries have declared them historical “turning points”. The most striking of such events in modern history is the French Revolution, which fundamentally challenged the world’s old monarchical order.',
	
	'Here was I, the white man with his gun, standing in front of the unarmed native crowd – seemingly the leading actor of the piece; but in reality I was only an absurd puppet pushed to and fro by the will of those yellow faces behind.',
	'I perceived in this moment that when the white man turns tyrant it is his own freedom that he destroys.',
	'I had halted on the road.',
	'As soon as I saw the elephant I knew with perfect certainty that I ought not to shoot him.',
	'It is a serious matter to shoot a working elephant – it is comparable to destroying a huge and costly piece of machinery – and obviously one ought not to do it if it can possibly be avoided.',
	'And at that distance, peacefully eating, the elephant looked no more dangerous than a cow.',
	'Here was I, the white man with his gun, standing in front of the unarmed native crowd – seemingly the leading actor of the piece; but in reality I was only an absurd puppet pushed to and fro by the will of those yellow faces behind.',
	
	'Hoarded wet books mush as I blowdry my inexhaustible juvenilia.',
	'It is somewhere in those passages, a pressed pansy, the cloak that will save me from another nosedive into bougainvillea-infested wells.',
	'Streaks of portals broached one after another in an era of swine fever & floodwater, undulate into streets beaded with endless rosarium, iridescent, & auroral, for another trapdoor, thicket, thorns, theater, irradiate. & mine.',
	'Dance, fuck, I’ll do it—what you will—I am famished, feral, forlorn, a creeping oil spill, half-visible in my lace purple wig among the hydrangeas.',
	'I can only move in the isle of blind cats, when no one’s looking as I must’ve, once, believed I was wind afterwards, a pollution, pollen, poultice.',
	'Please someone, someone stop me.',

	'The exploration of the impersonal (and transpersonal) in contemporary art is the new classicism; at least, a reaction against what is understood as the romantic spirit dominates most of the interesting art of today.',
	'Today’s art, with its insistence on coolness, its refusal of what it considers to be sentimentality, its spirit of exactness, its sense of ‘research’ and ‘problems’, is closer to the spirit of science than of art in the old-fashioned sense.',
	'Often, the artist’s work is only his idea, his concept.',

	'The humans of Westworld cannot claim to be self-made.',
	'The robots in Westworld, by contrast, are in the enviable position of being both immortal machine and cognizant being.',
	'Moreover, they have been forced to fight for their consciousness which has led to their own self-determination, while humans have taken such sentience for granted as a naturally occurring element of their biology.',
	'Humans realise, therefore, that they have unwittingly confirmed their own inferiority.',
	
	'He could no longer see the grid, just a few nearby balls.',
	'His cage moved directly toward one glowing ball, which appeared to be pulsing, changing its shape in flickering patterns.',
	'They hung in geatureless blackness.',
	'But then he saw that they were still sinking downward, now heading toward the churning surface of a black ocean in a black night.',
	'The ocean whipped and boiled, making a frothy blue-tinged foam.',
	'Chris saw that one bubble in particular had an especially bright blue glow. His machine moved toward that glow at accelerating speed, flying faster and faster, and he had the odd sensation that they were going to crash in the foam, and then they entered the bubble and he heard a loud peircing shriek.',
	'Then silence. Darkness. Nothing.',

	'Fulfillment, Shevek thought, is a function of time.',
	'The search for pleasure is circular, repetitive, atemporal.',
	'The variety seeking of the spectator, the thrill hunter, the sexually promiscuous, always ends in the same place.',
	'It is not a journey and return, but a closed cycle, a locked room, a cell.',
	'Outside the locked room is the landscape of time, in which the spirit may, with luck and courage, construct the fragile, makeshift, improbable roads and cities of fidelity: a landscape inhabitable by human beings.',
	'Loyalty, which asserts the continuity of past and future, binding time into a whole, is the root of human strength; there is no good to be done without it.',
	'So, looking back on the last four years, Shevek saw them not as wasted, but as part of the edifice that he and Takver were building with their lives.',
	'The thing about working with time, instead of against it, he thought, is that it is not wasted.',
	'Even pain counts.',
];


function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}	

function generateRandomText(numSentencesPerParagraph = 1) {
	
	var text = '';

	for (let i = 0; i < numSentencesPerParagraph; i++) {
		const r = getRandomNumber(0, sentences.length - 1);

		if (text) text = text + ' ';

		text = text + sentences[r];
	}

	return text;
}

document.addEventListener('DOMContentLoaded', function() {

	const button = document.querySelector('.js-generate-text');
	const output = document.querySelector('.js-text-populates');

	button.addEventListener("click", function (e) {
		// console.log(generateRandomText(4));
		
		const text = generateRandomText(7);
		output.innerHTML = text;
	});

});