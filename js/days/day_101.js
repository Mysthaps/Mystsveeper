Textures.background.letter = Textures.fnct.load("misc/Letter.png");

registerDay(101,
    {
        "title": "Mystsveeper 1B - A Colorcharge Puzzle",
        "desc": "Like mentioned in the Welcome screen, this setting is a puzzle. "
              + "Start by pressing on the marked tiles.<br><br>"
              + "Question marks indicate that you do not need to know the number below that tile to progress.<br><br>"
              + "<i>You never need to guess</i>. Good luck.<br><br>"
              + "Obligatory Colorcharge Chart(tm):"
              + "<center><img src=\"desc/46_Colorcharge.png\" style=\"max-width:90%\"/></center><br><br>"
              + "<b>Updated:</b> (Jan 7th)<br>"
              + "- Changed the Blue 2 note, now placed at the start replacing the question mark<br>"
              + "- Removed a Green mine to avoid a forced 50/50",
        "mines": {
            "R": 27,
            "G": 26,
            "B": 25
        },
        "grayMines": true,
        "display": "colorcharge",
        "decrementing": false,
        "autoRestart" : true,
        "x": 12,
        "y": 20,
        "board": "/U4DQUBsEAo4BaPACwANGgBawPrkAr2AXSCHLA9dQxmgGmwC1wB6OgKbg9TAVFQDRYCSkAomAI2AdZABLwSv4EvYDrEAKqEU9AVKAfooAIcBUTBEYBdtQJyAGANCANAAIQZfyAP/5/bToZoL+/o7YlaoutdyKH/uqaTuc1f55nVhtoXCDjXAgBhGmHnEkFlSyf4",
        "fixedPattern": true,
        "setter": [
            [1, 0, ["background", "questionmark"]],
            [5, 0, ["background", "questionmark"]],
            [6, 0, ["background", "questionmark"]],
            [10, 0, ["background", "questionmark"]],
            [11, 0, ["background", "questionmark"]],
            [11, 1, ["background", "questionmark"]],
            [11, 2, ["background", "questionmark"]],
            [11, 3, ["background", "questionmark"]],
            [5, 4, ["background", "questionmark"]],
            [7, 8, ["background", "questionmark"]],
            [11, 8, ["background", "questionmark"]],
            [0, 9, ["background", "questionmark"]],
            [9, 9, ["background", "questionmark"]],
            [11, 10, ["background", "questionmark"]],
            [11, 11, ["background", "questionmark"]],
            [6, 13, ["background", "questionmark"]],
            [6, 14, ["background", "questionmark"]],
            [11, 14, ["background", "questionmark"]],
            [6, 15, ["background", "questionmark"]],
            [11, 15, ["background", "questionmark"]],
            [4, 16, ["background", "questionmark"]],
        ],
        "letters": [
            [1, 0, "Notes from a Former Explorer\n\nIf you ever find yourself stuck in a corridor, count the number of open tiles adjacent to the furthest tile at the time. If it is any number less than 3, there are no mine cancelling traps there. Otherwise, be prepared to take a long journey around."]
        ],
        "entityEvents" : function(x, y, ev){
            if(ev == Entities.events.startGame){
                for(let l of activeSettings.letters){
                    let t = board.at(l[0], l[1]);
                    if(t != null) t.surroundingMines = ["background", "letter"];
                }
                return;
            }
            if((ev != Entities.events.voidClickL) && (ev != Entities.events.voidClickR)) return;
            for(let l of activeSettings.letters){
                if(l[0] == x && l[1] == y){
                    if(l[2].startsWith("$")){
                        openWarning(htmlLetters[l[2]]);
                    }else{
                        openWarning("");
                        let warningContent = document.getElementById("warning-content");
                        let t = l[2].split("\n");
                        for(let i = 0; i < t.length; i++){
                            if(i != 0){
                                warningContent.appendChild(document.createElement("br"));
                            }
                            let s = document.createElement((i > 0) ? "span" : "b");
                            s.innerText = t[i];
                            warningContent.appendChild(s);
                        }
                    }
                }
            }
        },
    });