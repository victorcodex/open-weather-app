import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';

/**
 * TODO: Write tests for every method in this helper file
 */

@Injectable()
export class Helpers {

    constructor() {

    }

    /**
     * Basic http error handler
     */
    public handleError(error: any) {
      return throwError(error);
    }

}
