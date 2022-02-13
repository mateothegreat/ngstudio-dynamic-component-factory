import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-two',
    templateUrl: './two.component.html',
    styleUrls: [ './two.component.scss' ]
})
export class TwoComponent implements OnInit {

    public someVar: any;

    public ngOnInit(): void {

        console.log(this.someVar);
    }

}
