# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Francisco Rodriguez Santana**

Time spent: **8** hours spent in total

Link to project: https://glitch.com/edit/#!/tundra-nice-gojirasaurus?path=style.css%3A14%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
- [x] Number of tries remaining indicated with 3 buttons. Updated to reflect wrong choices.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
- Stop and start work correctly, resetting number of tries and timer accordingly. Six buttons with changing backgrounds upon click and random pattern on each start. Pattern sequence displayed increasingly fast.
![](https://i.imgur.com/0j4tQcW.gif)
- Demonstration of a won game, with the timer ticking down until until game is won. Win prompt is displayed.
![](https://i.imgur.com/CmJNTo0.gif)
- Demonstration of a lost game, with the number of tries reducing accordingly. Lose prompt displayed.
![](https://i.imgur.com/6i9ZfqN.gif)
- Demonstration of timer; game lose when timer reaches 0.
![](https://i.imgur.com/nNk8mwY.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

W3schools, geeksforgeeks, mozilla, and youtube were the main resources I referred to whenever I did not understand something. Besides that, I used an image from the video game franchise Fallout to spruce up my buttons with a background image.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

While creating my submission, I struggled to understand how each language interacts with one another, how output is delayed, and how to achieve specific formats/appearances.

I have not done many projects with multiple languages so I naturally did not understand how each file is connected. After some research, I concluded that HTML is a skeleton of the website, CSS spruces up the display, and javascript ties the web components together to reflect appropriate changes in response to user interactions. This understanding helped me connect some concepts that I have learned in other languages such as classes and action event listeners in java to understand how the files work together. For any remaining component that did not make sense to me, I used console log to see when specific functions are called in relation to one another.

Later, when implementing a countdown timer, I was confused when the pattern sequence and the timer counted ran in parallel. I implemented my timer to count down right after the pattern played on the page. Instead, the timer started counting down while the sequence played. I have learned in past courses that code can be optimized to run in parallel but I was confused why it was happening in my program. Searching the internet gave me far more complicated solutions than what I felt was necessary so I decided to move code around to see if anything changed. In the process, I noticed that I can use “setTimeout” using the existing delay time to count down right after the sequence.

Lastly, when doing the optional features, I often struggled with formatting in CSS. Things like changing button background, image properties, and updating displays were tricky for me. Referring to online resources often gave me countless different methods to achieve the same styling so it was difficult to choose which method to implement. I often decided by trying to understand the intricacies of each method to see which was best suited for my situation when doing things like, centering an image on a button and changing the text in the display. I could still work on which formatting methods I use but I think choosing optimal methods will become more clear as I learn the language more.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

After finishing my submission, I was fascinated by how fairly easy it is to create a simple webpage and display things; I do not have much experience seeing my code translated to such a visual form. As such, I would like to know how web developers make clean websites. Are there modules/APIs that facilitate the process or are most websites made from scratch? I noticed that there are many approaches to style websites, what criteria are used when selecting a styling method? When working in teams, what practices are done to make sure that website styling and formatting stays consistent and doesn't degenerate?

I would also like to learn more about what steps and factors must be considered to make a website available online. I would assume there might be a third party that must be used to put a website online. How is user information stored and processed? Specifically, in the context of accounts, how is user information and passwords protected on these websites? 

This project in particular reminded me of when I was younger and I would play flash games online; I am interested in possibly making something similar. Something I always wondered was how multiple people can be on the same website at once and how this information would be processed.

Nonetheless, the project has interested me in making more websites and I would like to learn more of what steps, requirements, and upkeep is needed to be able to do so.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time to work on this project, I would likely spend it trying to make it more visually appealing. Perhaps I could even make it more accessible and change the button colors to take into account color blindness. I particularly felt like the win and lose alert could have been more visually appealing; a distinct display such as confetti for a win or an auditory queue of a sad trombone could be played for a loss.

I also realized that some people may not like the added difficulty of a countdown timer after implementing it. I could make a settings button to allow the user to modify the difficulty to their preference (e.g. make the countdown timer optional, allow the user to choose the number of tries, etc).

In terms of my code, I would have liked to test it more with unit test but I am not entirely sure how that is done in web development yet so I settled with manually testing input until I could be reasonably confident that no bugs exist.

Overall, I would spend more time trying to think of what I would like to see if I were a random user visiting the website.




## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/hoW80Q7rqCQ)


## License

    Copyright [FRANCISCO RODRIGUEZ SANTANA]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
