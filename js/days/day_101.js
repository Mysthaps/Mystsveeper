Textures.background.letter = Textures.fnct.load("misc/Letter.png");

registerDay(101,
    {
        "title": "Mystsveeper 1B - A Colorcharge Puzzle",
        "desc": "Like mentioned in the Welcome screen, this setting is a puzzle. "
              + "Start by pressing on the marked tiles.<br><br>"
              + "Question marks indicate that you do not need to know the number below that tile to progress.<br><br>"
              + "<i>You never need to guess</i>. Good luck.<br><br>"
              + "Obligatory Colorcharge Chart(tm):"
              + "<center><img src=\"desc/46_Colorcharge.png\" style=\"max-width:90%\"/></center><br>",
        "mines": {
            "R": 27,
            "G": 27,
            "B": 25
        },
        "grayMines": true,
        "display": "colorcharge",
        "decrementing": true,
        "autoRestart" : true,
        "x": 12,
        "y": 20,
        "board": "/U4DQUBsEAo4BaPACwANGgBawPrkAr2AXSCHLA9dQxmgGmwC1wB6OgKbg9TAVFQDRYCSkAomAI2AdZABLwSv4EvYDrEAKqEU9AVKAfooAIcBUTBEYBdtQRyAGANCANAAIQc/yAL/J+/zoZoLnzY7YlaoutfqKGZ9qaTvc9f15n1htoXiDjXggBhGmHnEkFlSyA",
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
            [5, 8, "Enclosed Hallway\n\nThis is the end of the line for this specific hallway. The number below this note is a Blue 2, and it is not suggested to continue opening tiles here unless you want to be sent back to the start."]
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