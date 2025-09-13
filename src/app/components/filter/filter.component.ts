import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from 'src/app/interfaces/filter_options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public filterOptions: IFilterOptions = {
    name: '',
    startDate: undefined,
    endDate: undefined,
    status: undefined
  };

  @Output('filterSelected') public filterSelectedEmitt = new EventEmitter<IFilterOptions>();

  public statusList = [
    { viewValue: 'Ativo', value: true },
    { viewValue: 'Inativo', value: false }
  ];

  public onFilter() {
    console.log(this.filterOptions);

    this.filterSelectedEmitt.emit(this.filterOptions);
  }

}
