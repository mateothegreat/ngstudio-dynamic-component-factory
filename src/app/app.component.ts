import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import {
    DynamicComponentFactoryService
} from '../../projects/dynamic-component-factory/src/lib/dynamic-component-factory.service';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit {

    @ViewChild('outlet', { read: ViewContainerRef }) private readonly viewContainerRef: ViewContainerRef;

    public constructor(private readonly dynamicComponentFactoryService: DynamicComponentFactoryService) {

        this.dynamicComponentFactoryService.createInApplicationRoot('one', OneComponent);

    }

    public ngAfterViewInit() {

        // this.dynamicComponentFactoryService.createInElementById('two1', 'test', TwoComponent);
        // this.dynamicComponentFactoryService.createInElementById('two2', 'test', TwoComponent);
        const instance = this.dynamicComponentFactoryService.createInContainer('three', this.viewContainerRef, TwoComponent);

        //   const instance = this.dynamicComponentFactoryService.createInElementById('two2', 'test', TwoComponent);


        instance.componentRef.instance.someVar = 123;

        console.log(instance);
        // setTimeout(() => {
        //
        //     this.dynamicComponentFactoryService.destroy('two1');
        //     this.dynamicComponentFactoryService.destroy('two3');
        //     this.dynamicComponentFactoryService.destroy('three');
        //     this.dynamicComponentFactoryService.destroy('one');
        //
        //     setTimeout(() => {
        //
        //         this.dynamicComponentFactoryService.destroyAll();
        //
        //         this.dynamicComponentFactoryService.createInContainer('three', this.viewContainerRef, ThreeComponent);
        //
        //     }, 2000);
        //
        // }, 2000);

    }

}
