// import { Filme } from './filme';

export class PlaylistItem {
  constructor(public id?: string,
    public title?: string,
    public description?: string,
    // public thumbnails?: string[],
    public thumbnails?: {
        default: string,
        high: string,
        medium: string },
    // itens: PlaylistItems
    ) {}
}