import React, { useEffect, useState } from "react";
import '../StoryQuiz.css';
import '../../Story.css'
import '../../component/Quiz.css'
import '../../data/targetwords.json'

function TurtleRabbitStoryQuiz() {

    const questions = [{ "questionText": "from one side to another", "answerOptions": [{ "answerText": "admit", "isCorrect": false }, { "answerText": "across", "isCorrect": true }, { "answerText": "animal", "isCorrect": false }], "audioPath": "../audio/across.mp3" }, { "questionText": "in front", "answerOptions": [{ "answerText": "altogether", "isCorrect": false }, { "answerText": "angel-food", "isCorrect": false }, { "answerText": "ahead", "isCorrect": true }], "audioPath": "../audio/ahead.mp3" }, { "questionText": "what we breathe that is all around us", "answerOptions": [{ "answerText": "air", "isCorrect": true }, { "answerText": "apple", "isCorrect": false }, { "answerText": "another", "isCorrect": false }], "audioPath": "../audio/air.mp3" }, { "questionText": "before now", "answerOptions": [{ "answerText": "anything", "isCorrect": false }, { "answerText": "another", "isCorrect": false }, { "answerText": "already", "isCorrect": true }], "audioPath": "../audio/already.mp3" }, { "questionText": "to say back", "answerOptions": [{ "answerText": "answer", "isCorrect": true }, { "answerText": "appetite", "isCorrect": false }, { "answerText": "alarm", "isCorrect": false }], "audioPath": "../audio/answer.mp3" }, { "questionText": "what someone notices", "answerOptions": [{ "answerText": "ate", "isCorrect": false }, { "answerText": "already", "isCorrect": false }, { "answerText": "attention", "isCorrect": true }], "audioPath": "../audio/attention.mp3" }, { "questionText": "sometimes to win; or sometimes to hit hard", "answerOptions": [{ "answerText": "beat", "isCorrect": true }, { "answerText": "brush", "isCorrect": false }, { "answerText": "beast", "isCorrect": false }], "audioPath": "../audio/beat.mp3" }, { "questionText": "quickly closed and opened one or two eyes", "answerOptions": [{ "answerText": "blinked", "isCorrect": true }, { "answerText": "barber", "isCorrect": false }, { "answerText": "blackcurrents", "isCorrect": false }], "audioPath": "../audio/blinked.mp3" }, { "questionText": "not interested", "answerOptions": [{ "answerText": "bored", "isCorrect": true }, { "answerText": "back", "isCorrect": false }, { "answerText": "blind", "isCorrect": false }], "audioPath": "../audio/bored.mp3" }, { "questionText": "got happy and excited for someone", "answerOptions": [{ "answerText": "currants", "isCorrect": false }, { "answerText": "celebrated", "isCorrect": true }, { "answerText": "chuckle", "isCorrect": false }], "audioPath": "../audio/celebrated.mp3" }, { "questionText": "made loud happy sounds", "answerOptions": [{ "answerText": "corner", "isCorrect": false }, { "answerText": "comfortable", "isCorrect": false }, { "answerText": "cheered", "isCorrect": true }], "audioPath": "../audio/cheered.mp3" }, { "questionText": "all around; or like an O", "answerOptions": [{ "answerText": "cross", "isCorrect": false }, { "answerText": "case", "isCorrect": false }, { "answerText": "circle", "isCorrect": true }], "audioPath": "../audio/circle.mp3" }, { "questionText": "smoothing hair to make it look nice", "answerOptions": [{ "answerText": "certain", "isCorrect": false }, { "answerText": "chocolate", "isCorrect": false }, { "answerText": "combing", "isCorrect": true }], "audioPath": "../audio/combing.mp3" }, { "questionText": "getting to someplace", "answerOptions": [{ "answerText": "can", "isCorrect": false }, { "answerText": "chorus", "isCorrect": false }, { "answerText": "coming", "isCorrect": true }], "audioPath": "../audio/coming.mp3" }, { "questionText": "went from one side to another; or made an X", "answerOptions": [{ "answerText": "chug", "isCorrect": false }, { "answerText": "carve", "isCorrect": false }, { "answerText": "crossed", "isCorrect": true }], "audioPath": "../audio/crossed.mp3" }, { "questionText": "was brave enough to do something", "answerOptions": [{ "answerText": "dine", "isCorrect": false }, { "answerText": "dared", "isCorrect": true }, { "answerText": "don\u00d5t", "isCorrect": false }], "audioPath": "../audio/dared.mp3" }, { "questionText": "not smart, an impolite word", "answerOptions": [{ "answerText": "dumbest", "isCorrect": true }, { "answerText": "dessert", "isCorrect": false }, { "answerText": "down", "isCorrect": false }], "audioPath": "../audio/dumbest.mp3" }, { "questionText": "little pieces too tiny to see; or a puff or cloud of them", "answerOptions": [{ "answerText": "door", "isCorrect": false }, { "answerText": "dust", "isCorrect": true }, { "answerText": "dare", "isCorrect": false }], "audioPath": "../audio/dust.mp3" }, { "questionText": "chewing and swallowing", "answerOptions": [{ "answerText": "everywhere", "isCorrect": false }, { "answerText": "eating", "isCorrect": true }, { "answerText": "even", "isCorrect": false }], "audioPath": "../audio/eating.mp3" }, { "questionText": "just right, perfectly", "answerOptions": [{ "answerText": "edge", "isCorrect": false }, { "answerText": "exactly", "isCorrect": true }, { "answerText": "eager", "isCorrect": false }], "audioPath": "../audio/exactly.mp3" }, { "questionText": "not this", "answerOptions": [{ "answerText": "eagle", "isCorrect": false }, { "answerText": "explode", "isCorrect": false }, { "answerText": "except", "isCorrect": true }], "audioPath": "../audio/except.mp3" }, { "questionText": "words to say before a race begins", "answerOptions": [{ "answerText": "grumble", "isCorrect": false }, { "answerText": "good-natured", "isCorrect": false }, { "answerText": "get-set", "isCorrect": true }], "audioPath": "../audio/get-set.mp3" }, { "questionText": "not here any more", "answerOptions": [{ "answerText": "gone", "isCorrect": true }, { "answerText": "guide", "isCorrect": false }, { "answerText": "greedy", "isCorrect": false }], "audioPath": "../audio/gone.mp3" }, { "questionText": "a laughing sound", "answerOptions": [{ "answerText": "ha-ha", "isCorrect": true }, { "answerText": "hair", "isCorrect": false }, { "answerText": "his", "isCorrect": false }], "audioPath": "../audio/ha-ha.mp3" }, { "questionText": "looking very nice", "answerOptions": [{ "answerText": "having", "isCorrect": false }, { "answerText": "hollow", "isCorrect": false }, { "answerText": "handsome", "isCorrect": true }], "audioPath": "../audio/handsome.mp3" }, { "questionText": "a loud sound, sometimes scary, sometimes about being hurt", "answerOptions": [{ "answerText": "howled", "isCorrect": true }, { "answerText": "hardly", "isCorrect": false }, { "answerText": "hairy", "isCorrect": false }], "audioPath": "../audio/howled.mp3" }, { "questionText": "wanting to eat something", "answerOptions": [{ "answerText": "halt", "isCorrect": false }, { "answerText": "hood", "isCorrect": false }, { "answerText": "hungry", "isCorrect": true }], "audioPath": "../audio/hungry.mp3" }, { "questionText": "a person who decides about things", "answerOptions": [{ "answerText": "jungle", "isCorrect": false }, { "answerText": "jaw", "isCorrect": false }, { "answerText": "judge", "isCorrect": true }], "audioPath": "../audio/judge.mp3" }, { "questionText": "wet stuff  to drink, like from apples and oranges", "answerOptions": [{ "answerText": "jaw", "isCorrect": false }, { "answerText": "join", "isCorrect": false }, { "answerText": "juice", "isCorrect": true }], "audioPath": "../audio/juice.mp3" }, { "questionText": "picking up to go higher", "answerOptions": [{ "answerText": "lifting", "isCorrect": true }, { "answerText": "left", "isCorrect": false }, { "answerText": "lion", "isCorrect": false }], "audioPath": "../audio/lifting.mp3" }, { "questionText": "a long, round piece of wood", "answerOptions": [{ "answerText": "long", "isCorrect": false }, { "answerText": "leave", "isCorrect": false }, { "answerText": "log", "isCorrect": true }], "audioPath": "../audio/log.mp3" }, { "questionText": "a big sound", "answerOptions": [{ "answerText": "loud", "isCorrect": true }, { "answerText": "lick", "isCorrect": false }, { "answerText": "lock", "isCorrect": false }], "audioPath": "../audio/loud.mp3" }, { "questionText": "stepped ahead like a soldier", "answerOptions": [{ "answerText": "myself", "isCorrect": false }, { "answerText": "marched", "isCorrect": true }, { "answerText": "money", "isCorrect": false }], "audioPath": "../audio/marched.mp3" }, { "questionText": "it could be, perhaps", "answerOptions": [{ "answerText": "machine", "isCorrect": false }, { "answerText": "maybe", "isCorrect": true }, { "answerText": "must", "isCorrect": false }], "audioPath": "../audio/maybe.mp3" }, { "questionText": "a polite word to say to a man", "answerOptions": [{ "answerText": "mister", "isCorrect": true }, { "answerText": "mark", "isCorrect": false }, { "answerText": "may", "isCorrect": false }], "audioPath": "../audio/mister.mp3" }, { "questionText": "dirty and wet", "answerOptions": [{ "answerText": "mittens", "isCorrect": false }, { "answerText": "muddy", "isCorrect": true }, { "answerText": "march", "isCorrect": false }], "audioPath": "../audio/muddy.mp3" }, { "questionText": "tipped the head", "answerOptions": [{ "answerText": "nodded", "isCorrect": true }, { "answerText": "naughty", "isCorrect": false }, { "answerText": "nice", "isCorrect": false }], "audioPath": "../audio/nodded.mp3" }, { "questionText": "all right", "answerOptions": [{ "answerText": "out", "isCorrect": false }, { "answerText": "owl", "isCorrect": false }, { "answerText": "okay", "isCorrect": true }], "audioPath": "../audio/okay.mp3" }, { "questionText": "sometimes cloth to mend a hole; sometimes a place for plants", "answerOptions": [{ "answerText": "pull", "isCorrect": false }, { "answerText": "pump", "isCorrect": false }, { "answerText": "patch", "isCorrect": true }], "audioPath": "../audio/patch.mp3" }, { "questionText": "a way to walk, usually on grass", "answerOptions": [{ "answerText": "present", "isCorrect": false }, { "answerText": "path", "isCorrect": true }, { "answerText": "poison", "isCorrect": false }], "audioPath": "../audio/path.mp3" }, { "questionText": "give someone something", "answerOptions": [{ "answerText": "pay", "isCorrect": true }, { "answerText": "pump", "isCorrect": false }, { "answerText": "pet", "isCorrect": false }], "audioPath": "../audio/pay.mp3" }, { "questionText": "flopped down", "answerOptions": [{ "answerText": "puzzled", "isCorrect": false }, { "answerText": "plopped", "isCorrect": true }, { "answerText": "part", "isCorrect": false }], "audioPath": "../audio/plopped.mp3" }, { "questionText": "run fast; or running to see who is fastest", "answerOptions": [{ "answerText": "race", "isCorrect": true }, { "answerText": "raddish", "isCorrect": false }, { "answerText": "realize", "isCorrect": false }], "audioPath": "../audio/race.mp3" }, { "questionText": "ran fast; or ran to see who is fastest", "answerOptions": [{ "answerText": "raced", "isCorrect": true }, { "answerText": "rose", "isCorrect": false }, { "answerText": "round", "isCorrect": false }], "audioPath": "../audio/raced.mp3" }, { "questionText": "getting to something", "answerOptions": [{ "answerText": "rest", "isCorrect": false }, { "answerText": "reaching", "isCorrect": true }, { "answerText": "round", "isCorrect": false }], "audioPath": "../audio/reaching.mp3" }, { "questionText": "stopped to relax", "answerOptions": [{ "answerText": "rested", "isCorrect": true }, { "answerText": "ride", "isCorrect": false }, { "answerText": "repay", "isCorrect": false }], "audioPath": "../audio/rested.mp3" }, { "questionText": "a hard stone; or to move a cradle gently", "answerOptions": [{ "answerText": "rock", "isCorrect": true }, { "answerText": "race", "isCorrect": false }, { "answerText": "roof", "isCorrect": false }], "audioPath": "../audio/rock.mp3" }, { "questionText": "not very long", "answerOptions": [{ "answerText": "soil", "isCorrect": false }, { "answerText": "short", "isCorrect": true }, { "answerText": "shouldn\u00d5t", "isCorrect": false }], "audioPath": "../audio/short.mp3" }, { "questionText": "not very tall, probably slow", "answerOptions": [{ "answerText": "short-legged", "isCorrect": true }, { "answerText": "sly", "isCorrect": false }, { "answerText": "sore", "isCorrect": false }], "audioPath": "../audio/short-legged.mp3" }, { "questionText": "wanting people to look and think you\u00e2\u20ac\u2122re special", "answerOptions": [{ "answerText": "sorely", "isCorrect": false }, { "answerText": "show-off", "isCorrect": true }, { "answerText": "skip", "isCorrect": false }], "audioPath": "../audio/show-off.mp3" }, { "questionText": "moved quickly with little hops", "answerOptions": [{ "answerText": "skipped", "isCorrect": true }, { "answerText": "sleeping-cars", "isCorrect": false }, { "answerText": "sky", "isCorrect": false }], "audioPath": "../audio/skipped.mp3" }, { "questionText": "all others are faster", "answerOptions": [{ "answerText": "soft", "isCorrect": false }, { "answerText": "scooter", "isCorrect": false }, { "answerText": "slowest", "isCorrect": true }], "audioPath": "../audio/slowest.mp3" }, { "questionText": "name to call someone who doesn\u00e2\u20ac\u2122t move quickly", "answerOptions": [{ "answerText": "scritch", "isCorrect": false }, { "answerText": "sweet", "isCorrect": false }, { "answerText": "slowpoke", "isCorrect": true }], "audioPath": "../audio/slowpoke.mp3" }, { "questionText": "what you hear with your ears", "answerOptions": [{ "answerText": "sound", "isCorrect": true }, { "answerText": "snack", "isCorrect": false }, { "answerText": "serious", "isCorrect": false }], "audioPath": "../audio/sound.mp3" }, { "questionText": "not fast, but careful not to make mistakes", "answerOptions": [{ "answerText": "soundly", "isCorrect": false }, { "answerText": "steady", "isCorrect": true }, { "answerText": "sharp", "isCorrect": false }], "audioPath": "../audio/steady.mp3" }, { "questionText": "moving your feet", "answerOptions": [{ "answerText": "some", "isCorrect": false }, { "answerText": "stepping", "isCorrect": true }, { "answerText": "stop", "isCorrect": false }], "audioPath": "../audio/stepping.mp3" }, { "questionText": "yummy red fruit", "answerOptions": [{ "answerText": "such", "isCorrect": false }, { "answerText": "slowly", "isCorrect": false }, { "answerText": "strawberries", "isCorrect": true }], "audioPath": "../audio/strawberries.mp3" }, { "questionText": "yummy red fruit", "answerOptions": [{ "answerText": "stones", "isCorrect": false }, { "answerText": "strawberry", "isCorrect": true }, { "answerText": "swing", "isCorrect": false }], "audioPath": "../audio/strawberry.mp3" }, { "questionText": "wanting to have a drink", "answerOptions": [{ "answerText": "tears", "isCorrect": false }, { "answerText": "thirsty", "isCorrect": true }, { "answerText": "tickle", "isCorrect": false }], "audioPath": "../audio/thirsty.mp3" }, { "questionText": "making a heavy sound", "answerOptions": [{ "answerText": "together", "isCorrect": false }, { "answerText": "travel", "isCorrect": false }, { "answerText": "thumping", "isCorrect": true }], "audioPath": "../audio/thumping.mp3" }, { "questionText": "got something", "answerOptions": [{ "answerText": "television", "isCorrect": false }, { "answerText": "took", "isCorrect": true }, { "answerText": "there's", "isCorrect": false }], "audioPath": "../audio/took.mp3" }, { "questionText": "another name for a turtle", "answerOptions": [{ "answerText": "terrible", "isCorrect": false }, { "answerText": "thorn", "isCorrect": false }, { "answerText": "tortoise", "isCorrect": true }], "audioPath": "../audio/tortoise.mp3" }, { "questionText": "go around in circles", "answerOptions": [{ "answerText": "whirl", "isCorrect": true }, { "answerText": "wagons", "isCorrect": false }, { "answerText": "water", "isCorrect": false }], "audioPath": "../audio/whirl.mp3" }, { "questionText": "long face hairs", "answerOptions": [{ "answerText": "whiskers", "isCorrect": true }, { "answerText": "warm", "isCorrect": false }, { "answerText": "wheu-eu-eu", "isCorrect": false }], "audioPath": "../audio/whiskers.mp3" }, { "questionText": "made a loud happy sound", "answerOptions": [{ "answerText": "whiskers", "isCorrect": false }, { "answerText": "wooden", "isCorrect": false }, { "answerText": "whooped", "isCorrect": true }], "audioPath": "../audio/whooped.mp3" }, { "questionText": "in a very smart way", "answerOptions": [{ "answerText": "wisely", "isCorrect": true }, { "answerText": "what", "isCorrect": false }, { "answerText": "world", "isCorrect": false }], "audioPath": "../audio/wisely.mp3" }, { "questionText": "when trying something with others did the best", "answerOptions": [{ "answerText": "wet", "isCorrect": false }, { "answerText": "won", "isCorrect": true }, { "answerText": "wolf", "isCorrect": false }], "audioPath": "../audio/won.mp3" }, { "questionText": "opening the mouth wide when feeling sleepy", "answerOptions": [{ "answerText": "yes", "isCorrect": false }, { "answerText": "you", "isCorrect": false }, { "answerText": "yawning", "isCorrect": true }], "audioPath": "../audio/yawning.mp3" }]


    const [showScore, setShowScore] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const handleAnsBTNClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }

        const nextQ = currentQuestion + 1;
        if (nextQ < questions.length) {
            setCurrentQuestion(nextQ);
        } else {
            setShowScore(true);
        }
    }
    return (
        <div>
            <div className="nav">
                <div className="back-to-bookshelf">
                    <a href="/TurtleRabbit">
                        <div className="arrow" />
                    </a>
                    <a href="/TurtleRabbit">
                        <p>BACK TO STORY</p>
                    </a>
                </div>
                <div className="bookshelf_container_header_menu_container">
                    <div className="bookshelf_container_header_menu_container_img">
                    </div>
                    <div className="bookshelf_container_header_menu_container_info">
                        <p>
                            Elijah White <br /> 26💰 12⭐
                        </p>
                    </div>
                </div>
            </div>
            <div className="questionWrapper">
                <div className="holder">
                    {
                        showScore ? (
                            <div className="scoreSection">
                                <p className="score">You scored {score} out of {questions.length} </p>
                            </div>
                        ) : (
                            <>

                                <div className="questionSection">
                                    <div className="counter">
                                        <span className="questionNum">Question {currentQuestion + 1} / {questions.length}</span>
                                    </div>
                                    <audio id="story" controls autoPlay controlslist="nodownload noplaybackrate noremoteplayback">
                                        <source src={questions[currentQuestion].audioPath} type="audio/mp3" />
                                    </audio>
                                    <div className="questionText">{questions[currentQuestion].questionText}</div>
                                </div>
                                <div className="answerSection">
                                    {questions[currentQuestion].answerOptions.map((answerOptions) => (
                                        <button className="ansBTN" onClick={() => handleAnsBTNClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                                    ))}
                                </div>
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}



export default TurtleRabbitStoryQuiz;