import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'msToTime'
})
export class MsToTimePipe implements PipeTransform {
    transform(ms: any): any {
        let seconds = parseInt((ms / 1000).toFixed(1));
        let minutes = parseInt((ms / (1000 * 60)).toFixed(1));
        let hours = parseInt((ms / (1000 * 60 * 60)).toFixed(1));
        let days = parseInt((ms / (1000 * 60 * 60 * 24)).toFixed(1));
        if (seconds < 60) return seconds + " Sec";
        else if (minutes < 60) return minutes + " Min";
        else if (hours < 24) return hours + " Hrs";
        else return days + " Days"
    }
}