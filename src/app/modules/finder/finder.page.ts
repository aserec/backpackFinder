import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackpackService } from 'src/app/core/services/backpack.service';
import { Backpack } from 'src/app/shared/model/backpack';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.page.html',
  styleUrls: ['./finder.page.scss'],
})
export class FinderPage implements OnInit {
  backpacks$: Observable<Backpack[]> = this.backpackService.getBackpacks();
  constructor(public backpackService: BackpackService) {}

  ngOnInit() {}
}
