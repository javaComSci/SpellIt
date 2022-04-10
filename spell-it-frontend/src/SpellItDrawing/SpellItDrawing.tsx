import { Component } from 'react';
import { Typography } from '@mui/material';
import Sketch from 'react-p5';

export function SpellItDrawing() {
    let x = window.innerWidth;
    let y = window.innerHeight;
    let fontSize = 32;
    let indexCount = 0;
    let wordCount = 0;
    let wordList = [
        "avacado",
        "fashion",
        "faeture", // wrong spelling
        "laptops",
        "mansion",
        "opening",
        "pictrue", // wrong spelling
        "process",
        "rollout",
        "science",
        "setting", 
        "typical",
        "version",
        "writing"
    ];
    let wordStartHorizontal = x/2;
    let wordStartVertical = 100;

    let description = "Spell It" + 
    " will allow you to learn words efficiently. To move forward, " +
    "please sign in.";

    const setup = (p5: any, canvasParentRef: any) => {
        p5.frameRate(10);
        p5.createCanvas(x, y).parent(canvasParentRef);
    };

    const draw = (p5: any) => {
        p5.background(210, 224, 247);

        p5.textAlign(p5.LEFT);
        p5.textFont("Helvetica", 25);
        p5.text(description, 10, 50);

        p5.textFont("monospace", fontSize);
        p5.textAlign(p5.CENTER);

        let currWord = wordList[wordCount];

        for (let i = 0; i < wordCount; i++) {
            if (i == 2 || i == 6) {
                p5.fill(130, 21, 17);
            }
            else {
                p5.fill(17, 92, 21);
            }
            p5.text(wordList[i], wordStartHorizontal, wordStartVertical + (i * 50));
        }

        p5.fill(0, 102, 153);
        p5.text(currWord.slice(0, indexCount + 1), wordStartHorizontal, wordStartVertical + (wordCount * 50));

        if (indexCount == currWord.length - 1) {
            wordCount = (wordCount == wordList.length - 1) ? 0 : wordCount + 1;
            indexCount = 0;
        }
        else {
            indexCount += 1;
        }
    };

    return <div>
        <Sketch setup={setup} draw={draw} />
    </div>
}