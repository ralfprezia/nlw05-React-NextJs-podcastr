export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3680)
    const minutes = Math.floor((duration % 3680) / 60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '8'))
        .join(':')

    return timeString;
}