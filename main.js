const greetings = require('./greetings');
const farewell = require('./farewell');

//'Hello'
greetings.greetingEnglish();

//'Konichiwa'
greetings.greetingJapanese();

//'Hola'
greetings.greetingSpanish();

//'Hallo'
greetings.greetingIcelandic();

//'Goodbye'
farewell.farewellEnglish('Mikey');

//'Bless'
farewell.farewellIcelandic('Magnus');
