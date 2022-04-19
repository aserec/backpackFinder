import { IonInput } from '@ionic/angular';
import { AsyncPipe } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, fromEvent, Subject, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { BackpackService } from 'src/app/core/services/backpack.service';
import { Backpack } from 'src/app/shared/model/backpack';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.page.html',
  styleUrls: ['./finder.page.scss'],
  providers: [AsyncPipe],
})
export class FinderPage implements OnInit, OnDestroy {
  @ViewChild('searchTerm') input: IonInput;
  allBackpacks: Backpack[];
  backpacks$: BehaviorSubject<Backpack[]> = new BehaviorSubject([]);
  subs: Subscription;
  constructor(
    public backpackService: BackpackService,
    public asyncPipe: AsyncPipe
  ) {}

  ngOnInit() {
    this.backpackService.getBackpacks().subscribe((backpacks) => {
      this.allBackpacks = backpacks;
      this.backpacks$.next(backpacks);
    });
  }
  ionViewDidEnter() {
    this.subs = this.input.ionInput
      .pipe(
        map((e: any) => e.target.value),
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe((term: string) => {
        this.filterBackpacks(term);
      });
  }
  filterBackpacks(term) {
    const filteredBackpacks = this.allBackpacks.filter((backpack) =>
      backpack.name
        ? backpack.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        : false
    );
    this.backpacks$.next(filteredBackpacks);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
