import { Component } from 'react';
import { Typography } from '@mui/material';
import Sketch from 'react-p5';

export function SpellItDrawing() {
    let x = window.innerWidth;
    let y = window.innerHeight;
    let indexCount = 0;
    let wordCount = 0;
    let wordList = ["avacado", "dinosaur", "laptop", "mansion", "resource"];
    let wordStartHorizontal = x/2;
    let wordStartVertical = 100;

    const setup = (p5: any, canvasParentRef: any) => {
        p5.frameRate(2);
        p5.createCanvas(x, y).parent(canvasParentRef);
    };

    const draw = (p5: any) => {
        p5.background(210, 224, 247);

        p5.textSize(32);

        let currWord = wordList[wordCount];

        for (let i = 0; i < wordCount; i++) {
            p5.text(wordList[i], wordStartHorizontal, wordStartVertical + (wordCount * 50));
        }

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
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Enter in words that you would like to practice how to spell. Spell It
            will allow you to learn spellings efficiently. To move forward,
            please sign in.
        </Typography>
        <Sketch setup={setup} draw={draw} />
    </div>
}