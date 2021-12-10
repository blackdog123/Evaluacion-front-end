import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultadoFiltro = [];
    for (const dato of value) {
      if(dato.descripcion.indexOf(args)> -1 ) {
        resultadoFiltro.push(dato)
      } else if(dato.marca.indexOf(args)> -1 ) {
        resultadoFiltro.push(dato)
      } else if(dato.precio.toString().indexOf(args)> -1 ) {
        resultadoFiltro.push(dato)
      }else if(dato.codigo.toString().indexOf(args)> -1){
        resultadoFiltro.push(dato)
      }
    }
    return resultadoFiltro;
  }

}
