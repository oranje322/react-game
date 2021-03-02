import React, {useRef, useState} from "react";
import styled from "styled-components";
import {ISettingsProps} from "../types/propsTypes";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../types/reducerTypes";
import {settingsThunk} from "../redux/thunk";

const SettingsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(34, 34, 34, 0.8);
  display: flex;
  padding: 5px;
`;

const SettingsWrapper = styled.div`
  width: 500px;
  background-color: #fff;
  margin: auto;
  padding: 15px;
  border-radius: 3px;
`;

const SettingsTitle = styled.h2`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 26px;
`;

const InputWrapper = styled.div`
  padding: 10px;
  border-top: 1px solid #000;
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  margin-top: 20px;
`;

const InputRange = styled.input.attrs({
	type: "range",
})`
  cursor: pointer;
`;

const Label = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-right: 20px;
  width: 50%;
`;

const Select = styled.select`
  font-size: 16px;
  padding: 3px;
  width: 100px;
`;

const CheckBox = styled.input.attrs({
	type: "checkbox",
})`
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 15px;
  background: #333333;
  margin-right: 15px;
  border-radius: 3px;
  font-size: 18px;
  max-width: 120px;
  color: #fff;
`;

const KeyInput = styled.input`
  outline: none;
  border: none;
  font-weight: bold;
  max-width: 100px;
  font-size: 18px;
`;


export const Settings = ({setOpenSettings}: ISettingsProps) => {

	const settings = useSelector((state: IState) => state.settings)

	const [gameMode, setGameMode] = useState(settings.gameMode)
	const [speed, setSpeed] = useState(settings.speed)
	const [showCards, setShowCards] = useState(settings.showCards)
	const [musicVolume, setMusicVolume] = useState(settings.musicVolume)
	const [soundsVolume, setSoundsVolume] = useState(settings.soundsVolume)
	const [muteSoundKey, setMuteSoundKey] = useState(settings.keys.muteKey)
	const [autoplayKey, setAutoPlayKey] = useState(settings.keys.autoplayKey)
	const [fullscreenKey, setFullscreenKey] = useState(settings.keys.fullscreenKey)
	const [newGameKey, setNewGameKey] = useState(settings.keys.newGameKey)
	const [statsKey, setStatsKey] = useState(settings.keys.statsKey)
	const [settingsKey, setSettingsKey] = useState(settings.keys.settingsKey)

	const dispatch = useDispatch()

	const ref = useRef<HTMLDivElement>(null)

	const onClickSaveSettings = () => {
		dispatch(settingsThunk({
			musicVolume,
			soundsVolume,
			gameMode,
			speed,
			showCards,
			keys: {
				muteKey: muteSoundKey,
				autoplayKey: autoplayKey,
				fullscreenKey: fullscreenKey,
				newGameKey: newGameKey,
				statsKey: statsKey,
				settingsKey: settingsKey
			}
		}))

		setOpenSettings(false)
	}

	const handleClickOutside = (e: any) => {
		if (!ref?.current?.contains(e.target)) {
			setOpenSettings(false)
		}
	}

	const handleChangeHotkeys = (value: string, field: string) => {
		if (field === 'mute') {
			setMuteSoundKey(value.substr(-1))
		}
		if (field === 'autoplay') {
			setAutoPlayKey(value.substr(-1))
		}
		if (field === 'fullscreen') {
			setFullscreenKey(value.substr(-1))
		}
		if (field === 'newgame') {
			setNewGameKey(value.substr(-1))
		}
		if (field === 'stats') {
			setStatsKey(value.substr(-1))
		}
		if (field === 'settings') {
			setSettingsKey((value.substr(-1)))
		}
	}

	return (
		<SettingsOverlay onClick={handleClickOutside}>
			<SettingsWrapper ref={ref}>
				<SettingsTitle>Settings</SettingsTitle>
				<InputWrapper>
					<Label>Music Volume:</Label>
					<InputRange
						value={musicVolume * 100}
						onChange={(e) => setMusicVolume(Number(e.target.value) / 100)}
					/>
				</InputWrapper>
				<InputWrapper>
					<Label>Sounds Volume:</Label>
					<InputRange
						value={soundsVolume * 100}
						onChange={(e) => setSoundsVolume(Number(e.target.value) / 100)}
					/>
				</InputWrapper>
				<InputWrapper>
					<Label>Game Mode</Label>
					<Select value={gameMode} onChange={(e) => setGameMode(Number(e.target.value))}>
						<option value="0">Junior</option>
						<option value="1">Middle</option>
						<option value="2">Senior</option>
					</Select>
				</InputWrapper>
				<InputWrapper>
					<Label>Speed</Label>
					<Select value={speed} onChange={(e) => setSpeed(Number(e.target.value))}>
						<option value="3000">Slow</option>
						<option value="2000">Standart</option>
						<option value="1000">Fast</option>
					</Select>
				</InputWrapper>
				<InputWrapper style={{borderBottom: '1px solid black'}}>
					<Label>Show cards at start</Label>
					<CheckBox checked={showCards} onChange={(e) => setShowCards(e.target.checked)}/>
				</InputWrapper>
				<SettingsTitle>Hotkeys</SettingsTitle>
				<InputWrapper>
					<Label>Mute sound</Label>
					<KeyInput value={muteSoundKey} onChange={(e) => handleChangeHotkeys(e.target.value, 'mute')}/>
				</InputWrapper>
				<InputWrapper>
					<Label>Autoplay</Label>
					<KeyInput value={autoplayKey} onChange={(e) => handleChangeHotkeys(e.target.value, 'autoplay')}/>
				</InputWrapper>
				<InputWrapper>
					<Label>Fullscreen</Label>
					<KeyInput value={fullscreenKey} onChange={(e) => handleChangeHotkeys(e.target.value, 'fullscreen')}/>
				</InputWrapper>
				<InputWrapper>
					<Label>New game</Label>
					<KeyInput value={newGameKey} onChange={(e) => handleChangeHotkeys(e.target.value, 'newgame')}/>
				</InputWrapper>
				<InputWrapper>
					<Label>Stats</Label>
					<KeyInput value={statsKey} onChange={(e) => handleChangeHotkeys(e.target.value, 'stats')}/>
				</InputWrapper>
				<InputWrapper style={{borderBottom: '1px solid black'}}>
					<Label>Settings</Label>
					<KeyInput value={settingsKey} onChange={(e) => handleChangeHotkeys(e.target.value, 'settings')}/>
				</InputWrapper>
				<ButtonsWrapper>
					<Button onClick={onClickSaveSettings}>
						Save
					</Button>
					<Button onClick={() => setOpenSettings(false)}>
						Cancel
					</Button>
				</ButtonsWrapper>
			</SettingsWrapper>
		</SettingsOverlay>
	);
};