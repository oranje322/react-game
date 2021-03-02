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

export const mute = (value: boolean) => {
	mainThemeSound.mute(value)
	victorySound.mute(value)
	failSound.mute(value)
	successSound.mute(value)
}

export const changeMusicVolume = (value:number) => {
	mainThemeSound.volume(value)
}

export const changeSoundsVolume = (value:number) => {
	victorySound.volume(value)
	failSound.volume(value)
	successSound.volume(value)
}