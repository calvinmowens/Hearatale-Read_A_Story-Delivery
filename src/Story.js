import React, { useEffect, useState } from "react";
import './Story.css';
import Popup from "./component/Popup";
import PostData from './data/targetwords.json'
// import $ from 'jquery';


function Story() {
    const story = "Once upon a time there was a sweet little girl who was loved by everyone who knew her, but most of all by her grandmother, and there was nothing that she would not have given to the child. Once she gave the girl a little cape with a hood of red velvet, which suited her so well that she would never wear anything else; so she was alawys called 'Little Red Riding Hood. Once upon a time there was a sweet little girl who was loved by everyone who knew her, but most of all by her grandmother, and there was nothing that she would not have given to the child. Once she gave the girl a little cape with a hood of red velvet, which suited her so well that she would never wear anything else; so she was alawys called 'Little Red Riding Hood. Once upon a time there was a sweet little girl who was loved by everyone who knew her, but most of all by her grandmother, and there was nothing that she would not have given to the child. Once she gave the girl a little cape with a hood of red velvet, which suited her so well that she would never wear anything else; so she was alawys called 'Little Red Riding Hood. Once upon a time there was a sweet little girl who was loved by everyone who knew her, but most of all by her grandmother, and there was nothing that she would not have given to the child. Once she gave the girl a little cape with a hood of red velvet, which suited her so well that she would never wear anything else; so she was alawys called 'Little Red Riding Hood. Once upon a time there was a sweet little girl who was loved by everyone who knew her, but most of all by her grandmother, and there was nothing that she would not have given to the child. Once she gave the girl a little cape with a hood of red velvet, which suited her so well that she would never wear anything else; so she was alawys called 'Little Red Riding Hood. Once upon a time there was a sweet little girl who was loved by everyone who knew her, but most of all by her grandmother, and there was nothing that she would not have given to the child. Once she gave the girl a little cape with a hood of red velvet, which suited her so well that she would never wear anything else; so she was alawys called 'Little Red Riding Hood. Once upon a time there was a sweet little girl who was loved by everyone who knew her, but most of all by her grandmother, and there was nothing that she would not have given to the child. Once she gave the girl a little cape with a hood of red velvet, which suited her so well that she would never wear anything else; so she was alawys called 'Little Red Riding Hood.";
    
    let triggeredWord;

    const [isVisible, setIsVisible] = useState(false);
    const [choosenWord, setChoosenWord] = useState('');

    const handleWordClick = (event) => {
        setIsVisible(!isVisible);
        console.log(event.target.innerHTML);
        setChoosenWord(event.target.innerHTML);
    };

    const onClose = () => {
        setIsVisible(false);
    };
    useEffect(() => {

        // TODO do we still need this??
        /**
         * splits the story, paragraph, into each span.
         * This span onClick finds the clicked "word" calls popup function.
         */
        // let txt = $('.story-text').text().split(' ')
        // let len = txt.length,
        //     result = [];
        // for (let i = 0; i < len; i++) {
        //     result[i] = '<span class="' + "targetWord" + '">' + txt[i] + '</span>';
        // }
        // $('.story-text').html(result.join(' '));
        // let trigger = $('SPAN').click(
        //     function () {
        //         triggeredWord = $(this).text().toLowerCase().replace(/[^a-z0-9\s]/gi, '');
        //         console.log(triggeredWord);
        //         //word trigger?
        //         handleWordClick();
        //         //popup trigger
        //         let changeWord = $("#hidden_trigger").text(triggeredWord);
        //     }
        // );

        /**
         * Plays audio.
         */
        let sound = document.getElementById("story");
        let btnChecker = document.getElementById("closeBtn");

        if (btnChecker != null) {
            togglePlay();
        } else {
            togglePlay();
        }

        function togglePlay() {
            return sound.paused ? sound.play() : sound.pause();
        };

        sound.onplay = function () {

        }
        sound.onpause = function () {

        }

        // -----
        // AUTOSCROLL AND HIGHLIGHTING
        // -----
        let ScrollRate = 1;
        // TODO set this as a factor of story-scroll.width
        let EndWord = document.getElementById("story-scroll").offsetWidth;

        let DivElmnt;
        let scrollInterval;
        let currentScrollPlace = 0;

        setTimeout(scrollDiv_init, 7000);

        function scrollDiv_init() {
            console.log("start scroll")
            DivElmnt = document.getElementById('story-scroll');
            DivElmnt.scrollTop = 0;
            DivElmnt.word = 0;

            // scrollInterval = setInterval('scrollDiv()', ScrollRate);
            scrollInterval = setInterval(()=>{

                // SELENA'S ORIGINAL CODE
                // if (!reachedMaxScroll) {
                //     if (DivElmnt.word >= EndWord) {
                //         if (!sound.paused) {
                //             DivElmnt.scrollTop += 60;
                //             DivElmnt.word = 0;
                //         }
                //         reachedMaxScroll = DivElmnt.scrollTop >= DivElmnt.scrollHeight;
                //     }
                //     // AFTER PAUSE NOT WORKING
                //     else if (sound.paused) {
                //         DivElmnt.word = EndWord - DivElmnt.word;
                //     }
                //     DivElmnt.word++;
                // } else {
                //     reachedMaxScroll = (DivElmnt.scrollTop == 0) ? false : true;
                // }


                DivElmnt.addEventListener('wheel', function(e) {
                    console.log("scroll triggered");
                    document.getElementById('highlight-line').style.opacity = 0;
                });

                if (!sound.paused) {
                    if (DivElmnt.word >= EndWord) {
                        console.log("scroll condition reached: " + DivElmnt.word);
                        document.getElementById('highlight-line').style.opacity = 100;
                        currentScrollPlace += 60;
                        DivElmnt.scrollTop = currentScrollPlace;
                        DivElmnt.word = 0;
                    } else {
                        DivElmnt.word++;
                    }
                } else {
                    console.log("Story Paused, Curr Word: " + DivElmnt.word);
                }

                }, ScrollRate);
        }
    })

    return (
        <div>

            <div className="nav">
                <div className="back-to-bookshelf">
                    <a href="bookshelf.html">
                        <div className="arrow" />
                    </a>
                    <a href="bookshelf.html">
                        <p>BOOKSHELF</p>
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
            <section className="base-page">
                <div className="book">
                    <div className="left-page">
                        <div className="left-page-middle">
                            <div className="story-text-div">
                                <div className="story-top">
                                    <h1 id="title" className="story-title">LITTLE RED <span onClick={handleWordClick}>RIDING</span> HOOD</h1>
                                    <audio id="story" controls autoPlay controlslist="nodownload noplaybackrate">
                                        <source src="LR1_cut.mp3" type="audio/mpeg" />
                                    </audio>
                                </div>
                                <div className="highlight-line" id="highlight-line"></div>
                                <div id="story-scroll" className="story-mid">
                                    {/* <div class="story-mid"> */}
                                    <div id="story-infinite-scroll">
                                        <p className="story-text">
                                            { story.split(" ").map((ele, index) => ( <span className="targetWord" onClick={handleWordClick}>{ele}</span> ) )}
                                            {/* <span className="targetWord" onClick={handleWordClick}>Once</span> upon a time there was a sweet little girl who was <span className="targetWord" onClick={handleWordClick}>loved</span> by everyone who knew her, but most of all by her grandmother, and there was nothing that she would not have given to the child. Once she gave the girl a little cape with a hood of red velvet, which suited her so well that she would never wear anything else; so she was alawys called 'Little Red Riding Hood.’ */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-page">
                        <div id="picHolder" className="story-pic" />
                    </div>
                </div>
            </section>
            <Popup id="popup" isVisible={isVisible}
                onClose={onClose}
                choosenWord={choosenWord}>
                <h3 id="hidden_trigger">hidden</h3>
            </Popup>
        </div >

    );
}

export default Story;