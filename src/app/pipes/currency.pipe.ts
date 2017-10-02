import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tcsCurrency',
})

export class tcsCurrency implements PipeTransform {
    transform(value: number) {
        let cent: any = (value % 100)

        if (cent === 0) {
            cent = '00';
        } else if ((cent + '').length === 1) {
            cent = '0' + cent;
        }

        let number = Math.floor((value / 100)) + '';
        let result = number.replace(new RegExp("^(\\d{" + (number.length % 3 ? number.length % 3 : 0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();

        return result + ',' + cent;
    }
}