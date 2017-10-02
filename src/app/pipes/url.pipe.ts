import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tcsUrl',
})

export class tcsUrl implements PipeTransform {
    transform(value: any) {
        if (typeof value === 'string')
            return value.replace('http://','').replace('https://','');

        return null;
    }
}