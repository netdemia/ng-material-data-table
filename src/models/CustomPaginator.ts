import { MatPaginatorIntl } from '@angular/material';

export function CustomPaginator() {
    const customPaginator = new MatPaginatorIntl();
    customPaginator.itemsPerPageLabel = 'Lignes par page:';
    customPaginator.nextPageLabel = 'Suivant';
    customPaginator.previousPageLabel = 'Precedent';
    customPaginator.firstPageLabel = 'Premiere page';
    customPaginator.lastPageLabel = 'Derniere page';

    return customPaginator;
}
