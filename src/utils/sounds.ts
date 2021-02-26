import {Howl} from 'howler';

export const mainThemeSound = new Howl({
    src: '/mp3/main.mp3',
    volume: 1,
    loop: true,
});

export const victorySound = new Howl({
    src: '/mp3/victory.mp3',
    volume: 1
})

export const successSound = new Howl({
    src: '/mp3/success.mp3',
    volume: 1
})

export const failSound = new Howl({
    src: '/mp3/fail.mp3',
    volume: 1
})