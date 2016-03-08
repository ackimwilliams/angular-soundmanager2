interface AngularSoundManager2
{
	addToPlaylist(track: {}): void;
	addTrack(track: {}): any;
	adjustVolume(increase: number): any;
	adjustVolumeSlider(value: number): any;
	asyncLoop(o: any): any;
	clearPlaylist(callback: any): any;
	currentTrackData(): any;
	getCurrentTrack(): any;
	getIndexByValue(array: Array<any>, value: any): any;
	getMuteStatus(): any;
	getPlaylist(key: string): any;
	getRepeatStatus(): boolean;
	getVolume(): number;
	init(): void;
	initPlayTrack(trackId: {}, isResume: boolean): void;
	isInArray(array: Array<any>, value: any): boolean;
	isPlayingStatus(): boolean;
	isTrackValid(track: {}): boolean;
	mute(): void;
	nextTrack(): void;
	pause(): void;
	play(): void;
	playTrack(trackId: {}): void;
	prevTrack(): any;
	removeSong(song: {}, index: number): void;
	repeatToggle(): void;
	resetProgress(): any;
	setCurrentTrack(key: number): void;
	stop(): void;
}