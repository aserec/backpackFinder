import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChunkPipe } from './model/pipes/chunk.pipe';

@NgModule({
  declarations: [ChunkPipe],
  imports: [CommonModule],
  exports: [ChunkPipe],
})
export class SharedModule {}
