import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getRidOfWhitespace'
})

export class getRidOfWhitespacePipe implements PipeTransform {
    transform(value: string, character: string): string {
        const newValue = value.split(character).join("-");
        return newValue;
    }
}